import { CACHE_KEY__CATEGORIES_REST } from '../../constants';
import { CategoryRest } from '../../types/rest-prop-types';
import { getDataFromMeshCache } from '../../utils';
import { bcGet } from './client';

export const getAllCategories = async (page: number): Promise<CategoryRest[]> => {
    const path = `/v3/catalog/trees/categories?page=${page}`;

    let categories: CategoryRest[] | [] = [];

    const response = await bcGet(path);

    categories = response.data;

    if (page < response.meta.pagination.total_pages) {
        const nextPageCategories = await getAllCategories(page + 1);
        categories = [...categories, ...nextPageCategories];
    }

    return categories;
};

export const retrieveRESTCategoriesFromCache = async (
    context: GraphQLModules.ModuleContext
): Promise<CategoryRest[]> => {
    const query = () => getAllCategories(1);

    const cacheKey = `${CACHE_KEY__CATEGORIES_REST}`;

    return getDataFromMeshCache(context, cacheKey, query);
};
