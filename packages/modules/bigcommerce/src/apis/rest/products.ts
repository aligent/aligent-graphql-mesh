import { bcGet } from './client';
import { ProductRule, ProductsArgsRest, ProductsRest } from '../../types/rest-prop-types';
import { getSearchParamStringFromSearchParams } from '../../../../../utils/search-params';

const PRODUCTS_API = '/v3/catalog/products';
const PRODUCTS_API_V2 = '/v2/products';

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

// This is a deprecated API but still we have to use it as complex-rule API doesn't return product
// rules properly yet. ref: https://developer.bigcommerce.com/legacy/v2-catalog-products/v2-product-rules
export const getProductRules = async (productId: number): Promise<ProductRule[]> => {
    const url = `${PRODUCTS_API_V2}/${productId}/rules`;
    const response = await bcGet(url);

    return response;
};
