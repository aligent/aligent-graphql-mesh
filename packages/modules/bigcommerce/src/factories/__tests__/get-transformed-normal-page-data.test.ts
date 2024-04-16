import {
    bcHomePageContent,
    bcHomePageContentWithImages,
    transformedHomePageContent,
    transformedHomePageContentWithImages,
} from './__data__/normal-page-data';
import { getTransformedPageData } from '../get-transformed-page-data';

describe('Transform CMS content', () => {
    const cdnUrl = 'https://cdn11.bigcommerce.com/s-xxxxxx';

    test('Test home page transformation', () =>
        expect(getTransformedPageData(bcHomePageContent, cdnUrl)).toEqual(
            transformedHomePageContent
        ));

    test('Test home page transformation with Images', () =>
        expect(getTransformedPageData(bcHomePageContentWithImages, cdnUrl)).toEqual(
            transformedHomePageContentWithImages
        ));
});
