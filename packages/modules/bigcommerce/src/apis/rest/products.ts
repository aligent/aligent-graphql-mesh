import { bcGet, bcPaginate } from './client';
import { ProductRest, ProductsArgsRest, ProductsRest } from '../../types/rest-prop-types';
import { getSearchParamStringFromSearchParams } from '../../../../../utils/search-params';

const PRODUCTS_API = '/v3/catalog/products';

const DEFAULT_PRODUCT_SEARCH_PARAMS = {
    is_visible: true,
};

export const getProducts = async (searchParams: ProductsArgsRest): Promise<ProductsRest> => {
    const combinedSearchParams = {
        ...DEFAULT_PRODUCT_SEARCH_PARAMS,
        ...searchParams,
    };

    const searchParamsToString = getSearchParamStringFromSearchParams(combinedSearchParams);

    const url = `${PRODUCTS_API}${searchParamsToString}`;
    const response = await bcGet(url);

    return response;
};

/**
 * Gets all products for the input arguments.
 *
 * Note: this currently only accepts params for what we need at the moment. Feel free
 * to add more params to suit to your needs
 *
 * @param searchParams
 */
export const getAllProducts = async (searchParams: ProductsArgsRest): Promise<ProductsRest> => {
    const items = [];

    for await (const bcProduct of getProductsPaginationGenerator(searchParams, 1, 250)) {
        items.push(bcProduct);
    }

    const itemLength = items.length;

    return {
        data: items,
        meta: {
            pagination: {
                total: itemLength,
                count: itemLength,
                per_page: itemLength,
                current_page: 1,
                total_pages: 1,
                links: {
                    current: `?page=1&limit=${itemLength}`,
                },
            },
        },
    };
};

export const getProductsPaginationGenerator = async function* (
    searchParams: ProductsArgsRest,
    page?: number,
    limit?: number
): AsyncGenerator<ProductRest> {
    const combinedSearchParams = {
        ...DEFAULT_PRODUCT_SEARCH_PARAMS,
        ...searchParams,
    };

    const searchParamsToString = getSearchParamStringFromSearchParams(combinedSearchParams);

    const url = `${PRODUCTS_API}${searchParamsToString}`;
    yield* await bcPaginate(url, page, limit);
};
