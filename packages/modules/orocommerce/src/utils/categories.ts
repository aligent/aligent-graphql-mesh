import { Resource } from '../types/index';
import { atob, btoa, logAndThrowError } from '@aligent/utils';

/**
 * Gets the category id from the base64 encoded category data.
 * e.g. 'eyJ0eXBlIjoibWFzdGVyY2F0YWxvZ2NhdGVnb3JpZXMiLCJpZCI6IjgiLCJ3ZWJjYXRhbG9nSWQiOiIyMyJ9=='
 * = { type: 'mastercatalogcategories', id: '8', webcatalogId: '23' }
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
            if (categoryData.id !== 'oro_frontend_root') return Number(categoryData.id);
        }
        return null;
    } catch (error) {
        return logAndThrowError(error);
    }
};

/**
 * Gets the webcatalog node id from the base64 encoded category data.
 * e.g. 'eyJ0eXBlIjoibWFzdGVyY2F0YWxvZ2NhdGVnb3JpZXMiLCJpZCI6IjgiLCJ3ZWJjYXRhbG9nSWQiOiIyMyJ9=='
 * = { type: 'mastercatalogcategories', id: '8', webcatalogId: '23' }
 *
 * @param categoryUid
 */
export const getWebcatalogIdFromCategoryUid = (categoryUid?: string | null): number | null => {
    if (!categoryUid || categoryUid === 'null') {
        return null;
    }

    try {
        const categoryData = JSON.parse(atob(categoryUid || ''));
        if ('webcatalogId' in categoryData) {
            if (categoryData.id !== 'oro_frontend_root') return Number(categoryData.webcatalogId);
        }
        return null;
    } catch (error) {
        return logAndThrowError(error);
    }
};

/**
 * Encodes webcatalogtree node content data into schema UID
 * @param categoryData
 * @param webcatalogId
 */
export const getEncodedCategoryUidFromCategoryData = (
    categoryData: Resource,
    webcatalogId?: string
): string => {
    const extendedCategoryData = {
        id: categoryData.id,
        type: categoryData.type,
        webcatalogId,
    };
    return btoa(JSON.stringify(extendedCategoryData));
};
