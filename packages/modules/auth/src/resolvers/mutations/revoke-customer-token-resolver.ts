import { MutationResolvers } from '@aligent/auth-resolvers';
import { AuthService } from '../../services';
import { GraphqlError } from '@aligent/utils';
import { getDecodedAuthToken, getVerifiedRefreshToken } from '../../utils';

export const revokeCustomerTokenResolver = {
    resolve: async (_root, args, context, _info) => {
        const authToken = context.request.headers.get('authorization');
        if (!authToken) {
            throw new GraphqlError('Missing authorization header', 'authorization');
        }

        const { refresh_token } = args;

        if (!refresh_token) {
            throw new GraphqlError('Missing refresh token', 'authorization');
        }

        const decodedAuthToken = getDecodedAuthToken(authToken);

        if (decodedAuthToken === null) {
            throw new GraphqlError('There was an issue decoding the access token', 'authorization');
        }

        const { customer_id } = decodedAuthToken;

        /* The "getVerifiedRefreshToken" recreates the old refresh token. If this can't be done
         * then the refresh token may not belong to the user. */
        const verifiedRefreshToken = getVerifiedRefreshToken(decodedAuthToken, refresh_token);

        if (
            verifiedRefreshToken instanceof Error &&
            verifiedRefreshToken?.message.includes(`doesn't match`)
        ) {
            throw new GraphqlError(verifiedRefreshToken.message, 'input');
        }

        const authService: AuthService = context.injector.get(AuthService);

        const response = await authService.removeUserAuth(customer_id, refresh_token);

        if (response instanceof Error) {
            throw new GraphqlError(
                'There was an issue deleting the users refresh token',
                'authorization'
            );
        }

        return {
            result: response?.$metadata?.httpStatusCode === 200,
        };
    },
} satisfies MutationResolvers['revokeCustomerToken'];
