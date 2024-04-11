import { CmsBlocks, CmsPage } from '@aligent/bigcommerce-resolvers';

export const transformCmsPagesToCmsBlocks = (cmsPages: CmsPage[]): CmsBlocks => {
    return {
        items: cmsPages.map((page) => ({
            content: page.content,
            identifier: page.identifier,
            title: page.title,
        })),
    };
};