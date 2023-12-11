import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { OroStoreConfigApiData } from '../../types/store-config';

@Injectable()
export class StoreConfigApiClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getStoreConfig(accessToken: string): Promise<OroStoreConfigApiData[]> {
        const response = await this.apiClient.get<OroStoreConfigApiData[]>('/tf_config', {
            headers: { Authorization: accessToken },
        });
        return response.data;
    }
}
