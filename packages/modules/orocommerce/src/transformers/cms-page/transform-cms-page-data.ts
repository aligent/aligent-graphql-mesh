import { Injectable } from 'graphql-modules';
import { CmsPage as AcCmsPage } from '@aligent/orocommerce-resolvers';
import { OroLandingPage } from '../../types';
import {
    ChainTransformer,
    slashAtStartOrEnd,
    Transformer,
    TransformerContext,
} from '@aligent/utils';
import { updateImageSrcInHtml } from '../../utils';

@Injectable({
    global: true,
})
export class CmsPageTransformerChain extends ChainTransformer<OroLandingPage, AcCmsPage> {}

@Injectable()
export class CmsPageTransformer implements Transformer<OroLandingPage, AcCmsPage> {
    public transform(context: TransformerContext<OroLandingPage, AcCmsPage>): AcCmsPage {
        const oroLandingPage = context.data;

        const { content, metaDescription, metaKeywords, metaTitle, title, url } =
            oroLandingPage.attributes;

        const formattedUrl = url.replace(slashAtStartOrEnd, '');

        const htmlWithUpdatedImages = updateImageSrcInHtml(content, oroLandingPage.links.self);

        return {
            content: htmlWithUpdatedImages,
            content_heading: title,
            identifier: oroLandingPage.id,
            meta_description: metaDescription,
            meta_keywords: metaKeywords,
            meta_title: metaTitle,
            page_layout: '',
            redirect_code: 301,
            relative_url: formattedUrl,
            title: title,
            url_key: formattedUrl,
            type: 'CMS_PAGE',
            __typename: 'CmsPage',
        };
    }
}
