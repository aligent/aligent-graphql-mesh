import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { bcLogin } from '../../apis/graphql/login';
import { generateMeshToken } from '../../utils';
import { retrieveCustomerImpersonationTokenFromCache } from '../../apis/rest';

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
