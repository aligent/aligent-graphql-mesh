import { MutationResolvers } from '@aligent/auth-resolvers';
import { generateMeshToken } from '../../../../bigcommerce/src/utils';
import { retrieveCustomerImpersonationTokenFromCache } from '../../../../bigcommerce/src/apis/rest';
import { bcLogin } from '../../../../bigcommerce/src/apis/graphql';

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
