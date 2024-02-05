import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import {
    WebCatalogTree as OroWebCatalogCategory,
    Category as OroProductCategory,
} from '../../types';

@Injectable({
    global: true,
})
export class CategoriesClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getCategories(rootEntityId: number | null): Promise<OroWebCatalogCategory[]> {
        const path = `/webcatalogtree`;
        const params = {
            'filter[root][gte]': rootEntityId,
        };
        const response = await this.apiClient.get<OroWebCatalogCategory[]>(path, { params });
        return response.data;
    }

    async getBreadcrumbsFromWebCatalog(nodeEntityId: number): Promise<OroWebCatalogCategory[]> {
        const path = `/webcatalogtree/${nodeEntityId}/path`;
        const response = await this.apiClient.get<OroWebCatalogCategory[]>(path);
        return response.data;
    }

    async getBreadcrumbsFromMasterCatalog(nodeEntityId: number): Promise<OroProductCategory[]> {
        const path = `/mastercatalogcategories/${nodeEntityId}/categoryPath`;
        const response = await this.apiClient.get<OroProductCategory[]>(path);
        return response.data;
    }
}
