import { getIdFromLandingPageApiUrl, getCategoryUidFromCategoryApiUrl } from '../routes';

describe('routes', () => {
    it('Return the encoded category uid from a "apiUrl" string', () => {
        const categoryUid = getCategoryUidFromCategoryApiUrl(
            '/api/products?filter%5BrootCategory%5D%5Bgte%5D=5'
        );
        const expectedResult = 'eyJpZCI6IjUiLCJ0eXBlIjoibWFzdGVyY2F0YWxvZ2NhdGVnb3JpZXMifQ==';
        expect(categoryUid).toEqual(expectedResult);
    });

    it('Returns a landing page id from a "apiUrl" string', () => {
        const landingPageId = getIdFromLandingPageApiUrl('/api/landingpages/1');
        const expectedResult = '1';

        expect(landingPageId).toEqual(expectedResult);
    });
});
