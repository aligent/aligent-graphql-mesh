import { decode, JsonWebTokenError, sign, TokenExpiredError } from 'jsonwebtoken';
import { advanceBy, advanceTo, clear } from 'jest-date-mock';
import {
    ACCESS_TOKEN_EXPIRY_IN_MINUTES,
    createAccessJWT,
    createRefreshToken,
    decodedAccessToken,
    generateLoginTokens,
    generateRefreshedTokens,
    getAuthTokenStatus,
    getRollingRefreshTokenExp,
    getTokenExpiryFromMinutes,
    getVerifiedAccessToken,
    REFRESH_TOKEN_EXPIRY_IN_MINUTES__EXTENDED,
    REFRESH_TOKEN_EXPIRY_IN_MINUTES__NON_EXTENDED,
} from '../auth-tokens';
import {
    ACCESS_INVALID_REFRESH_INVALID,
    ACCESS_INVALID_REFRESH_VALID,
    ACCESS_VALID_REFRESH_INVALID,
    ACCESS_VALID_REFRESH_VALID,
    JWT_AUTH_STATUSES,
} from '../../constants';
import { formatTestingDate, getCurrentTimeStamp, getMinutesToSeconds } from '../';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;
const userId = 23;

describe('Json web token errors', () => {
    const tokenExp = getTokenExpiryFromMinutes(-5);
    const expiredToken = createAccessJWT(userId, tokenExp, tokenExp);

    it(`Throws an "invalid signature" error when verifying a malformed JWT`, () => {
        const malformedJwt = 'ae6r4h16sat56th';
        const tokenStatus = getVerifiedAccessToken(malformedJwt) as { message: string };
        expect(tokenStatus).toBeInstanceOf(JsonWebTokenError);
        expect(tokenStatus.message).toBe('jwt malformed');
    });

    it(`Throws an "invalid signature" error when verifying a modified JWT`, () => {
        const malformedJwt = expiredToken + 'a';
        const tokenStatus = getVerifiedAccessToken(malformedJwt) as { message: string };
        expect(tokenStatus).toBeInstanceOf(JsonWebTokenError);
        expect(tokenStatus.message).toBe('invalid signature');
    });

    it(`Throws an "invalid signature" error for a JWT with a signature other than the one being used`, () => {
        const tokenWithDifferentSignature = sign(
            { bc_customer_id: userId, exp: tokenExp, refresh_exp: tokenExp },
            'different_signature'
        );
        const tokenStatus = getVerifiedAccessToken(tokenWithDifferentSignature) as {
            message: string;
        };
        expect(tokenStatus).toBeInstanceOf(JsonWebTokenError);
        expect(tokenStatus.message).toBe('invalid signature');
    });

    it(`Throws a "jwt expired" error when a JWTs ttl has elapsed`, () => {
        const tokenStatus = getVerifiedAccessToken(expiredToken) as { message: string };
        expect(tokenStatus).toBeInstanceOf(TokenExpiredError);
        expect(tokenStatus.message).toBe('jwt expired');
    });
});

