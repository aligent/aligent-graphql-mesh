import { MutationResolvers } from '@aligent/auth-resolvers';
import { AuthService } from '../../services';
import { GraphqlError } from '@aligent/utils';

const NODE_ENV = process.env?.NODE_ENV;

export const updateUserAuthResolver: MutationResolvers['updateUserAuth'] = {
    resolve: async (_root, args, context, _info) => {
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
};
