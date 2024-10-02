import { decode } from 'jsonwebtoken';

import {
    ACCESS_TOKEN_EXPIRY_IN_MINUTES,
    REFRESH_TOKEN_EXPIRY_IN_MINUTES__EXTENDED,
    REFRESH_TOKEN_EXPIRY_IN_MINUTES__NON_EXTENDED,
} from '../constants';
import { GraphqlError } from '@aligent/utils';
import { decodedAccessToken } from '../types';
import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ModuleConfigToken } from '../providers';
import { ModuleConfig } from '../index';
import {
    createAccessJWT,
    createRefreshToken,
    getCurrentTimeStamp,
    getMinutesToSeconds,
    getTokenExpiryFromMinutes,
} from '../utils';

/**
 * Service for generating JWT authentication and refresh tokens
 */
@Injectable({
    global: true,
})
export class AuthTokenService {
    protected extendRefreshTokenExpiryInMinutes: number;
    protected nonExtendRefreshTokenExpiryInMinutes: number;
    protected accessTokenExpiryInMinutes: number;

    constructor(@Inject(forwardRef(() => ModuleConfigToken)) protected config: ModuleConfig) {
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
    protected verifyExpiryTimes() {
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
     * Gets an access token used for user authentication and refresh token to ask
     * for a new access token
     * @param userId
     * @param isExtendedLogin
     */
    generateLoginTokens(
        userId: number,
        isExtendedLogin?: boolean
    ): { accessToken: string; refreshToken: string; refreshTokenExpiry: number } {
        const accessTokenExpiry = getTokenExpiryFromMinutes(this.accessTokenExpiryInMinutes);

        const refreshTokenExpiry = getTokenExpiryFromMinutes(
            isExtendedLogin
                ? this.extendRefreshTokenExpiryInMinutes
                : this.nonExtendRefreshTokenExpiryInMinutes
        );

        const refreshToken = createRefreshToken(userId, accessTokenExpiry);

        return {
            accessToken: createAccessJWT(userId, accessTokenExpiry, refreshTokenExpiry),
            refreshToken,
            refreshTokenExpiry,
        };
    }

    /**
     * Determines what the next rolling refresh token expiry should be.
     * There are 3 outcomes
     *
     * 1. The current time is more than "nonExtendRefreshTokenExpiryInMinutes" minutes away from the refreshExp time.
     *    - We return the current refresh tokens ttl
     *
     * 2. The current time is within "nonExtendRefreshTokenExpiryInMinutes" minutes of the refreshExp time.
     *    - Extend the refresh token expiry time by another "extendRefreshTokenExpiryInMinutes" minutes.
     *
     * 3. The current time has surpassed the refreshExp time
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
            ? getTokenExpiryFromMinutes(this.nonExtendRefreshTokenExpiryInMinutes)
            : refreshExp;
    }

    /**
     * Gets new tokens to extend the users login session. A new access token of minutes defined
     * by the "accessTokenExpiryInMinutes" variable will be generated and a new refresh token
     * with either its previous expiry time or its expiry time plus the minutes defined by the
     * "nonExtendRefreshTokenExpiryInMinutes" variable.
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
        const accessTokenExpiry = getTokenExpiryFromMinutes(this.accessTokenExpiryInMinutes);
        const refreshTokenExpiry = this.getRollingRefreshTokenExpiry(
            currentTimeStamp,
            refresh_expiry
        );

        if (refreshTokenExpiry instanceof Error) {
            throw new GraphqlError("Refresh tokens couldn't be generated", 'authorization');
        }

        const newAccessToken = createAccessJWT(
            bc_customer_id,
            accessTokenExpiry,
            refreshTokenExpiry
        );
        const newRefreshToken = createRefreshToken(bc_customer_id, accessTokenExpiry);

        return {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
            refreshTokenExpiry: refreshTokenExpiry,
        };
    }
}
