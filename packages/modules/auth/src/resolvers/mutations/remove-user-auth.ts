import { MutationResolvers } from '@aligent/auth-resolvers';
import { getBcCustomerIdFromMeshToken } from '@aligent/bigcommerce-graphql-module';
import { AuthService } from '../../services';
import { GraphqlError } from '@aligent/utils';

export const removeUserAuthResolver: MutationResolvers['removeUserAuth'] = {
    resolve: async (_root, args, context, _info) => {
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        const { refresh_token } = args;
        console.dir(refresh_token);

        if (!refresh_token) {
            throw new Error('no refresh_token');
        }

        const authService: AuthService = context.injector.get(AuthService);

        const response = await authService.removeUserAuth(String(bcCustomerId), refresh_token);

        if (response instanceof Error) {
            throw new GraphqlError(
                'There was an issue deleting the users refresh token',
                'authorization'
            );
        }

        return {
            success: response?.$metadata?.httpStatusCode === 200,
        };
    },
};
