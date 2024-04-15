import { transformCmsPagesToCmsBlocks } from '../transform-cms-pages-to-cms-blocks';
import { cmsBlockData, cmsPageData } from './__data__/cms-block-data';

describe('Transform CMS Page to cms block', () => {
    test('Multiple identifiers', () =>
        expect(transformCmsPagesToCmsBlocks(cmsPageData)).toEqual(cmsBlockData));
});
