import { decode, JsonWebTokenError, sign, verify } from 'jsonwebtoken';
import { pbkdf2Sync } from 'crypto';

import {
    ACCESS_INVALID_REFRESH_INVALID,
    ACCESS_INVALID_REFRESH_VALID,
    ACCESS_VALID_REFRESH_INVALID,
    ACCESS_VALID_REFRESH_VALID,
    JWT_AUTH_STATUSES,
} from '../constants';
import { GraphqlError } from '@aligent/utils';
import { getCurrentTimeStamp, getTtlIsExpired, getMinutesToSeconds } from './';

export type decodedAccessToken = {
    bc_customer_id: number;
    exp: number;
    refresh_exp: number;
};

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;
export const REFRESH_TOKEN_EXPIRY_IN_MINUTES__EXTENDED = 43200; // 30 days
export const REFRESH_TOKEN_EXPIRY_IN_MINUTES__NON_EXTENDED = 15;
export const ACCESS_TOKEN_EXPIRY_IN_MINUTES = 14;

/**
 * Gets a tokens expiry based on the current time and adding the
 * minutes a token should expiry
 * @param minutes
 */
export const getTokenExpiryFromMinutes = (minutes: number) => {
    const currentTime = new Date().getTime();

    const minutesInMilliseconds = minutes * 60000;

    const newTimeInMillis = currentTime + minutesInMilliseconds;

    return Math.floor(newTimeInMillis / 1000);
};

/**
 * Creates an access token which is used for user authentication
 * @param userId
 * @param exp
 * @param refreshExp
 */
export const createAccessJWT = (userId: number, exp: number, refreshExp: number) => {
    return sign(
        {
            bc_customer_id: userId,
            exp,
            refresh_exp: refreshExp,
        },
        JWT_PRIVATE_KEY
    );
};

/**
 * Creates a refresh token used to ask for a new access token
 * @param userId
 * @param accessTokenExp - used to make the refresh token unique when refreshed
 */
export const createRefreshToken = (userId: number, accessTokenExp: number) => {
    return pbkdf2Sync(`${userId}${accessTokenExp}`, JWT_PRIVATE_KEY, 10000, 64, 'sha512').toString(
        'hex'
    );
};

/**
 * Returns a verified token or throws an error
 * @param accessToken
 */
export const getVerifiedAccessToken = (accessToken: string = '') => {
    /* If the access token is expired then an error will be thrown, and we will
     * end up in the catch "statement" */
    try {
        return verify(accessToken, JWT_PRIVATE_KEY);
    } catch (e) {
        return e;
    }
};

/**
 * Returns a verified refresh token or returns an error
 * @param decodedAccessToken
 * @param oldRefreshToken
 */
export const getVerifiedRefreshToken = (
    decodedAccessToken: decodedAccessToken,
    oldRefreshToken: string
) => {
    const { bc_customer_id, exp, refresh_exp } = decodedAccessToken;

    if (!oldRefreshToken) {
        return Error("refresh token doesn't exist");
    }

    const recreatedRefreshToken = createRefreshToken(bc_customer_id, exp);

    if (recreatedRefreshToken !== oldRefreshToken) {
        return Error("recreated refresh token doesn't match actual token");
    }

    if (getTtlIsExpired(refresh_exp)) {
        return Error('Refresh token has expired');
    }

    return oldRefreshToken;
};

/**
 * Returns various status based on the access token and refresh token validity
 * @param oldAuthToken
 * @param oldRefreshToken
 */
export const getAuthTokenStatus = (
    oldAuthToken: string,
    oldRefreshToken: string
): JWT_AUTH_STATUSES => {
    if (!oldAuthToken || !oldAuthToken?.toLowerCase().startsWith('bearer '))
        return JWT_AUTH_STATUSES[ACCESS_INVALID_REFRESH_INVALID];
    const [, accessToken] = oldAuthToken.split(' ');

    const verifiedAccessToken =
        (getVerifiedAccessToken(accessToken) as decodedAccessToken) || JsonWebTokenError;

    const decodedAccessToken = (decode(accessToken) as decodedAccessToken) || JsonWebTokenError;
    const verifiedRefreshToken = getVerifiedRefreshToken(decodedAccessToken, oldRefreshToken);

    if (verifiedAccessToken instanceof JsonWebTokenError && verifiedRefreshToken instanceof Error) {
        return JWT_AUTH_STATUSES[ACCESS_INVALID_REFRESH_INVALID];
    }

    if (verifiedRefreshToken instanceof Error) {
        return JWT_AUTH_STATUSES[ACCESS_VALID_REFRESH_INVALID];
    }

    if (verifiedAccessToken instanceof JsonWebTokenError) {
        return JWT_AUTH_STATUSES[ACCESS_INVALID_REFRESH_VALID];
    }

    return JWT_AUTH_STATUSES[ACCESS_VALID_REFRESH_VALID];
};

