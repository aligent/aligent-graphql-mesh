import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { OroCmsBlock } from '../../types/cms-blocks';

@Injectable()
export class CmsBlockClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getCmsBlocks(_identifiers: string[]): Promise<OroCmsBlock[]> {
        return new Promise((resolve, _) => resolve([]));
    }
}
