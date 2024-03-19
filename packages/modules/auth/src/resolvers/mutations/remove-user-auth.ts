import { MutationResolvers } from '@aligent/auth-resolvers';
import { AuthService } from '../../services';
import { GraphqlError } from '@aligent/utils';

const NODE_ENV = process.env?.NODE_ENV;

export const removeUserAuthResolver: MutationResolvers['removeUserAuth'] = {
    resolve: async (_root, args, context, _info) => {
        if (NODE_ENV !== 'development') {
            throw new GraphqlError('Unauthorised access', 'authorization');
        }

        const { refresh_token, user_id } = args;

        if (!refresh_token || !user_id) {
            throw new Error('no refresh_token or user id provided');
        }

        const authService: AuthService = context.injector.get(AuthService);

        const response = await authService.removeUserAuth(user_id, refresh_token);

        if (response instanceof Error) {
            throw new GraphqlError(
                'There was an issue deleting the users refresh token',
                'authorization'
            );
        }

        const { customer_id, refresh_token_hash, ttl } = response?.Attributes || {};

        return {
            customer_id: customer_id?.S,
            refresh_token_hash: refresh_token_hash?.S,
            ttl: ttl?.S,
            success: response?.$metadata?.httpStatusCode === 200,
        };
    },
};
