import { NormalPage } from '@aligent/bigcommerce-operations';
import { CmsPage } from '@aligent/bigcommerce-resolvers';

export const getTransformedNormalPageData = (data: NormalPage): CmsPage => {
    const { path, htmlBody, name, seo } = data;
    return {
        url_key: path.replace(/\//g, ''),
        content: htmlBody,
        content_heading: name,
        identifier: path,
        title: name,
        meta_title: seo.pageTitle,
        meta_keywords: seo.metaKeywords,
        meta_description: seo.metaDescription,
        redirect_code: 0,
    };
};
