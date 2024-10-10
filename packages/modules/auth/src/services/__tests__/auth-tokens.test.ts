import { decode } from 'jsonwebtoken';
import { advanceTo, clear } from 'jest-date-mock';
import { getFormattedUTCDate, getCurrentTimeStamp, getUTCTimeStamp } from '../../utils';
import { decodedAccessToken } from '../../types';
import { AuthTokenService } from '../../services';

const customerId = 23;

const mockContextConfig = {
    dynamoDbRegion: 'mock-region',
    dynamoDbAuthTable: 'mock-table',
};

const authTokenService = new AuthTokenService(mockContextConfig);

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
        const { accessToken } = authTokenService.generateLoginTokens(customerId, isExtendedLogin);
        const { exp, refresh_expiry } = decode(accessToken) as decodedAccessToken;

        expect(getFormattedUTCDate(exp)).toBe('1/3/2024, 9:14');
        expect(getFormattedUTCDate(refresh_expiry)).toBe('1/3/2024, 9:15');
    });

    it(`Returns the correct token expiry times for a user wanting to extend their session`, () => {
        advanceTo(new Date('2024-03-01T09:00:00Z'));

        const isExtendedLogin = true;
        const { accessToken } = authTokenService.generateLoginTokens(customerId, isExtendedLogin);
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
        } = authTokenService.generateLoginTokens(customerId, false);

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
        } = authTokenService.generateLoginTokens(customerId, true);

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
        } = authTokenService.generateLoginTokens(customerId, true);

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
