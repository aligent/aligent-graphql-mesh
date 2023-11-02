import { getIdFromCategoryUid, getEncodedCategoryUidFromCategoryData } from '../categories';

const decodedCategoryData = { id: '1', type: 'mastercatalogcategories' };
const encodedCategoryData = 'eyJpZCI6IjEiLCJ0eXBlIjoibWFzdGVyY2F0YWxvZ2NhdGVnb3JpZXMifQ==';

describe('decodeCategoryId', () => {
    it('Return the encoded category uid from a "apiUrl" string', () => {
        const categoryUid = getIdFromCategoryUid(encodedCategoryData);
        expect(categoryUid).toEqual(1);
    });
});

describe('encodeCategoryUid', () => {
    it('Encodes categoryData to a base64 string', () => {
        const encodedCategoryData = getEncodedCategoryUidFromCategoryData(decodedCategoryData);

        expect(encodedCategoryData).toEqual(encodedCategoryData);
    });
});
