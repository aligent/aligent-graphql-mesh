import { logAndThrowError } from '../../../utils/error-handling';
import { BcProduct } from '../../types';
import { bcGraphQlRequest } from './client';
import { getProductBySkuQuery } from './requests/get-product-by-sku';

export const getBcProductGraphql = async (
    sku: string,
    customerImpersonationToken: string
): Promise<BcProduct> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };
    const productBySkuQuery = getProductBySkuQuery(sku);

    const response = await bcGraphQlRequest(productBySkuQuery, headers);

    if (response.data.errors) {
        logAndThrowError(
            new Error(
                `Failed to fetch products from BigCommerce: ${JSON.stringify(response.data.errors)}`
            )
        );
    }

    return response.data.site.product;
};
