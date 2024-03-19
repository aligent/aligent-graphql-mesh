import { MutationResolvers } from '@aligent/auth-resolvers';

import {
    bcLogin,
    retrieveCustomerImpersonationTokenFromCache,
} from '@aligent/bigcommerce-graphql-module';
import { generateLoginTokens } from '../../utils';

export const generateCustomerTokenResolver: MutationResolvers['generateCustomerToken'] = {
    resolve: async (_root, args, context, _info) => {
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);

        const entityId = await bcLogin(args.email, args.password, customerImpersonationToken);

        const isExtendedLogin = !!args?.remember_me;

        const { accessToken, refreshToken } = generateLoginTokens(entityId, isExtendedLogin);

        return {
            token: accessToken,
            refresh_token: refreshToken,
        };
    },
};