describe('JWT statues', () => {
    it(`Returns a "ACCESS_INVALID_REFRESH_INVALID" status when the auth token is missing the bearer string`, () => {
        const tokenExp = getTokenExpiryFromMinutes(-5);

        const expiredToken = createAccessJWT(userId, tokenExp, tokenExp);
        const expiredRefreshToken = createRefreshToken(userId, tokenExp);

        const tokenStatus = getAuthTokenStatus(expiredToken, expiredRefreshToken);

        expect(tokenStatus).toEqual(JWT_AUTH_STATUSES[ACCESS_INVALID_REFRESH_INVALID]);
    });

    it(`Returns a "ACCESS_INVALID_REFRESH_INVALID" status when both access and refresh tokens are invalid`, () => {
        const tokenExp = getTokenExpiryFromMinutes(-5);

        const expiredToken = createAccessJWT(userId, tokenExp, tokenExp);
        const expiredRefreshToken = createRefreshToken(userId, tokenExp);

        const tokenStatus = getAuthTokenStatus(`Bearer ${expiredToken}`, expiredRefreshToken);

        expect(tokenStatus).toEqual(JWT_AUTH_STATUSES[ACCESS_INVALID_REFRESH_INVALID]);
    });

    it(`Returns a "ACCESS_VALID_REFRESH_INVALID" status when the access token is valid and refresh token is invalid`, () => {
        const accessTokenExp = getTokenExpiryFromMinutes(5);
        const refreshTokenExp = getTokenExpiryFromMinutes(-5);

        const validAccessToken = createAccessJWT(userId, accessTokenExp, refreshTokenExp);
        const expiredRefreshToken = createRefreshToken(userId, refreshTokenExp);

        const tokenStatus = getAuthTokenStatus(`Bearer ${validAccessToken}`, expiredRefreshToken);

        expect(tokenStatus).toEqual(JWT_AUTH_STATUSES[ACCESS_VALID_REFRESH_INVALID]);
    });

    it(`Returns a "ACCESS_VALID_REFRESH_INVALID" status if a "refresh_token" is missing`, () => {
        const accessTokenExp = getTokenExpiryFromMinutes(5);
        const refreshTokenExp = getTokenExpiryFromMinutes(-5);

        const missingRefreshToken = '';
        const validAccessToken = sign(
            { bc_customer_id: userId, exp: accessTokenExp, refresh_exp: refreshTokenExp },
            JWT_PRIVATE_KEY
        );

        const tokenStatus = getAuthTokenStatus(`Bearer ${validAccessToken}`, missingRefreshToken);
        expect(tokenStatus).toEqual(JWT_AUTH_STATUSES[ACCESS_VALID_REFRESH_INVALID]);
    });

    it(`Returns a "ACCESS_INVALID_REFRESH_VALID" status when access token is invalid but the refresh token is valid`, () => {
        const accessTokenExp = getTokenExpiryFromMinutes(-5);
        const refreshTokenExp = getTokenExpiryFromMinutes(5);

        const invalidAccessToken = createAccessJWT(userId, accessTokenExp, refreshTokenExp);
        const validRefreshToken = createRefreshToken(userId, accessTokenExp);

        const tokenStatus = getAuthTokenStatus(`Bearer ${invalidAccessToken}`, validRefreshToken);
        expect(tokenStatus).toEqual(JWT_AUTH_STATUSES[ACCESS_INVALID_REFRESH_VALID]);
    });

    it(`Returns a "ACCESS_VALID_REFRESH_VALID" status when both access and refresh tokens are invalid`, () => {
        const accessTokenExp = getTokenExpiryFromMinutes(5);
        const refreshTokenExp = getTokenExpiryFromMinutes(5);

        const invalidAccessToken = createAccessJWT(userId, accessTokenExp, refreshTokenExp);
        const validRefreshToken = createRefreshToken(userId, refreshTokenExp);

        const tokenStatus = getAuthTokenStatus(`Bearer ${invalidAccessToken}`, validRefreshToken);
        expect(tokenStatus).toEqual(JWT_AUTH_STATUSES[ACCESS_VALID_REFRESH_VALID]);
    });
});

