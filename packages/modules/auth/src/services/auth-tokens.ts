import { decode, JsonWebTokenError, sign, TokenExpiredError, verify } from 'jsonwebtoken';
import { pbkdf2Sync } from 'crypto';

import {
    ACCESS_TOKEN_EXPIRY_IN_MINUTES,
    JWT_AUTH_STATUSES,
    REFRESH_TOKEN_EXPIRY_IN_MINUTES__EXTENDED,
    REFRESH_TOKEN_EXPIRY_IN_MINUTES__NON_EXTENDED,
} from '../constants';
import { GraphqlError } from '@aligent/utils';
import { getCurrentTimeStamp, getMinutesToSeconds, getTtlIsExpired } from '../utils';
import { decodedAccessToken } from '../types';
import { CONTEXT, forwardRef, Inject, Injectable } from 'graphql-modules';
import { ModuleConfigToken } from '../providers';
import { ModuleConfig } from '../index';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;

const {
    ACCESS_VALID_REFRESH_VALID,
    ACCESS_INVALID_REFRESH_VALID,
    ACCESS_VALID_REFRESH_INVALID,
    ACCESS_INVALID_REFRESH_INVALID,
} = JWT_AUTH_STATUSES;

@Injectable({
    global: true,
})
export class AuthTokenService {
    protected extendRefreshTokenExpiryInMinutes: number;
    protected nonExtendRefreshTokenExpiryInMinutes: number;
    protected accessTokenExpiryInMinutes: number;

    constructor(
        @Inject(forwardRef(() => ModuleConfigToken)) protected config: ModuleConfig,
        // eslint-disable-next-line no-unused-vars
        @Inject(CONTEXT) private context: GraphQLModules.GlobalContext
    ) {
        /*
         * Expiry times can be defined in the module config when creating the auth module.
         * If no expiry time is defined in the auth module config, the corresponding fallback expiry time
         * from constants.ts will be used.
         * */
        this.extendRefreshTokenExpiryInMinutes =
            this.config.extendRefreshTokenExpiryInMinutes ||
            REFRESH_TOKEN_EXPIRY_IN_MINUTES__EXTENDED;
        this.nonExtendRefreshTokenExpiryInMinutes =
            this.config.nonExtendRefreshTokenExpiryInMinutes ||
            REFRESH_TOKEN_EXPIRY_IN_MINUTES__NON_EXTENDED;
        this.accessTokenExpiryInMinutes =
            this.config.accessTokenExpiryInMinutes || ACCESS_TOKEN_EXPIRY_IN_MINUTES;

        this.verifyExpiryTimes();
    }

    /**
     * A check to ensure the defined expiry times are not less
     */
    verifyExpiryTimes() {
        if (this.accessTokenExpiryInMinutes >= this.nonExtendRefreshTokenExpiryInMinutes) {
            throw new GraphqlError(
                `"accessTokenExpiryInMinutes" needs to be less than "nonExtendRefreshTokenExpiryInMinutes"`,
                'input'
            );
        }

        if (this.nonExtendRefreshTokenExpiryInMinutes >= this.extendRefreshTokenExpiryInMinutes) {
            throw new GraphqlError(
                `"nonExtendRefreshTokenExpiryInMinutes" needs to be less than "extendRefreshTokenExpiryInMinutes"`,
                'input'
            );
        }
    }

    /**
     * Gets a tokens expiry based on the current time and adding the
     * minutes a token should expiry
     * @param minutes
     */
    getTokenExpiryFromMinutes(minutes: number) {
        const currentTime = new Date().getTime();

        const minutesInMilliseconds = minutes * 60000;

        const newTimeInMillis = currentTime + minutesInMilliseconds;

        return Math.floor(newTimeInMillis / 1000);
    }

    /**
     * Creates an access token which is used for user authentication
     * @param userId
     * @param exp
     * @param refreshExpiry
     */
    createAccessJWT(userId: number, exp: number, refreshExpiry: number) {
        return sign(
            {
                bc_customer_id: userId,
                exp,
                refresh_expiry: refreshExpiry,
            },
            JWT_PRIVATE_KEY
        );
    }

    /**
     * Creates a refresh token used to ask for a new access token
     * @param userId
     * @param accessTokenExpiry - used to make the refresh token unique when refreshed
     */
    createRefreshToken(userId: number, accessTokenExpiry: number) {
        return pbkdf2Sync(
            `${userId}${accessTokenExpiry}`,
            JWT_PRIVATE_KEY,
            10000,
            64,
            'sha512'
        ).toString('hex');
    }

    /**
     * Creates a hash of the refresh token
     *
     * Note: This hashed version of the token should not be exposed to the public
     * and only for storing in the db and recreating hashes for comparison.
     *
     * @param refreshToken
     */
    getHashedRefreshToken(refreshToken: string) {
        return pbkdf2Sync(refreshToken, JWT_PRIVATE_KEY, 10000, 64, 'sha512').toString('hex');
    }

    /**
     * Returns a verified token or throws an error
     * @param accessToken
     */
    getVerifiedAccessToken(accessToken: string) {
        /* If the access token is expired then an error will be thrown, and we will
         * end up in the catch "statement" */
        try {
            return verify(accessToken, JWT_PRIVATE_KEY);
        } catch (e) {
            return e;
        }
    }

    /**
     * Returns a verified refresh token or returns an error
     * @param decodedAccessToken
     * @param oldRefreshToken
     */
    getVerifiedRefreshToken(decodedAccessToken: decodedAccessToken, oldRefreshToken: string) {
        const { bc_customer_id, exp, refresh_expiry } = decodedAccessToken;

        if (!oldRefreshToken) {
            return Error("refresh token doesn't exist");
        }

        const recreatedRefreshToken = this.createRefreshToken(bc_customer_id, exp);

        if (recreatedRefreshToken !== oldRefreshToken) {
            return Error("recreated refresh token doesn't match actual token");
        }

        if (getTtlIsExpired(refresh_expiry)) {
            return Error('Refresh token has expired');
        }

        return oldRefreshToken;
    }

