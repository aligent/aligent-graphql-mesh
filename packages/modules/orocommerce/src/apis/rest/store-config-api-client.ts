import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { OroStoreConfigApiData } from '../../types/store-config';
import { OroSocialLinkApiData } from '../../types/social-links';

const STORE_CONFIG_ENDPOINT = '/tf_config';

@Injectable()
export class StoreConfigApiClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getStoreConfig(accessToken: string): Promise<OroStoreConfigApiData[]> {
        const response = await this.apiClient.get<OroStoreConfigApiData[]>(STORE_CONFIG_ENDPOINT, {
            headers: { Authorization: accessToken },
        });
        return response.data;
    }

    async getSocialLinks(): Promise<OroSocialLinkApiData[]> {
        const response = await this.apiClient.get<OroSocialLinkApiData[]>(
            `${STORE_CONFIG_ENDPOINT}?filter[id]=take_flight_social_links.social_links_urls`
        );
        return response.data;
    }
}
