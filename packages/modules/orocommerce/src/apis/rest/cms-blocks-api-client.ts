import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { OroCmsBlock } from '../../types/cms-blocks';

@Injectable()
export class CmsBlockClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getCmsBlocks(identifiers: string[]): Promise<OroCmsBlock[]> {
        const response = await this.apiClient.get<OroCmsBlock[]>(
            `/contentblocks/?filter[alias]=${identifiers[0]}`
        );
        return response.data;
    }
}
