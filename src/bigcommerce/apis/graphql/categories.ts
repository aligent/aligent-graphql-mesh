import { BcCategory, BcCategoryTree } from '../../types';
import { bcGraphQlRequest } from './client';
import { getCategoryQuery } from './requests/category';
import { getCategoryTreeQuery } from './requests/category-tree';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

export const getCategories = async (
    rootEntityId: number
): Promise<{ category: BcCategory; categoryTree: BcCategoryTree[] }> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
    };

    const categoryTreeQuery = {
        query: getCategoryTreeQuery,
        variables: {
            /* "2" is the root Category used in AC. If we receive 2 then treat
                this as if were getting megamenu data.
            */
            rootEntityId: rootEntityId === 2 ? null : rootEntityId,
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
        bcGraphQlRequest(categoryQuery, headers),
    ]);

    return {
        categoryTree: categoryTreeResponse.data.site.categoryTree,
        category: categoryResponse.data.site.category,
    };
};
