import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { OroCmsBlock } from '../../types/cms-blocks';

@Injectable({
    global: true,
})
export class CmsBlockClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getCmsBlocks(identifiers: string[]): Promise<OroCmsBlock[]> {
        const aliasArg = identifiers.join(',');

        const response = await this.apiClient.get<OroCmsBlock[]>(
            `/contentblocks/?filter[alias]=${aliasArg}`
        );
        return response.data;
    }
}
