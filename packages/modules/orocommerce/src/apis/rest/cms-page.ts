import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { OroLandingPage } from '../../types';

@Injectable()
export class CmsPageClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getLandingPage(id: string): Promise<OroLandingPage> {
        const response = await this.apiClient.get<OroLandingPage>(`/landingpages/${id}`);
        return response.data;
    }
}
