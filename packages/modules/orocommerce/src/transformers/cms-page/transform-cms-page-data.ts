import { Injectable } from 'graphql-modules';
import { CmsPage as AcCmsPage } from '@aligent/orocommerce-resolvers';
import { OroLandingPage } from '../../types';
import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';

@Injectable()
export class CmsPageTransformerChain extends ChainTransformer<OroLandingPage, AcCmsPage> {}

@Injectable()
export class CmsPageTransformer implements Transformer<OroLandingPage, AcCmsPage> {
    public transform(context: TransformerContext<OroLandingPage, AcCmsPage>): AcCmsPage {
        const oroLandingPage = context.data;

        return {
            __typename: 'CmsPage',
            content_heading: '',
            type: 'CMS_PAGE',
            url_key: '',
            page_layout: '',
            redirect_code: 301,
            identifier: oroLandingPage.id,
            meta_description: oroLandingPage.attributes.metaDescription,
            meta_keywords: oroLandingPage.attributes.metaKeywords,
            meta_title: oroLandingPage.attributes.metaTitle,
            relative_url: oroLandingPage.attributes.url,
            title: oroLandingPage.attributes.title,
            content: oroLandingPage.attributes.content,
        };
    }
}