describe(`Token TTL's`, () => {
    it(`Returns the current refresh tokens expiry time if the current time is over 15 minutes before it`, () => {
        const currentTime = 1710632756; // 9:45 am
        const refreshTokenExp = 1710634468; // 10.14 am
        const newRefreshTokenExp = getRollingRefreshTokenExp(currentTime, refreshTokenExp);
        expect(newRefreshTokenExp).toEqual(1710634468);
    });

    it(`Returns the refresh token plus 15 minutes if the current time is within 15 minutes before expiry`, () => {
        const currentTime = 1710633628; // 10:00 am
        const refreshTokenExp = 1710634468; // 10.14 am
        const newRefreshTokenExp = getRollingRefreshTokenExp(currentTime, refreshTokenExp);
        expect(newRefreshTokenExp).toEqual(1710635368);
    });

    it(`Returns an Error if the current time has passed the refresh token expiry time`, () => {
        const currentTime = 1710634556; // 10:15 am
        const refreshTokenExp = 1710634468; // 10.14 am
        const newRefreshTokenExp = getRollingRefreshTokenExp(currentTime, refreshTokenExp);
        expect(newRefreshTokenExp).toBeInstanceOf(Error);
    });

    it(`Returns the correct token expiry times for a user not wanting to extend their session`, () => {
        const currentTime = getCurrentTimeStamp();
        const expInMilliseconds = getMinutesToSeconds(ACCESS_TOKEN_EXPIRY_IN_MINUTES);
        const refreshExpInMilliseconds = getMinutesToSeconds(
            REFRESH_TOKEN_EXPIRY_IN_MINUTES__NON_EXTENDED
        );

        const isExtendedLogin = false;
        const { accessToken, refreshToken } = generateLoginTokens(userId, isExtendedLogin);
        const decodedAccessToken = decode(accessToken) as decodedAccessToken;

        const expectAccessExp = currentTime + expInMilliseconds;
        const expectRefreshExp = currentTime + refreshExpInMilliseconds;

        expect(decodedAccessToken.exp).toBe(expectAccessExp);
        expect(decodedAccessToken.refresh_exp).toBe(expectRefreshExp);
    });

    it(`Returns the correct token expiry times for a user wanting to extend their session`, () => {
        const currentTime = getCurrentTimeStamp();
        const expInMilliseconds = getMinutesToSeconds(ACCESS_TOKEN_EXPIRY_IN_MINUTES);
        const refreshExpInMilliseconds = getMinutesToSeconds(
            REFRESH_TOKEN_EXPIRY_IN_MINUTES__EXTENDED
        );

        const isExtendedLogin = true;
        const { accessToken, refreshToken } = generateLoginTokens(userId, isExtendedLogin);
        const decodedAccessToken = decode(accessToken) as decodedAccessToken;

        const expectAccessExp = currentTime + expInMilliseconds;
        const expectRefreshExp = currentTime + refreshExpInMilliseconds;

        expect(decodedAccessToken.exp).toBe(expectAccessExp);
        expect(decodedAccessToken.refresh_exp).toBe(expectRefreshExp);
    });

    /**
     * The test creates the login tokens then advances time by 15 minutes.
     * This means the login access_token will expire and when we get a new refreshed
     * access token it will have an expiry of another additional 15 minutes.
     */
    it(`Returns the correct token expiry times when tokens are regenerated`, () => {
        const currentTime = getCurrentTimeStamp();

        const {
            accessToken: loginAccessToken, // "exp" will be 15 minutes after the "currentTime"
        } = generateLoginTokens(userId, false);

        const expInSeconds = getMinutesToSeconds(ACCESS_TOKEN_EXPIRY_IN_MINUTES);
        const expInMillisecondSeconds = expInSeconds * 1000;
        // Advance the current time by 15 minutes
        advanceBy(expInMillisecondSeconds);

        const { accessToken } = generateRefreshedTokens(`Bearer ${loginAccessToken}`);
        const {
            // "exp" will be 15 minutes after the "currentTime" and another 15 minutes after the
            // loginAccessToken.exp. This means the exp will be 30 minutes after the "currentTime"
            exp: refreshedAccessTokenExp,
            refresh_exp: refreshedRefreshTokenExp,
        } = decode(accessToken) as decodedAccessToken;

        const refreshExpInMilliseconds = getMinutesToSeconds(
            REFRESH_TOKEN_EXPIRY_IN_MINUTES__NON_EXTENDED
        );

        const expectAccessExp = currentTime + expInSeconds * 2;
        const expectRefreshExp = currentTime + refreshExpInMilliseconds * 2;

        expect(refreshedAccessTokenExp).toBe(expectAccessExp);
        expect(refreshedRefreshTokenExp).toBe(expectRefreshExp);
    });

    /**
     * This tests that the refresh token exp is applied to the next regenerated refresh token
     */
    it(`Returns the correct token expiry times when tokens are regenerated with an extended session`, () => {
        const currentTime = getCurrentTimeStamp();
        const refreshExpInMilliseconds = getMinutesToSeconds(
            REFRESH_TOKEN_EXPIRY_IN_MINUTES__EXTENDED
        );
        const expectRefreshExp = currentTime + refreshExpInMilliseconds;

        const {
            accessToken: loginAccessToken, // "exp" will be 15 minutes after the "currentTime"
        } = generateLoginTokens(userId, true);

        const { refresh_exp: loginRefreshTokenExp } = decode(
            loginAccessToken
        ) as decodedAccessToken;
        expect(loginRefreshTokenExp).toBe(expectRefreshExp);

        const expInSeconds = getMinutesToSeconds(ACCESS_TOKEN_EXPIRY_IN_MINUTES);
        const expInMillisecondSeconds = expInSeconds * 1000;
        // Advance the current time by 15 minutes
        advanceBy(expInMillisecondSeconds);

        const { accessToken, refreshToken } = generateRefreshedTokens(`Bearer ${loginAccessToken}`);

        const {
            // "exp" will be 15 minutes after the "currentTime" and another 15 minutes after the
            // loginAccessToken.exp. This means the exp will be 30 minutes after the "currentTime"
            exp: refreshedAccessTokenExp,
            refresh_exp: refreshedRefreshTokenExp,
        } = decode(accessToken) as decodedAccessToken;

        const expectAccessExp = currentTime + expInSeconds * 2;

        expect(refreshedAccessTokenExp).toBe(expectAccessExp);
        expect(refreshedRefreshTokenExp).toBe(expectRefreshExp);
    });

    /**
     * This tests that the refresh token exp is applied to the next regenerated refresh token
     */
    it(`Check the session extends 15 minutes if the session is active when the extended session time expires`, () => {
        advanceTo(new Date('2024-03-01T09:00:00'));

        const {
            accessToken: loginAccessToken, // "exp" will be 15 minutes after the "currentTime"
        } = generateLoginTokens(userId, true);

        /* Advance the time by 30 day when the extended session will expire */
        advanceTo(new Date('2024-03-31T09:00:00'));
        const { accessToken: refreshedAccessToken } = generateRefreshedTokens(
            `Bearer ${loginAccessToken}`
        );

        const {
            // "exp" will be 15 minutes after the "currentTime" and another 15 minutes after the
            // loginAccessToken.exp. This means the exp will be 30 minutes after the "currentTime"
            exp: refreshedAccessTokenExp,
            refresh_exp: refreshedRefreshTokenExp,
        } = decode(refreshedAccessToken) as decodedAccessToken;

        expect(formatTestingDate(new Date(refreshedAccessTokenExp * 1000))).toBe(
            '31/03/2024, 09:14'
        );
        expect(formatTestingDate(new Date(refreshedRefreshTokenExp * 1000))).toBe(
            '31/03/2024, 09:15'
        );

        clear();
    });
});
