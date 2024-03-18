import { MutationResolvers } from '@aligent/auth-resolvers';
// import { retrieveCustomerImpersonationTokenFromCache } from '@aligent/bigcommerce-graphql-module/src/apis/rest';

import { retrieveCustomerImpersonationTokenFromCache } from '../../../../bigcommerce/src/apis/rest';
import { generateRefreshedTokens, getAuthTokenStatus } from '../../utils';
import {
    ACCESS_INVALID_REFRESH_INVALID,
    ACCESS_INVALID_REFRESH_VALID,
    ACCESS_VALID_REFRESH_INVALID,
    ACCESS_VALID_REFRESH_VALID,
    JWT_AUTH_STATUSES,
} from '../../constants';
import { GraphqlError } from '@aligent/utils';

export const refreshCustomerTokenResolver: MutationResolvers['refreshCustomerToken'] = {
    resolve: async (_root, args, context, _info) => {
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);

        const { access_token, refresh_token } = args;

        /**
         * 1. Check that the refresh token from args matches the refresh token stored in the dyno database
         *    - If there's no matching token throw an authorization error to tell the PWA to kill its
         *      user session.
         * 2. Check the expiry time of the
         * 2. If there's a match generate a new auth token.
         * 3. remove the old refresh token from the dyno db
         * 4. add the new refresh token to the dyno db.
         * 5. Generate a new access token
         */

        const authTokenStatus = await getAuthTokenStatus(access_token, refresh_token);

        if (
            [
                JWT_AUTH_STATUSES[ACCESS_INVALID_REFRESH_INVALID],
                JWT_AUTH_STATUSES[ACCESS_VALID_REFRESH_INVALID],
            ].includes(authTokenStatus)
        ) {
            /**
             * @todo Remove the matching "refresh_token" in the authToken from the dynodb database
             */
            throw new GraphqlError('Authorization token is no longer valid', 'authorization');
        }

        if (
            [
                JWT_AUTH_STATUSES[ACCESS_INVALID_REFRESH_VALID],
                JWT_AUTH_STATUSES[ACCESS_VALID_REFRESH_VALID],
            ].includes(authTokenStatus)
        ) {
            /**
             * @todo make query to the dynodb database to check if the "refresh_token" in the "authToken"
             * matches one we have stored in the database.
             *
             * If there's a match then proceed to the next part
             * If there's no match then clear all stored for a user in the dynodb database and
             * "throw new GraphqlError('...', 'authorization');"
             *
             * @todo 1. Generate new access and refresh token
             * @todo 2. update dynodb database to remove the old "refresh_token" and add the new one
             */
            const { accessToken, refreshToken } = generateRefreshedTokens(access_token);

            return {
                access_token: accessToken,
                refresh_token: refreshToken,
            };
        }

        throw new GraphqlError('Authorization token is no longer valid', 'authorization');
    },
};
