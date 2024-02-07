import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { WebCatalogTree as OroCategory } from '../../types';

@Injectable()
export class CategoriesClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getCategories(rootEntityId: number | null): Promise<OroCategory[]> {
        const path = `/webcatalogtree`;
        const params = {
            'filter[root][gte]': rootEntityId,
        };
        const response = await this.apiClient.get<OroCategory[]>(path, { params });
        return response.data;
    }

    async getBreadcrumbs(nodeEntityId: number): Promise<OroCategory[]> {
        const path = `/webcatalogtree/${nodeEntityId}`;
        const params = {
            include: 'path',
        };
        // 'path' returns category tree from home to the parent of 'nodeEntityId' category
        // we need to merge current category to get complete breadcrumbs
        const response = await this.apiClient.get<OroCategory, OroCategory[]>(path, { params });
        if (response.included && response.included.length > 0)
            return [...response.included, response.data];
        return [response.data];
    }
}
