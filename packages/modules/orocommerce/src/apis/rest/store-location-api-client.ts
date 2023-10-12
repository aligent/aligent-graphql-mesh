import { Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { OroStoreLocation } from '../../types/store-location';
import { QueryStoreLocationsArgs } from '@aligent/orocommerce-resolvers';

@Injectable()
export class StoreLocationClient {
    protected apiClient: ApiClient;
    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    async getStoreLocations(
        _params: QueryStoreLocationsArgs | undefined
    ): Promise<OroStoreLocation[]> {
        return new Promise((resolve, _) => resolve([]));
    }
}
