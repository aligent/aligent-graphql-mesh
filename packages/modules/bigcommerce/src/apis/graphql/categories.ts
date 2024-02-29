import { bcGraphQlRequest } from './client';
import { getCategoryQuery } from './requests/category';
import { getCategoryTreeQuery } from './requests/category-tree';
import { BcCategory, BcCategoryTree } from '../../types';
import { getDataFromMeshCache } from '../../utils/mesh-cache';
import { CACHE_KEY__CATEGORIES } from '../../constants';

export type GetCategoriesTypes = Promise<{ category: BcCategory; categoryTree: BcCategoryTree[] }>;

export const getCategories = async (
    context: GraphQLModules.ModuleContext,
    rootEntityId: number | null,
    variables: { productsPageSize: number }
): GetCategoriesTypes => {
    const customerImpersonationToken = (await context.cache.get(
        'customerImpersonationToken'
    )) as string;

    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const categoryTreeQuery = {
        query: getCategoryTreeQuery,
        variables: {
            rootEntityId,
        },
    };

    const categoryQuery = {
        query: getCategoryQuery,
        variables: {
            ...variables,
            entityId: rootEntityId,
        },
    };

    const [categoryTreeResponse, categoryResponse] = await Promise.all([
        bcGraphQlRequest(categoryTreeQuery, headers),
        /* Conditionally make a call to get "category" data if we have a "rootEntityId" as if we don't
         * the "category" query will fail */
        ...(rootEntityId ? [bcGraphQlRequest(categoryQuery, headers)] : []),
    ]);

    return {
        categoryTree: categoryTreeResponse.data.site.categoryTree,
        category: categoryResponse ? categoryResponse?.data.site?.category : {},
    };
};

export const retrieveCategoriesFromCache = async (
    context: GraphQLModules.ModuleContext,
    rootEntityId: number | null,
    variables: { productsPageSize: number }
): GetCategoriesTypes => {
    const query = () => getCategories(context, rootEntityId, variables);

    const cacheKey = `${CACHE_KEY__CATEGORIES}-${rootEntityId}`;
    return getDataFromMeshCache(context, cacheKey, query);
};
