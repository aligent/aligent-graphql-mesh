import { getIdFromCategoryUid, getEncodedCategoryUidFromCategoryData } from '../categories';

const decodedCategoryData = { type: 'mastercatalogcategories', id: '8', webcatalogId: '23' };
const encodedCategoryData =
    'eyJ0eXBlIjoibWFzdGVyY2F0YWxvZ2NhdGVnb3JpZXMiLCJpZCI6IjgiLCJ3ZWJjYXRhbG9nSWQiOiIyMyJ9';

describe('decodeCategoryId', () => {
    it('Return the encoded category uid from a "apiUrl" string', () => {
        const categoryUid = getIdFromCategoryUid(encodedCategoryData);
        expect(categoryUid).toEqual(8);
    });
});

describe('encodeCategoryUid', () => {
    it('Encodes categoryData to a base64 string', () => {
        const encodedCategoryData = getEncodedCategoryUidFromCategoryData(decodedCategoryData);

        expect(encodedCategoryData).toEqual(encodedCategoryData);
    });
});
