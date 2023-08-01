import { CmsPage, QueryResolvers, Resolver, ResolverTypeWrapper } from '../../../meshrc/.mesh';
import { mockCmsPage } from '../mocks/cms-page';

export const cmsPageResolver: QueryResolvers['cmsPage']= {
    resolve: () => {
        return mockCmsPage;
    },
};
