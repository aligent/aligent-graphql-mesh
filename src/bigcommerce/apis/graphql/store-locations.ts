import {
    BC_InventoryLocationsArgs,
    BC_InventoryLocationConnection,
} from '@mesh/external/BigCommerceGraphqlApi';
import { bcGraphQlRequest } from './client';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';
import { getStoreLocationsQuery } from './requests/store-locations';

export const getBcStoreLocationsGraphql = async (
    variables: BC_InventoryLocationsArgs,
    customerImpersonationToken: string
): Promise<BC_InventoryLocationConnection> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const storeLocationsQuery = {
        query: getStoreLocationsQuery,
        variables: variables,
    };

    const response = await bcGraphQlRequest(storeLocationsQuery, headers);

    if (response.data.errors) {
        return logAndThrowError(response.data.errors);
    }

    return response.data.inventory.locations;
};
