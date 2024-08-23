import { decode, JsonWebTokenError, sign, TokenExpiredError } from 'jsonwebtoken';
import { advanceTo, clear } from 'jest-date-mock';
import { getFormattedUTCDate, getCurrentTimeStamp, getUTCTimeStamp } from '../../utils';
import { JWT_AUTH_STATUSES } from '../../constants';
import { decodedAccessToken } from '../../types';
import { AuthTokenService } from '../../services';

const {
    ACCESS_VALID_REFRESH_VALID,
    ACCESS_INVALID_REFRESH_VALID,
    ACCESS_VALID_REFRESH_INVALID,
    ACCESS_INVALID_REFRESH_INVALID,
} = JWT_AUTH_STATUSES;
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;
const userId = 23;

const mockContextConfig = {
    dynamoDbRegion: 'mock-region',
    dynamoDbAuthTable: 'mock-table',
};

const authTokenService = new AuthTokenService(
    mockContextConfig,
    {} as GraphQLModules.GlobalContext
);

describe('TimeZone', () => {
    it('Checks the jest TZ env variable is set to UTC', () => {
        const timezone = Intl.DateTimeFormat().resolvedOptions();

        // Log out timezone info in the test so we know what we're working under
        console.info(timezone);
        expect(process.env.TZ).toBe('UTC');
    });
});

describe('Json web token errors', () => {
    const tokenExpiry = authTokenService.getTokenExpiryFromMinutes(-5);
    const expiredToken = authTokenService.createAccessJWT(userId, tokenExpiry, tokenExpiry);

    it(`Throws an "invalid signature" error when verifying a malformed JWT`, () => {
        const malformedJwt = 'ae6r4h16sat56th';
        const tokenStatus = authTokenService.getVerifiedAccessToken(malformedJwt) as {
            message: string;
        };
        expect(tokenStatus).toBeInstanceOf(JsonWebTokenError);
        expect(tokenStatus.message).toBe('jwt malformed');
    });

    it(`Throws an "invalid signature" error when verifying a modified JWT`, () => {
        const malformedJwt = expiredToken + 'a';
        const tokenStatus = authTokenService.getVerifiedAccessToken(malformedJwt) as {
            message: string;
        };
        expect(tokenStatus).toBeInstanceOf(JsonWebTokenError);
        expect(tokenStatus.message).toBe('invalid signature');
    });

    it(`Throws an "invalid signature" error for a JWT with a signature other than the one being used`, () => {
        const tokenWithDifferentSignature = sign(
            { bc_customer_id: userId, exp: tokenExpiry, refresh_expiry: tokenExpiry },
            'different_signature'
        );
        const tokenStatus = authTokenService.getVerifiedAccessToken(
            tokenWithDifferentSignature
        ) as {
            message: string;
        };
        expect(tokenStatus).toBeInstanceOf(JsonWebTokenError);
        expect(tokenStatus.message).toBe('invalid signature');
    });

    it(`Throws a "jwt expired" error when a JWTs ttl has elapsed`, () => {
        const tokenStatus = authTokenService.getVerifiedAccessToken(expiredToken) as {
            message: string;
        };
        expect(tokenStatus).toBeInstanceOf(TokenExpiredError);
        expect(tokenStatus.message).toBe('jwt expired');
    });
});

