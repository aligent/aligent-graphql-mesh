import { Resource } from '../types/index';
import { atob, btoa, logAndThrowError } from '@aligent/utils';

/**
 * Gets the category id from the base64 encoded category data.
 * e.g. 'eyJpZCI6IjEiLCJ0eXBlIjoibWFzdGVyY2F0YWxvZ2NhdGVnb3JpZXMifQ=='
 * = {'type': 'mastercatalogcategories', 'id': 1}
 *
 * @param categoryUid
 */
export const getIdFromCategoryUid = (categoryUid?: string | null): number | null => {
    if (!categoryUid || categoryUid === 'null') {
        return null;
    }

    try {
        const categoryData = JSON.parse(atob(categoryUid || ''));
        if ('id' in categoryData && categoryData?.type === 'mastercatalogcategories') {
            return Number(categoryData.id);
        }
        return null;
    } catch (error) {
        return logAndThrowError(error);
    }
};

/**
 * Encodes webcatalogtree node content data into schema UID
 * @param categoryData
 */
export const getEncodedCategoryUidFromCategoryData = (categoryData: Resource): string => {
    return btoa(JSON.stringify(categoryData));
};
