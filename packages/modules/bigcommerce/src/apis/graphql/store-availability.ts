import {
    InventoryLocationConnection,
    InventoryLocationsArgs,
    Product,
} from '@aligent/bigcommerce-operations';
import { getBcStoreLocationsGraphql } from './store-locations';
import { getStoreAvailabilityQuery } from './requests/get-store-availability';
import { bcGraphQlRequest } from './client';
import { logAndThrowError } from '@aligent/utils';

export const getBcStoreAvailabilityGraphql = async (
    variables: Promise<InventoryLocationsArgs> & { sku: string },
    customerImpersonationToken: string
): Promise<{
    productInventoryInfoResponse: Product;
    storeLocationsResponse: InventoryLocationConnection;
}> => {
    const productInventoryInfoResponse = await getBcProductInventoryInfoGraphql(
        variables,
        customerImpersonationToken
    );

    const storeLocationsResponse = await getBcStoreLocationsGraphql(
        variables,
        customerImpersonationToken
    );

    return {
        productInventoryInfoResponse,
        storeLocationsResponse,
    };
};

// This request returns the product available to sell amount and relevant store location entityId
export const getBcProductInventoryInfoGraphql = async (
    variables: InventoryLocationsArgs & { sku: string },
    customerImpersonationToken: string
): Promise<Product> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const storeAvailabilityQuery = {
        query: getStoreAvailabilityQuery,
        variables,
    };

    const storeAvailabilityResponse = await bcGraphQlRequest(storeAvailabilityQuery, headers);

    if (storeAvailabilityResponse.errors) {
        return logAndThrowError(storeAvailabilityResponse.errors);
    }

    return storeAvailabilityResponse.data.site.product;
};