    getDecodedAuthToken(authToken: string): decodedAccessToken | null {
        if (!authToken || !authToken?.toLowerCase().startsWith('bearer ')) return null;
        const [, accessToken] = authToken.split(' ');

        return decode(accessToken) as decodedAccessToken;
    }

    /**
     * Returns various status based on the access token and refresh token validity
     * @param oldAuthToken
     * @param oldRefreshToken
     */
    getAuthTokenStatus(oldAuthToken: string, oldRefreshToken: string): JWT_AUTH_STATUSES {
        if (!oldAuthToken || !oldAuthToken?.toLowerCase().startsWith('bearer '))
            return ACCESS_INVALID_REFRESH_INVALID;
        const [, accessToken] = oldAuthToken.split(' ');

        const verifiedAccessToken = this.getVerifiedAccessToken(accessToken) as
            | decodedAccessToken
            | JsonWebTokenError;

        const decodedAccessToken = (decode(accessToken) as decodedAccessToken) || JsonWebTokenError;
        const verifiedRefreshToken = this.getVerifiedRefreshToken(
            decodedAccessToken,
            oldRefreshToken
        );

        /* Both tokens are invalid*/
        if (
            verifiedAccessToken instanceof JsonWebTokenError &&
            verifiedRefreshToken instanceof Error
        ) {
            return ACCESS_INVALID_REFRESH_INVALID;
        }

        /* The "verifiedAccessToken" is an error but isn't a TTL ralated error
         * which can mean the JWT was manipulated */
        if (
            verifiedAccessToken instanceof JsonWebTokenError &&
            !(verifiedAccessToken instanceof TokenExpiredError)
        ) {
            return ACCESS_INVALID_REFRESH_INVALID;
        }

        /* For whatever reason the "verifiedRefreshToken" causes an error */
        if (verifiedRefreshToken instanceof Error) {
            return ACCESS_VALID_REFRESH_INVALID;
        }

        /* The verifiedAccessToken TTL has expired, but we can
         * generate a new one because the refresh token is still valid */
        if (verifiedAccessToken instanceof TokenExpiredError) {
            return ACCESS_INVALID_REFRESH_VALID;
        }

        /* Both tokens are valid */
        return ACCESS_VALID_REFRESH_VALID;
    }

    /**
     * Gets an access token used for user authentication and refresh token to ask
     * for a new access token
     * @param userId
     * @param isExtendedLogin
     */
    generateLoginTokens(
        userId: number,
        isExtendedLogin?: boolean
    ): { accessToken: string; refreshToken: string; refreshTokenExpiry: number } {
        const accessTokenExpiry = this.getTokenExpiryFromMinutes(this.accessTokenExpiryInMinutes);

        const refreshTokenExpiry = this.getTokenExpiryFromMinutes(
            isExtendedLogin
                ? this.extendRefreshTokenExpiryInMinutes
                : this.nonExtendRefreshTokenExpiryInMinutes
        );

        const refreshToken = this.createRefreshToken(userId, accessTokenExpiry);

        return {
            accessToken: this.createAccessJWT(userId, accessTokenExpiry, refreshTokenExpiry),
            refreshToken,
            refreshTokenExpiry,
        };
    }

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
    getRollingRefreshTokenExpiry(currentTimeStamp: number, refreshExp: number) {
        const timeDifference = refreshExp - currentTimeStamp;

        /* Validation should prevent us getting here but in case the timeDifference
         * is in the negative, throw an error. */
        if (timeDifference < 0) {
            return Error('Refresh token has expired');
        }

        const nonExtendedRefreshExpInSeconds = getMinutesToSeconds(
            this.nonExtendRefreshTokenExpiryInMinutes
        );

        const shouldExtendRefresh = timeDifference < nonExtendedRefreshExpInSeconds;
        return shouldExtendRefresh
            ? this.getTokenExpiryFromMinutes(this.nonExtendRefreshTokenExpiryInMinutes)
            : refreshExp;
    }

    /**
     * Gets new tokens to extend the users login session. A new access token of 15
     * minutes will be generated and a new refresh token with either its previous
     * expiry time or it expiry time plus 16 minutes.
     * @param oldAccessToken
     */
    generateRefreshedTokens(oldAccessToken: string): {
        accessToken: string;
        refreshToken: string;
        refreshTokenExpiry: number;
    } {
        const [, accessToken] = oldAccessToken.split(' ');

        const decodedAccessToken = decode(accessToken) as decodedAccessToken;

        const { bc_customer_id, refresh_expiry } = decodedAccessToken;

        const currentTimeStamp = getCurrentTimeStamp();
        const accessTokenExpiry = this.getTokenExpiryFromMinutes(this.accessTokenExpiryInMinutes);
        const refreshTokenExpiry = this.getRollingRefreshTokenExpiry(
            currentTimeStamp,
            refresh_expiry
        );

        if (refreshTokenExpiry instanceof Error) {
            throw new GraphqlError("Refresh tokens couldn't be generated", 'authorization');
        }

        const newAccessToken = this.createAccessJWT(
            bc_customer_id,
            accessTokenExpiry,
            refreshTokenExpiry
        );
        const newRefreshToken = this.createRefreshToken(bc_customer_id, accessTokenExpiry);

        return {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
            refreshTokenExpiry: refreshTokenExpiry,
        };
    }
}
