import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { OroStoreConfig } from '../../types/store-config';

@Injectable()
export class StoreConfigApiClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getStoreConfig(): Promise<OroStoreConfig> {
        const response = await this.apiClient.get<OroStoreConfig>(`/store-config`);
        return response.data;
    }
}
