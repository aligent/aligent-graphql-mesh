import {
    BcBreadCrumbEdges,
    BcCategoriesWithBreadcrumbUrlOnly,
    parentCategories,
    transformedBreadcrumbs,
} from '../helpers/__tests__/__data__/transform-breadcrumb-data';
import {
    getTransformedBreadcrumbsData,
    getTransformedBreadcrumbsFromCategories,
} from '../transform-breadcrumb-data';

describe('Transform breadcrumb data', () => {
    it('Transforms BC breadcrumbs to AC', () => {
        expect(
            getTransformedBreadcrumbsData(BcBreadCrumbEdges, BcCategoriesWithBreadcrumbUrlOnly)
        ).toEqual(transformedBreadcrumbs);
    });

    it(`Calls "getTransformedBreadcrumbsFromCategories" if there's no breadcrumb data`, () => {
        /* We want to call the function but will pass "undefined" so it gets called but returns "null"*/
        expect(
            getTransformedBreadcrumbsData(undefined, BcCategoriesWithBreadcrumbUrlOnly, undefined)
        ).toEqual(null);
    });
});

describe('getTransformedBreadcrumbsFromCategories', () => {
    it('Transforms an array of categories into breadcrumbs', () => {
        const expectedResult = [
            {
                category_id: 58,
                category_level: 1,
                category_name: 'Women',
                category_url_path: 'women',
                category_url_key: 'women',
                category_uid: 'NTg=',
            },
            {
                category_id: 59,
                category_level: 2,
                category_name: 'Tops',
                category_url_path: 'women/tops-women',
                category_url_key: 'women/tops-women',
                category_uid: 'NTk=',
            },
        ];

        expect(getTransformedBreadcrumbsFromCategories(parentCategories)).toEqual(expectedResult);
    });

    it(`returns null if there's no parentCategories data`, () => {
        const expectedResult = null;

        expect(getTransformedBreadcrumbsFromCategories(undefined)).toEqual(expectedResult);
    });
});
