import { MutationResolvers } from '@aligent/auth-resolvers';
import { GraphqlError } from '@aligent/utils';
import { AuthService, AuthTokenService } from '../../services';
import { LoginService } from '../../services/login';

export const generateCustomerTokenResolver = {
    resolve: async (_root, args, context, _info) => {
        const loginService = context.injector.get(LoginService);
        const entityId = await loginService.login(args);

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
