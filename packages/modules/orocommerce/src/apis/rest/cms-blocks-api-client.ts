import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { OroCmsBlock } from '../../types/cms-blocks';

@Injectable()
export class CmsBlockClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getCmsBlocks(identifiers: string[]): Promise<OroCmsBlock[]> {
        /* @todo query for cms block data from new BE endpoint once OTF-73 is completed */
        return new Promise((resolve, _) =>
            resolve([
                {
                    id: '1',
                    type: 'orocmsblock',
                    attributes: {
                        id: 1,
                        content:
                            '<div style="text-align: center; font-weight: bold"><span>Work in progress: CMS block resolver </span></div>',
                        identifier: 'mock-identifier',
                        title: 'Work in Progress',
                    },
                },
            ])
        );
    }
}
