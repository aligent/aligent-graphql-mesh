import { CmsPage, QueryResolvers } from '../../../meshrc/.mesh';
import { mockCmsPage } from '../mocks/cms-page';

export const cmsPageResolver: QueryResolvers['cmsPage']= {
    resolve: () => {
        return (mockCmsPage as unknown) as CmsPage;
    },
};