describe('JWT statues', () => {
    it(`Returns a "ACCESS_INVALID_REFRESH_INVALID" status when the auth token is missing the bearer string`, () => {
        const tokenExp = authTokenService.getTokenExpiryFromMinutes(-5);

        const expiredToken = authTokenService.createAccessJWT(userId, tokenExp, tokenExp);
        const expiredRefreshToken = authTokenService.createRefreshToken(userId, tokenExp);

        const tokenStatus = authTokenService.getAuthTokenStatus(expiredToken, expiredRefreshToken);

        expect(tokenStatus).toEqual(ACCESS_INVALID_REFRESH_INVALID);
    });

    it(`Returns a "ACCESS_INVALID_REFRESH_INVALID" status when both access and refresh tokens are invalid`, () => {
        const tokenExp = authTokenService.getTokenExpiryFromMinutes(-5);

        const expiredToken = authTokenService.createAccessJWT(userId, tokenExp, tokenExp);
        const expiredRefreshToken = authTokenService.createRefreshToken(userId, tokenExp);

        const tokenStatus = authTokenService.getAuthTokenStatus(
            `Bearer ${expiredToken}`,
            expiredRefreshToken
        );

        expect(tokenStatus).toEqual(ACCESS_INVALID_REFRESH_INVALID);
    });

    it(`Returns a "ACCESS_VALID_REFRESH_INVALID" status when the access token is valid and refresh token is invalid`, () => {
        const accessTokenExp = authTokenService.getTokenExpiryFromMinutes(5);
        const refreshTokenExp = authTokenService.getTokenExpiryFromMinutes(-5);

        const validAccessToken = authTokenService.createAccessJWT(
            userId,
            accessTokenExp,
            refreshTokenExp
        );
        const expiredRefreshToken = authTokenService.createRefreshToken(userId, refreshTokenExp);

        const tokenStatus = authTokenService.getAuthTokenStatus(
            `Bearer ${validAccessToken}`,
            expiredRefreshToken
        );

        expect(tokenStatus).toEqual(ACCESS_VALID_REFRESH_INVALID);
    });

    it(`Returns a "ACCESS_VALID_REFRESH_INVALID" status if a "refresh_token" is missing`, () => {
        const accessTokenExp = authTokenService.getTokenExpiryFromMinutes(5);
        const refreshTokenExp = authTokenService.getTokenExpiryFromMinutes(-5);

        const missingRefreshToken = '';
        const validAccessToken = sign(
            { bc_customer_id: userId, exp: accessTokenExp, refresh_expiry: refreshTokenExp },
            JWT_PRIVATE_KEY
        );

        const tokenStatus = authTokenService.getAuthTokenStatus(
            `Bearer ${validAccessToken}`,
            missingRefreshToken
        );
        expect(tokenStatus).toEqual(ACCESS_VALID_REFRESH_INVALID);
    });

    it(`Returns a "ACCESS_INVALID_REFRESH_VALID" status when access token is invalid but the refresh token is valid`, () => {
        const accessTokenExp = authTokenService.getTokenExpiryFromMinutes(-5);
        const refreshTokenExp = authTokenService.getTokenExpiryFromMinutes(5);

        const invalidAccessToken = authTokenService.createAccessJWT(
            userId,
            accessTokenExp,
            refreshTokenExp
        );
        const validRefreshToken = authTokenService.createRefreshToken(userId, accessTokenExp);

        const tokenStatus = authTokenService.getAuthTokenStatus(
            `Bearer ${invalidAccessToken}`,
            validRefreshToken
        );
        expect(tokenStatus).toEqual(ACCESS_INVALID_REFRESH_VALID);
    });

    it(`Returns a "ACCESS_VALID_REFRESH_VALID" status when both access and refresh tokens are invalid`, () => {
        const accessTokenExp = authTokenService.getTokenExpiryFromMinutes(5);
        const refreshTokenExp = authTokenService.getTokenExpiryFromMinutes(5);

        const invalidAccessToken = authTokenService.createAccessJWT(
            userId,
            accessTokenExp,
            refreshTokenExp
        );
        const validRefreshToken = authTokenService.createRefreshToken(userId, refreshTokenExp);

        const tokenStatus = authTokenService.getAuthTokenStatus(
            `Bearer ${invalidAccessToken}`,
            validRefreshToken
        );
        expect(tokenStatus).toEqual(ACCESS_VALID_REFRESH_VALID);
    });
});