/**
 * Gets an access token used for user authentication and refresh token to ask
 * for a new access token
 * @param userId
 * @param isExtendedLogin
 */
export const generateLoginTokens = (
    userId: number,
    isExtendedLogin?: boolean
): { accessToken: string; refreshToken: string } => {
    const accessTokenExp = getTokenExpiryFromMinutes(ACCESS_TOKEN_EXPIRY_IN_MINUTES);

    const refreshTokenExp = getTokenExpiryFromMinutes(
        isExtendedLogin
            ? REFRESH_TOKEN_EXPIRY_IN_MINUTES__EXTENDED
            : REFRESH_TOKEN_EXPIRY_IN_MINUTES__NON_EXTENDED
    );

    const refreshToken = createRefreshToken(userId, accessTokenExp);

    return {
        accessToken: createAccessJWT(userId, accessTokenExp, refreshTokenExp),
        refreshToken: refreshToken,
    };
};

/**
 * Determines what the next rolling refresh token expiry should be.
 * There are 3 outcomes
 * 1. The current time is over 15 minutes before the refresh expiry time.
 *    - We return the current refresh tokens ttl
 *
 * 2. The current time is within 15 minutes of the refresh expiry time.
 *    - Extend the refresh token expiry time by another 15 minutes.
 *
 * 3. The current time has passed the refresh token expiry time
 *    - Throw an error as the refresh token has expired and need to
 *      invalidate the session.
 *
 * @param currentTimeStamp
 * @param refreshExp
 */
export const getRollingRefreshTokenExp = (currentTimeStamp: number, refreshExp: number) => {
    const timeDifference = refreshExp - currentTimeStamp;

    /* Validation should prevent us getting here but in case the timeDifference
     * is in the negative, throw an error. */
    if (timeDifference < 0) {
        return Error('Refresh token has expired');
    }

    const nonExtendedRefreshExpInSeconds = getMinutesToSeconds(
        REFRESH_TOKEN_EXPIRY_IN_MINUTES__NON_EXTENDED
    );

    const shouldExtendRefresh = timeDifference < nonExtendedRefreshExpInSeconds;
    return shouldExtendRefresh
        ? getTokenExpiryFromMinutes(REFRESH_TOKEN_EXPIRY_IN_MINUTES__NON_EXTENDED)
        : refreshExp;
};

/**
 * Gets new tokens to extend the users login session. A new access token of 15
 * minutes will be generated and a new refresh token with either its previous
 * expiry time or it expiry time plus 16 minutes.
 * @param oldAccessToken
 */
export const generateRefreshedTokens = (
    oldAccessToken: string
): { accessToken: string; refreshToken: string } => {
    const [, accessToken] = oldAccessToken.split(' ');

    const decodedAccessToken = decode(accessToken) as decodedAccessToken;

    const { bc_customer_id, refresh_exp } = decodedAccessToken;

    const currentTimeStamp = getCurrentTimeStamp();
    const accessTokenExp = getTokenExpiryFromMinutes(ACCESS_TOKEN_EXPIRY_IN_MINUTES);
    const refreshTokenExp = getRollingRefreshTokenExp(currentTimeStamp, refresh_exp);

    if (refreshTokenExp instanceof Error) {
        throw new GraphqlError("Refresh tokens couldn't be generated", 'authorization');
    }

    const newAccessToken = createAccessJWT(bc_customer_id, accessTokenExp, refreshTokenExp);
    const newRefreshToken = createRefreshToken(bc_customer_id, accessTokenExp);

    return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
    };
};
