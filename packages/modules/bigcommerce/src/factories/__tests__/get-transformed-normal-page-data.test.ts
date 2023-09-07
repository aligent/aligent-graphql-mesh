import { bcHomePageContent, transformedHomePageContent } from './__data__/normal-page-data';
import { getTransformedNormalPageData } from '../get-transformed-normal-page-data';

describe('Transform CMS content xxx', () => {
    test('Test home page transformation x', () =>
        expect(getTransformedNormalPageData(bcHomePageContent)).toEqual(
            transformedHomePageContent
        ));
});
