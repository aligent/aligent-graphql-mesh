import { GraphqlError } from '@aligent/utils';
import { AuthService } from '../../services';
import { MutationResolvers } from '@aligent/auth-resolvers';

const NODE_ENV = process.env?.NODE_ENV;

export const removeAllUserAuthItemsResolver: MutationResolvers['removeAllUserAuthItems'] = {
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

        const response = await authService.removeAllUserAuthItems(user_id);

        return {
            success: response.success,
        };
    },
};
