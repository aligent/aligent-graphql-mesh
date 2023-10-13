import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { WebCatalogTree as OroCategory } from '@orocommerce/types';

@Injectable()
export class CategoriesClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getCategories(rootEntityId: number | null): Promise<OroCategory[]> {
        const path = `/webcatalogtree/${rootEntityId}`;
        const params = {
            'filter[root][gte]': rootEntityId,
        };
        const response = await this.apiClient.get<OroCategory[]>(path, { params });
        return response.data;
    }

    async getBreadcrumbs(nodeEntityId: number) {
        const path = `/webcatalogtree/${nodeEntityId}/path`;
        const response = await this.apiClient.get<OroCategory[]>(path);
        return response.data;
    }
}
