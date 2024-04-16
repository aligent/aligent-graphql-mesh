import { NormalPage, RawHtmlPage } from '@aligent/bigcommerce-operations';
import { CmsPage } from '@aligent/bigcommerce-resolvers';

const CND_MASK = /%%GLOBAL_CdnStorePath%%/g;

export const getTransformedPageData = (data: NormalPage | RawHtmlPage, cdnUrl: string): CmsPage => {
    const { path, htmlBody, name, seo } = data;
    return {
        url_key: path.replace(/\//g, ''),
        content: htmlBody.replace(CND_MASK, cdnUrl),
        content_heading: name,
        identifier: path,
        title: name,
        meta_title: seo.pageTitle,
        meta_keywords: seo.metaKeywords,
        meta_description: seo.metaDescription,
        // Since cmsPage type has extended from RoutableInterface where redirect_code is required we are just mocking as 0
        // 0 means there is no redirect error, this will be fine as TF doesn't use redirect_code in cmsPage query at all
        redirect_code: 0,
        __typename: 'CmsPage',
    };
};
