import { MutationResolvers } from '@aligent/auth-resolvers';
import {
    bcLogin,
    retrieveCustomerImpersonationTokenFromCache,
} from '@aligent/bigcommerce-graphql-module';
import { GraphqlError } from '@aligent/utils';
import { generateLoginTokens } from '../../utils';
import { AuthService } from '../../services';

export const generateCustomerTokenResolver: MutationResolvers['generateCustomerToken'] = {
    resolve: async (_root, args, context, _info) => {
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);

        const entityId = await bcLogin(args.email, args.password, customerImpersonationToken);

        const isExtendedLogin = !!args?.remember_me;

        const { accessToken, refreshToken, refreshTokenExpiry } = generateLoginTokens(
            entityId,
            isExtendedLogin
        );

        const authService: AuthService = context.injector.get(AuthService);
        const updateResponse = await authService.updateUserAuth(
            entityId,
            refreshToken,
            refreshTokenExpiry
        );

        if (updateResponse instanceof Error || updateResponse?.$metadata?.httpStatusCode !== 200) {
            throw new GraphqlError('There was an issue updating the refresh token');
        }

        return {
            token: accessToken,
            refresh_token: refreshToken,
        };
    },
};
