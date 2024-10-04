import { JsonWebTokenError, sign, TokenExpiredError } from 'jsonwebtoken';
import {
    createAccessJWT,
    createRefreshToken,
    getAuthTokenStatus,
    getHashedRefreshToken,
    getTokenExpiryFromMinutes,
    getVerifiedAccessToken,
} from '../index';
import { JWT_AUTH_STATUSES } from '../../constants';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;
const customerId = 23;

const {
    ACCESS_VALID_REFRESH_VALID,
    ACCESS_INVALID_REFRESH_VALID,
    ACCESS_VALID_REFRESH_INVALID,
    ACCESS_INVALID_REFRESH_INVALID,
} = JWT_AUTH_STATUSES;

describe('TimeZone', () => {
    it('Checks the jest TZ env variable is set to UTC', () => {
        const timezone = Intl.DateTimeFormat().resolvedOptions();

        // Log out timezone info in the test so we know what we're working under
        console.info(timezone);
        expect(process.env.TZ).toBe('UTC');
    });
});

describe('Json web token errors', () => {
    const tokenExpiry = getTokenExpiryFromMinutes(-5);
    const expiredToken = createAccessJWT(customerId, tokenExpiry, tokenExpiry);

    it(`Throws an "invalid signature" error when verifying a malformed JWT`, () => {
        const malformedJwt = 'ae6r4h16sat56th';
        const tokenStatus = getVerifiedAccessToken(malformedJwt) as {
            message: string;
        };
        expect(tokenStatus).toBeInstanceOf(JsonWebTokenError);
        expect(tokenStatus.message).toBe('jwt malformed');
    });

    it(`Throws an "invalid signature" error when verifying a modified JWT`, () => {
        const malformedJwt = expiredToken + 'a';
        const tokenStatus = getVerifiedAccessToken(malformedJwt) as {
            message: string;
        };
        expect(tokenStatus).toBeInstanceOf(JsonWebTokenError);
        expect(tokenStatus.message).toBe('invalid signature');
    });

    it(`Throws an "invalid signature" error for a JWT with a signature other than the one being used`, () => {
        const tokenWithDifferentSignature = sign(
            { customer_id: customerId, exp: tokenExpiry, refresh_expiry: tokenExpiry },
            'different_signature'
        );
        const tokenStatus = getVerifiedAccessToken(tokenWithDifferentSignature) as {
            message: string;
        };
        expect(tokenStatus).toBeInstanceOf(JsonWebTokenError);
        expect(tokenStatus.message).toBe('invalid signature');
    });

    it(`Throws a "jwt expired" error when a JWTs ttl has elapsed`, () => {
        const tokenStatus = getVerifiedAccessToken(expiredToken) as {
            message: string;
        };
        expect(tokenStatus).toBeInstanceOf(TokenExpiredError);
        expect(tokenStatus.message).toBe('jwt expired');
    });
});

describe('JWT statues', () => {
    it(`Returns a "ACCESS_INVALID_REFRESH_INVALID" status when the auth token is missing the bearer string`, () => {
        const tokenExp = getTokenExpiryFromMinutes(-5);

        const expiredToken = createAccessJWT(customerId, tokenExp, tokenExp);
        const expiredRefreshToken = createRefreshToken(customerId, tokenExp);

        const tokenStatus = getAuthTokenStatus(expiredToken, expiredRefreshToken);

        expect(tokenStatus).toEqual(ACCESS_INVALID_REFRESH_INVALID);
    });

    it(`Returns a "ACCESS_INVALID_REFRESH_INVALID" status when both access and refresh tokens are invalid`, () => {
        const tokenExp = getTokenExpiryFromMinutes(-5);

        const expiredToken = createAccessJWT(customerId, tokenExp, tokenExp);
        const expiredRefreshToken = createRefreshToken(customerId, tokenExp);

        const tokenStatus = getAuthTokenStatus(`Bearer ${expiredToken}`, expiredRefreshToken);

        expect(tokenStatus).toEqual(ACCESS_INVALID_REFRESH_INVALID);
    });

    it(`Returns a "ACCESS_VALID_REFRESH_INVALID" status when the access token is valid and refresh token is invalid`, () => {
        const accessTokenExp = getTokenExpiryFromMinutes(5);
        const refreshTokenExp = getTokenExpiryFromMinutes(-5);

        const validAccessToken = createAccessJWT(customerId, accessTokenExp, refreshTokenExp);
        const expiredRefreshToken = createRefreshToken(customerId, refreshTokenExp);

        const tokenStatus = getAuthTokenStatus(`Bearer ${validAccessToken}`, expiredRefreshToken);

        expect(tokenStatus).toEqual(ACCESS_VALID_REFRESH_INVALID);
    });

    it(`Returns a "ACCESS_VALID_REFRESH_INVALID" status if a "refresh_token" is missing`, () => {
        const accessTokenExp = getTokenExpiryFromMinutes(5);
        const refreshTokenExp = getTokenExpiryFromMinutes(-5);

        const missingRefreshToken = '';
        const validAccessToken = sign(
            { customer_id: customerId, exp: accessTokenExp, refresh_expiry: refreshTokenExp },
            JWT_PRIVATE_KEY
        );

        const tokenStatus = getAuthTokenStatus(`Bearer ${validAccessToken}`, missingRefreshToken);
        expect(tokenStatus).toEqual(ACCESS_VALID_REFRESH_INVALID);
    });

    it(`Returns a "ACCESS_INVALID_REFRESH_VALID" status when access token is invalid but the refresh token is valid`, () => {
        const accessTokenExp = getTokenExpiryFromMinutes(-5);
        const refreshTokenExp = getTokenExpiryFromMinutes(5);

        const invalidAccessToken = createAccessJWT(customerId, accessTokenExp, refreshTokenExp);
        const validRefreshToken = createRefreshToken(customerId, accessTokenExp);

        const tokenStatus = getAuthTokenStatus(`Bearer ${invalidAccessToken}`, validRefreshToken);
        expect(tokenStatus).toEqual(ACCESS_INVALID_REFRESH_VALID);
    });

    it(`Returns a "ACCESS_VALID_REFRESH_VALID" status when both access and refresh tokens are invalid`, () => {
        const accessTokenExp = getTokenExpiryFromMinutes(5);
        const refreshTokenExp = getTokenExpiryFromMinutes(5);

        const invalidAccessToken = createAccessJWT(customerId, accessTokenExp, refreshTokenExp);
        const validRefreshToken = createRefreshToken(customerId, refreshTokenExp);

        const tokenStatus = getAuthTokenStatus(`Bearer ${invalidAccessToken}`, validRefreshToken);
        expect(tokenStatus).toEqual(ACCESS_VALID_REFRESH_VALID);
    });
});

describe('Hashing', () => {
    it("Checks the refresh token to be returned in the request doesn't match the one stored in the DB", () => {
        const refreshToken = createRefreshToken(customerId, 1710905708);

        const hashedTokenForDb = getHashedRefreshToken(refreshToken);

        expect(hashedTokenForDb).not.toEqual(refreshToken);
    });
});
