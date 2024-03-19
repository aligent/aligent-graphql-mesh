import { QueryResolvers } from '@aligent/auth-resolvers';
import { getBcCustomerIdFromMeshToken } from '@aligent/bigcommerce-graphql-module';
import { AuthService } from '@aligent/auth-module';

export const getUserAuthResolver: QueryResolvers['getUserAuth'] = {
    resolve: async (_root, args, context, _info) => {
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        const { refresh_token } = args;
        console.dir(refresh_token);

        if (!refresh_token) {
            throw new Error('no refresh_token');
        }

        const authService: AuthService = context.injector.get(AuthService);

        const response = await authService.getUserAuth(String(bcCustomerId), refresh_token);

        console.dir(response);

        return {
            token: '',
        };
    },
};
