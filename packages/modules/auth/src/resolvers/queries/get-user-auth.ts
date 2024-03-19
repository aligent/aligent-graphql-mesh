import { QueryResolvers } from '@aligent/auth-resolvers';
import { getBcCustomerIdFromMeshToken } from '@aligent/bigcommerce-graphql-module';
import { AuthService } from '../../services';
import { GraphqlError } from '@aligent/utils';

export const getUserAuthResolver: QueryResolvers['getUserAuth'] = {
    resolve: async (_root, args, context, _info) => {
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        const { refresh_token } = args;

        if (!refresh_token) {
            throw new Error('no refresh_token');
        }

        const authService: AuthService = context.injector.get(AuthService);

        const response = await authService.getUserAuth(String(bcCustomerId), refresh_token);

        if (response instanceof Error) {
            throw new GraphqlError(
                'There was an issue getting the users refresh token',
                'authorization'
            );
        }

        const { customer_id, refresh_token_hash, ttl } = response?.Item || {};

        return {
            customer_id: customer_id?.S,
            refresh_token_hash: refresh_token_hash?.S,
            ttl: ttl?.S,
        };
    },
};
