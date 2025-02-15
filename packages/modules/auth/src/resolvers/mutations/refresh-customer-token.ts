import { MutationResolvers } from '@aligent/auth-resolvers';
import { GraphqlError } from '@aligent/utils';
import { getAuthTokenStatus, getDecodedAuthToken, getHashedRefreshToken } from '../../utils';
import { JWT_AUTH_STATUSES } from '../../constants';
import { AuthService, AuthTokenService } from '../../services';

const {
    ACCESS_VALID_REFRESH_VALID,
    ACCESS_INVALID_REFRESH_VALID,
    ACCESS_VALID_REFRESH_INVALID,
    ACCESS_INVALID_REFRESH_INVALID,
} = JWT_AUTH_STATUSES;

export const refreshCustomerTokenResolver = {
    resolve: async (_root, args, context, _info) => {
        const { refresh_token } = args;
        const authToken = context.request.headers.get('authorization');

        if (!authToken) {
            throw new GraphqlError('Missing authorization header', 'authorization');
        }

        const authTokenService: AuthTokenService = context.injector.get(AuthTokenService);

        /* Validates the access token and refresh token, and returns a status*/
        const authTokenStatus = getAuthTokenStatus(authToken, refresh_token);

        /* Prevents new tokens being generated if both refresh and access tokens are still valid */
        if (authTokenStatus === ACCESS_VALID_REFRESH_VALID) {
            const [, accessToken] = authToken.split(' ');
            return {
                token: accessToken,
                refresh_token: args.refresh_token,
            };
        }

        const authService: AuthService = context.injector.get(AuthService);

        const { customer_id } = getDecodedAuthToken(authToken) || {};

        const usersAuthDataInDb = await authService.getUserAuth(String(customer_id), refresh_token);

        /* Remove the users refresh token from the DB as from this point onwards
         * we will either be ending the users session or generating new tokens */
        const removeUserAuthResponse = await authService.removeUserAuth(
            String(customer_id),
            refresh_token
        );

        if (usersAuthDataInDb instanceof Error) {
            throw new GraphqlError(
                'There was an issue getting the users current refresh token',
                'authorization'
            );
        }

        const usersDbRefreshToken = usersAuthDataInDb?.Item?.refresh_token_hash?.S;

        if (
            removeUserAuthResponse instanceof Error ||
            removeUserAuthResponse?.$metadata?.httpStatusCode !== 200
        ) {
            console.error('There was an issue removing the users refresh token from the database');
        }

        /**
         * Potentially something malicious has happened to hit this condition.
         * Any token passed to this mutation should have a corresponding db refresh
         * token if it's truly valid.
         */
        if (usersDbRefreshToken !== getHashedRefreshToken(refresh_token)) {
            if (customer_id) {
                /* Remove all user auth items from the DB which are associated to the user id */
                await authService.removeAllUserAuthItems(customer_id);
            }

            throw new GraphqlError(`A matching refresh token couldn't be found`, 'authorization');
        }

        if (
            [ACCESS_INVALID_REFRESH_INVALID, ACCESS_VALID_REFRESH_INVALID].includes(authTokenStatus)
        ) {
            throw new GraphqlError('Refresh token is no longer valid', 'authorization');
        }

        if (authTokenStatus === ACCESS_INVALID_REFRESH_VALID) {
            const {
                accessToken,
                refreshToken: newRefreshToken,
                refreshTokenExpiry: newRefreshTokenExpiry,
            } = authTokenService.generateRefreshedTokens(authToken);

            /* Update the newly generated refresh token in the database*/
            await authService.updateUserAuth(
                String(customer_id),
                newRefreshToken,
                newRefreshTokenExpiry
            );

            return {
                token: accessToken,
                refresh_token: newRefreshToken,
            };
        }

        /* Fall back to ending the user session should none of the conditions be met. */
        throw new GraphqlError('Authorization token is no longer valid', 'authorization');
    },
} satisfies MutationResolvers['refreshCustomerToken'];
