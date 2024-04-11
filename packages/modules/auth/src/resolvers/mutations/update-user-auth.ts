import { MutationResolvers } from '@aligent/auth-resolvers';
import { AuthService } from '../../services';
import { GraphqlError } from '@aligent/utils';

const NODE_ENV = process.env?.NODE_ENV;

/**
 * Add an item to the Dynamo DB table based on a users id and refresh token
 */
export const updateUserAuthResolver = {
    resolve: async (_root, args, context, _info) => {
        /* We do not want this mutation available to the public */
        if (NODE_ENV !== 'development') {
            throw new GraphqlError('Unauthorised access', 'authorization');
        }

        const { refresh_token, user_id } = args;

        if (!refresh_token || !user_id) {
            throw new Error('no refresh_token or user id provided');
        }

        const authService: AuthService = context.injector.get(AuthService);

        const response = await authService.updateUserAuth(user_id, refresh_token, 100000);

        if (response instanceof Error) {
            throw new GraphqlError(
                'There was an issue getting the users refresh token',
                'no-such-entity'
            );
        }

        return {
            success: response?.$metadata?.httpStatusCode === 200,
        };
    },
} satisfies MutationResolvers['updateUserAuth'];