describe(`Token TTL's`, () => {
    afterEach(() => {
        clear();
    });

    it(`Returns the current refresh tokens expiry time if the current time is over 15 minutes before the expiry`, () => {
        advanceTo(new Date('2024-03-01T09:00:00Z'));
        const currentTime = getCurrentTimeStamp();

        // This same expiry should be the end results in the tests
        const refreshTokenExp = getUTCTimeStamp('2024-03-01T09:16:00Z');

        expect(getFormattedUTCDate(refreshTokenExp)).toEqual('1/3/2024, 9:16');

        const newRefreshTokenExp = authTokenService.getRollingRefreshTokenExpiry(
            currentTime,
            refreshTokenExp
        );

        if (newRefreshTokenExp instanceof Error) return;

        expect(getFormattedUTCDate(newRefreshTokenExp)).toEqual('1/3/2024, 9:16');
    });

    it(`Returns the refresh token plus 15 minutes if the current time is within 15 minutes before expiry`, () => {
        advanceTo(new Date('2024-03-01T09:00:00Z'));
        const currentTime = getCurrentTimeStamp();
        const refreshTokenExp = getUTCTimeStamp('2024-03-01T09:14:00Z'); // 9.14

        const newRefreshTokenExp = authTokenService.getRollingRefreshTokenExpiry(
            currentTime,
            refreshTokenExp
        );

        if (newRefreshTokenExp instanceof Error) return;

        expect(getFormattedUTCDate(newRefreshTokenExp)).toEqual('1/3/2024, 9:15');
    });

    it(`Returns an Error if the current time has passed the refresh token expiry time`, () => {
        advanceTo(new Date('2024-03-01T09:00:00Z'));
        const startingTime = getCurrentTimeStamp();
        expect(getFormattedUTCDate(startingTime)).toEqual('1/3/2024, 9:00');

        // Advance to a time we know the refresh token is expired
        advanceTo(new Date('2024-03-01T09:16:00Z'));
        const updatedTime = getCurrentTimeStamp(); // 9:16 am

        const refreshTokenExp = getUTCTimeStamp('2024-03-01T09:15:00Z'); // 9.15 am
        const newRefreshTokenExp = authTokenService.getRollingRefreshTokenExpiry(
            updatedTime,
            refreshTokenExp
        );
        expect(newRefreshTokenExp).toBeInstanceOf(Error);
    });

    it(`Returns the correct token expiry ttls for a user not wanting to extend their session`, () => {
        advanceTo(new Date('2024-03-01T09:00:00Z'));

        const isExtendedLogin = false;
        const { accessToken } = authTokenService.generateLoginTokens(userId, isExtendedLogin);
        const { exp, refresh_expiry } = decode(accessToken) as decodedAccessToken;

        expect(getFormattedUTCDate(exp)).toBe('1/3/2024, 9:14');
        expect(getFormattedUTCDate(refresh_expiry)).toBe('1/3/2024, 9:15');
    });

    it(`Returns the correct token expiry times for a user wanting to extend their session`, () => {
        advanceTo(new Date('2024-03-01T09:00:00Z'));

        const isExtendedLogin = true;
        const { accessToken } = authTokenService.generateLoginTokens(userId, isExtendedLogin);
        const { exp, refresh_expiry } = decode(accessToken) as decodedAccessToken;

        expect(getFormattedUTCDate(exp)).toBe('1/3/2024, 9:14');
        expect(getFormattedUTCDate(refresh_expiry)).toBe('31/3/2024, 9:00'); // 30 days later
    });

    /**
     * The test creates the login tokens then advances time by 15 minutes.
     * This means the login access_token will expire and when we get a new refreshed
     * access token it will have an expiry of another additional 15 minutes.
     */
    it(`Returns the correct token expiry times when tokens are regenerated`, () => {
        advanceTo(new Date('2024-03-01T09:00:00Z'));

        const {
            accessToken: loginAccessToken, // "exp" will be 15 minutes after the "currentTime"
        } = authTokenService.generateLoginTokens(userId, false);

        // Advance the current time by 15 minutes
        advanceTo(new Date('2024-03-01T09:14:00Z'));

        const { accessToken } = authTokenService.generateRefreshedTokens(
            `Bearer ${loginAccessToken}`
        );
        const {
            // "exp" will be 15 minutes after the "currentTime" and another 15 minutes after the
            // loginAccessToken.exp. This means the exp will be 30 minutes after the "currentTime"
            exp: refreshedAccessTokenExp,
            refresh_expiry: refreshedRefreshTokenExp,
        } = decode(accessToken) as decodedAccessToken;

        expect(getFormattedUTCDate(refreshedAccessTokenExp)).toBe('1/3/2024, 9:28');
        expect(getFormattedUTCDate(refreshedRefreshTokenExp)).toBe('1/3/2024, 9:29');
    });

    /**
     * This tests that the refresh token exp is applied to the next regenerated refresh token
     */
    it(`Returns the correct token expiry times when tokens are regenerated with an extended session`, () => {
        advanceTo(new Date('2024-03-01T09:00:00Z'));

        const {
            accessToken: loginAccessToken, // "exp" will be 15 minutes after the "currentTime"
        } = authTokenService.generateLoginTokens(userId, true);

        const { refresh_expiry: loginRefreshTokenExp } = decode(
            loginAccessToken
        ) as decodedAccessToken;

        expect(getFormattedUTCDate(loginRefreshTokenExp)).toBe('31/3/2024, 9:00');

        // Advance the current time by 15 minutes
        advanceTo(new Date('2024-03-01T09:14:00Z'));

        const { accessToken } = authTokenService.generateRefreshedTokens(
            `Bearer ${loginAccessToken}`
        );

        const {
            // "exp" will be 15 minutes after the "currentTime" and another 15 minutes after the
            // loginAccessToken.exp. This means the exp will be 30 minutes after the "currentTime"
            exp: refreshedAccessTokenExp,
            refresh_expiry: refreshedRefreshTokenExp,
        } = decode(accessToken) as decodedAccessToken;

        expect(getFormattedUTCDate(refreshedAccessTokenExp)).toBe('1/3/2024, 9:28');
        expect(getFormattedUTCDate(refreshedRefreshTokenExp)).toBe('31/3/2024, 9:00');
    });

    /**
     * This tests that the refresh token exp is applied to the next regenerated refresh token
     */
    it(`Check the session extends 15 minutes if the session is active when the extended session time expires`, () => {
        advanceTo(new Date('2024-03-01T09:00:00Z'));

        const {
            accessToken: loginAccessToken, // "exp" will be 15 minutes after the "currentTime"
        } = authTokenService.generateLoginTokens(userId, true);

        /* Advance the time by 30 day when the extended session will expire */
        advanceTo(new Date('2024-03-31T09:00:00Z'));

        const { accessToken: refreshedAccessToken } = authTokenService.generateRefreshedTokens(
            `Bearer ${loginAccessToken}`
        );

        const {
            // "exp" will be 15 minutes after the "currentTime" and another 15 minutes after the
            // loginAccessToken.exp. This means the exp will be 30 minutes after the "currentTime"
            exp: refreshedAccessTokenExp,
            refresh_expiry: refreshedRefreshTokenExp,
        } = decode(refreshedAccessToken) as decodedAccessToken;

        expect(getFormattedUTCDate(refreshedAccessTokenExp)).toBe('31/3/2024, 9:14');
        expect(getFormattedUTCDate(refreshedRefreshTokenExp)).toBe('31/3/2024, 9:15');
    });
});

describe('Hashing', () => {
    it("Checks the refresh token to be returned in the request doesn't match the one stored in the DB", () => {
        const refreshToken = authTokenService.createRefreshToken(userId, 1710905708);

        const hashedTokenForDb = authTokenService.getHashedRefreshToken(refreshToken);

        expect(hashedTokenForDb).not.toEqual(refreshToken);
    });
});
