import 'reflect-metadata';
import { CmsPageTransformer } from '../transform-cms-page-data';
import { oroLandingPage } from './__data__/cms-page-input-data';
import { transformedCmsPage } from './__data__/cms-page-transformed-data';

describe('cms page data transform tests', () => {
    test('return transformed cms page', () => {
        const cmsPageTransformer: CmsPageTransformer = new CmsPageTransformer();
        const transformed = cmsPageTransformer.transform({ data: { landingPage: oroLandingPage } });
        expect(transformed).toEqual(transformedCmsPage);
    });
});
