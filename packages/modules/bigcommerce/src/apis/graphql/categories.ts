import { bcGraphQlRequest } from './client';
import { getCategoryQuery } from './requests/category';
import { getCategoryTreeQuery } from './requests/category-tree';
import { BcCategory, BcCategoryTree } from '../../types';

export const getCategories = async (
    customerImpersonationToken: string,
    rootEntityId: number | null,
    variables: { productsPageSize: number }
): Promise<{ category: BcCategory; categoryTree: BcCategoryTree[] }> => {
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
