import {
    BcBreadCrumbEdges,
    transformedBreadcrumbs,
} from '../helpers/__tests__/__data__/transform-breadcrumb-data';
import { getTransformedBreadcrumbsData } from '../transform-breadcrumb-data';

describe('Transform breadcrumb data', () => {
    it('Transforms BC breadcrumbs to AC', () => {
        expect(getTransformedBreadcrumbsData(BcBreadCrumbEdges)).toEqual(transformedBreadcrumbs);
    });
});
