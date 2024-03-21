import { MutationResolvers } from '@aligent/auth-resolvers';
import {
    bcLogin,
    generateMeshToken,
    retrieveCustomerImpersonationTokenFromCache,
} from '@aligent/bigcommerce-graphql-module';

export const generateCustomerTokenResolver: MutationResolvers['generateCustomerToken'] = {
    resolve: async (_root, args, context, _info) => {
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);

        const entityId = await bcLogin(args.email, args.password, customerImpersonationToken);

        return {
            token: generateMeshToken(entityId),
        };
    },
};
