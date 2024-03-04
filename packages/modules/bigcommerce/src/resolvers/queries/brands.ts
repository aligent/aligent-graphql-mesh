import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getBcBrands } from '../../apis/graphql';

export const brandsResolver = {
    resolve: async (_root, args, context, _info) => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const results = await getBcBrands(args.brandImageWidth, customerImpersonationToken);
        return results;
    },
} satisfies QueryResolvers['brands'];
