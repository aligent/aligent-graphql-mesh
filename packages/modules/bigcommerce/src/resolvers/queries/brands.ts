import { Brand, QueryBrandsArgs, QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getAllBrands } from '../../apis/graphql';
import { getDataFromMeshCache } from '../../utils/mesh-cache';
import { CACHE_KEY__BRANDS } from '../../constants';

export const brandsResolver = {
    resolve: async (_root, args, context, _info) => {
        return retrieveBrandsFromCache(args, context);
    },
} satisfies QueryResolvers['brands'];

export const retrieveBrandsFromCache = async (
    args: QueryBrandsArgs,
    context: GraphQLModules.ModuleContext
): Promise<Brand[]> => {
    const customerImpersonationToken = (await context.cache.get(
        'customerImpersonationToken'
    )) as string;

    const query = async () => getAllBrands(args.brandImageWidth, customerImpersonationToken);

    return getDataFromMeshCache(context, CACHE_KEY__BRANDS, query);
};
