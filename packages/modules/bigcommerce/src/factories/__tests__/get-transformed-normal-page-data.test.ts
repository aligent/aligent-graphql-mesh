import {
    bcHomePageContent,
    bcHomePageContentWithImages,
    transformedHomePageContent,
    transformedHomePageContentWithImages,
} from './__data__/normal-page-data';
import { getTransformedNormalPageData } from '../get-transformed-normal-page-data';

describe('Transform CMS content', () => {
    const cdnUrl = 'https://cdn11.bigcommerce.com/s-xxxxxx';

    test('Test home page transformation', () =>
        expect(getTransformedNormalPageData(bcHomePageContent, cdnUrl)).toEqual(
            transformedHomePageContent
        ));

    test('Test home page transformation with Images', () =>
        expect(getTransformedNormalPageData(bcHomePageContentWithImages, cdnUrl)).toEqual(
            transformedHomePageContentWithImages
        ));
});
