import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { bcLogin } from '../../apis/graphql/login';
import { generateMeshToken } from '../..//utils';

export const generateCustomerTokenResolver: MutationResolvers['generateCustomerToken'] = {
    resolve: async (_root, args, context, _info) => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const entityId = await bcLogin(args.email, args.password, customerImpersonationToken);

        return {
            token: generateMeshToken(entityId),
        };
    },
};
