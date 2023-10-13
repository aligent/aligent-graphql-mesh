import { Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { OroLandingPage } from '../../types';

@Injectable()
export class CmsPageClient {
    protected apiClient: ApiClient;
    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    async getLandingPage(id: string): Promise<OroLandingPage> {
        const response = await this.apiClient.get<OroLandingPage>(`/landingpages/${id}`);
        return response.data;
    }
}
