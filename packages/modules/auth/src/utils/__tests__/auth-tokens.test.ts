import { JsonWebTokenError, sign, TokenExpiredError } from 'jsonwebtoken';
import {
    createAccessJWT,
    createRefreshToken,
    getAuthTokenStatus,
    getRollingRefreshTokenExp,
    getTokenExpiryFromMinutes,
    getVerifiedAccessToken,
} from '../auth-tokens';
import {
    ACCESS_INVALID_REFRESH_INVALID,
    ACCESS_INVALID_REFRESH_VALID,
    ACCESS_VALID_REFRESH_INVALID,
    ACCESS_VALID_REFRESH_VALID,
    JWT_AUTH_STATUSES,
} from '../../constants';

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
        const validRefreshToken = createRefreshToken(userId, refreshTokenExp);

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
        expect(newRefreshTokenExp).toEqual(1710635428);
    });

    it(`Returns an Error if the current time has passed the refresh token expiry time`, () => {
        const currentTime = 1710634556; // 10:15 am
        const refreshTokenExp = 1710634468; // 10.14 am
        const newRefreshTokenExp = getRollingRefreshTokenExp(currentTime, refreshTokenExp);
        expect(newRefreshTokenExp).toBeInstanceOf(Error);
    });
});
