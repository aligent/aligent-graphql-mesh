import { MutationResolvers } from '@aligent/auth-resolvers';
import { getBcCustomerIdFromMeshToken } from '@aligent/bigcommerce-graphql-module';
import { AuthService } from '../../services';
import { GraphqlError } from '@aligent/utils';

export const updateUserAuthResolver: MutationResolvers['updateUserAuth'] = {
    resolve: async (_root, args, context, _info) => {
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        const { refresh_token } = args;

        if (!refresh_token) {
            throw new Error('no refresh_token');
        }

        const authService: AuthService = context.injector.get(AuthService);

        const response = await authService.updateUserAuth(
            String(bcCustomerId),
            refresh_token,
            100000
        );

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
