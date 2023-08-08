import { BcCategory, BcCategoryTree } from '../../types';
import { bcGraphQlRequest } from './client';
import { getCategoryQuery } from './requests/category';
import { getCategoryTreeQuery } from './requests/category-tree';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

export const getCategories = async (
    rootEntityId?: number | null
): Promise<{ category: BcCategory; categoryTree: BcCategoryTree[] }> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
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
