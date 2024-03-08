import { Brand, QueryBrandsArgs, QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getAllBrands } from '../../apis/graphql';
import { getDataFromMeshCache } from '../../utils';
import { CACHE_KEY__BRANDS } from '../../constants';
import { retrieveCustomerImpersonationTokenFromCache } from '../../apis/rest';

export const brandsResolver = {
    resolve: async (_root, args, context, _info) => {
        return retrieveBrandsFromCache(args, context);
    },
} satisfies QueryResolvers['brands'];

export const retrieveBrandsFromCache = async (
    args: QueryBrandsArgs,
    context: GraphQLModules.ModuleContext
): Promise<Brand[]> => {
    const customerImpersonationToken = await retrieveCustomerImpersonationTokenFromCache(context);

    const query = async () => getAllBrands(args, customerImpersonationToken);

    return getDataFromMeshCache(context, CACHE_KEY__BRANDS, query);
};
