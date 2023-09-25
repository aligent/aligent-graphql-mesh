import { bcGet } from './client';
import { ProductsArgsRest, ProductsRest } from '../../types/rest-prop-types';
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
