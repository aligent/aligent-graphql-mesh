import { Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { OroCmsBlock } from '../../types/cms-blocks';

@Injectable()
export class CmsBlockClient {
    protected apiClient: ApiClient;
    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    async getCmsBlocks(_identifiers: string[]): Promise<OroCmsBlock[]> {
        return new Promise((resolve, _) => resolve([]));
    }
}
