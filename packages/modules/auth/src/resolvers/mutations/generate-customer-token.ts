import { MutationResolvers } from '@aligent/auth-resolvers';
import { generateMeshToken } from '@aligent/bigcommerce-graphql-module/src/utils';
import { retrieveCustomerImpersonationTokenFromCache } from '@aligent/bigcommerce-graphql-module/src/apis/rest';
import { bcLogin } from '@aligent/bigcommerce-graphql-module/src/apis/graphql';

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
