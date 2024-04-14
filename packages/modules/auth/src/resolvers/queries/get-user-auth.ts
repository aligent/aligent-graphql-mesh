import { QueryResolvers } from '@aligent/auth-resolvers';
import { AuthService } from '../../services';
import { GraphqlError } from '@aligent/utils';

const NODE_ENV = process.env?.NODE_ENV;

/**
 * Gets an item from the Dynamo DB table based on a users id and refresh token
 */
export const getUserAuthResolver = {
    resolve: async (_root, args, context, _info) => {
        /* We do not want this query available to the public */
        if (NODE_ENV !== 'development') {
            throw new GraphqlError('Unauthorised access', 'authorization');
        }

        const { refresh_token, user_id } = args;

        if (!refresh_token || !user_id) {
            throw new Error('no refresh_token or user id provided');
        }

        const authService: AuthService = context.injector.get(AuthService);

        const response = await authService.getUserAuth(user_id, refresh_token);

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
} satisfies QueryResolvers['getUserAuth'];
