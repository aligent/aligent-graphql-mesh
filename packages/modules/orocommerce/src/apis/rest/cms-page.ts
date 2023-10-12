import { Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { LandingPage } from '../../types';

@Injectable()
export class CmsPageClient {
    protected apiClient: ApiClient;
    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    async getLandingPage(id: string): Promise<LandingPage> {
        const response = await this.apiClient.get<LandingPage>(`/landingpages/${id}`);
        return response.data;
    }
}
