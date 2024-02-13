import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import {
    Category as OroMasterCatalogTree,
    WebCatalogTree as OroWebCatalogCategory,
    Category as OroProductCategory,
} from '../../types';

@Injectable({
    global: true,
})
export class CategoriesClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getWebcatalogCategories(rootEntityId: number | null): Promise<OroWebCatalogCategory[]> {
        const path = `/webcatalogtree`;
        const params = {
            'filter[root][gte]': rootEntityId,
        };
        const response = await this.apiClient.get<OroWebCatalogCategory[]>(path, { params });
        return response.data;
    }

    async getMastercatalogCategories(rootEntityId: number | null): Promise<OroMasterCatalogTree[]> {
        const path = `/mastercatalogtree`;
        const params = {
            'filter[root][gte]': rootEntityId,
        };
        const response = await this.apiClient.get<OroMasterCatalogTree[]>(path, { params });
        return response.data;
    }

    async getBreadcrumbsFromWebCatalog(nodeEntityId: number): Promise<OroWebCatalogCategory[]> {
        const path = `/webcatalogtree/${nodeEntityId}`;
        const params = {
            include: 'path',
        };
        // 'path' returns category tree from home to the parent of 'nodeEntityId' category
        // we need to merge current category to get complete breadcrumbs
        const response = await this.apiClient.get<OroWebCatalogCategory, OroWebCatalogCategory[]>(
            path,
            { params }
        );
        if (response.included && response.included.length > 0)
            return [...response.included, response.data];
        return [response.data];
    }

    async getBreadcrumbsFromMasterCatalog(nodeEntityId: number): Promise<OroProductCategory[]> {
        const path = `/mastercatalogcategories/${nodeEntityId}/categoryPath`;
        const response = await this.apiClient.get<OroProductCategory[]>(path);
        return response.data;
    }
}
