import {
    InventoryLocationsArgs,
    InventoryLocationConnection,
} from '@aligent/bigcommerce-operations';
import { bcGraphQlRequest } from './client';
import { logAndThrowError } from '@aligent/utils';
import { getStoreLocationsQuery } from './requests/store-locations';

export const getBcStoreLocationsGraphql = async (
    variables: InventoryLocationsArgs,
    customerImpersonationToken: string
): Promise<InventoryLocationConnection> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const storeLocationsQuery = {
        query: getStoreLocationsQuery,
        variables: variables,
    };

    const response = await bcGraphQlRequest(storeLocationsQuery, headers);
    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.inventory.locations;
};
