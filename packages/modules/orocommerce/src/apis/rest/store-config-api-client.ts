import { Inject, Injectable, forwardRef, CONTEXT } from 'graphql-modules';
import { ApiClient } from './client';
import { OroStoreConfigApiData } from '../../types/store-config';
import { OroSocialLinkApiData } from '../../types/social-links';
import { getDataFromMeshCache } from '../../utils/mesh-cache';

const STORE_CONFIG_ENDPOINT = '/tf_config';
const CACHE_KEY__STORE_CONFIG: string = 'store_configs';

@Injectable()
export class StoreConfigApiClient {
    constructor(
        @Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient,
        @Inject(CONTEXT) private context: GraphQLModules.ModuleContext
    ) {}

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

    async retrieveStoreConfigFromCache(accessToken: string): Promise<OroStoreConfigApiData[]> {
        const query = () => this.getStoreConfig(accessToken);
        return getDataFromMeshCache(this.context, CACHE_KEY__STORE_CONFIG, query);
    }
}
