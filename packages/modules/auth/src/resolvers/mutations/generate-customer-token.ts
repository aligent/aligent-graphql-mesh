import { MutationResolvers } from '@aligent/auth-resolvers';
import {
    bcLogin,
    retrieveCustomerImpersonationTokenFromCache,
} from '@aligent/bigcommerce-graphql-module';
import { GraphqlError } from '@aligent/utils';
import { AuthService, AuthTokenService } from '../../services';

export const generateCustomerTokenResolver = {
    resolve: async (_root, args, context, _info) => {
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);

        const entityId = await bcLogin(args.email, args.password, customerImpersonationToken);

        const isExtendedLogin = !!args?.remember_me;

        const authTokenService: AuthTokenService = context.injector.get(AuthTokenService);

        const { accessToken, refreshToken, refreshTokenExpiry } =
            authTokenService.generateLoginTokens(entityId, isExtendedLogin);

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
} satisfies MutationResolvers['generateCustomerToken'];
