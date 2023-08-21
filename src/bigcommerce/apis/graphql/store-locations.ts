import { BC_InventoryLocationsArgs, BC_InventoryLocationConnection } from '@mesh/external/BigCommerceGraphqlApi';
import { bcGraphQlRequest } from './client';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';
import { getStoreLocationsQuery } from './requests/store-locations';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

export const getBcStoreLocationsGraphql = async (
    variables: BC_InventoryLocationsArgs
): Promise<BC_InventoryLocationConnection> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
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
