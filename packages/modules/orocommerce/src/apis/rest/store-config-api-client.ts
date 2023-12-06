import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { OroStoreConfigApiData } from '../../types/store-config';

@Injectable()
export class StoreConfigApiClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getStoreConfig(): Promise<OroStoreConfigApiData[]> {
        const response = await this.apiClient.get<OroStoreConfigApiData[]>('/tf_config');
        return response.data;
    }
}
