import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { OroStoreConfig } from '../../types/store-config';
import { getMockOroStoreConfig } from '../../transformers/store-config/__tests__/__data__/oro-store-config-data';

@Injectable()
export class StoreConfigApiClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    // TODO: we will implement Oro Api for store config in ticket OTF-96
    async getStoreConfig(): Promise<OroStoreConfig> {
        return new Promise((resolve, _) => {
            resolve(getMockOroStoreConfig());
        });
    }
}
