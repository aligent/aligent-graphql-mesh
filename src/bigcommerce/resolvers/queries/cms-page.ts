import { CmsPage, QueryResolvers } from '../../../meshrc/.mesh';
import { CustomContext } from '../../types';
import { mockCmsPage } from '../mocks/cms-page';

export const cmsPageResolver: QueryResolvers<CustomContext>['cmsPage']= {
    resolve: () => {
        return (mockCmsPage as unknown) as CmsPage;
    },
};
