import { GraphqlError } from '@aligent/utils';
import { AuthService } from '../../services';
import { QueryResolvers } from '@aligent/auth-resolvers';

const NODE_ENV = process.env?.NODE_ENV;

export const getAllAuthItemsByIdResolver = {
    resolve: async (_root, args, context, _info) => {
        /* We do not want this mutation available to the public */
        if (NODE_ENV !== 'development') {
            throw new GraphqlError('Unauthorised access', 'authorization');
        }

        const { user_id } = args;

        if (!user_id) {
            throw new Error('no user id was provided');
        }

        const authService: AuthService = context.injector.get(AuthService);

        const response = await authService.queryAuthItemsById(user_id);

        if (response instanceof Error) {
            throw new GraphqlError('There was an issue getting the users auth items', 'input');
        }

        const items =
            response?.Items?.map((item) => {
                const { customer_id, refresh_token_hash, ttl } = item;
                return {
                    customer_id: customer_id.S,
                    refresh_token_hash: refresh_token_hash.S,
                    ttl: ttl.S,
                };
            }) || [];

        return items;
    },
} satisfies QueryResolvers['getAllAuthItemsById'];
