import { Injectable } from 'graphql-modules';
import { CmsPage as AcCmsPage } from '@aligent/orocommerce-resolvers';
import { LandingPage} from '../../types';
import { ChainTransformer, Transformer, TransformerContext } from '@aligent/utils';

export interface LandingPageTransformerInput {
    landingPage: LandingPage;
}
@Injectable()
export class CmsPageTransformerChain extends ChainTransformer<
    LandingPageTransformerInput,
    AcCmsPage
> {}

@Injectable()
export class CmsPageTransformer implements Transformer<LandingPageTransformerInput, AcCmsPage> {
    public transform(
        context: TransformerContext<LandingPageTransformerInput, AcCmsPage>
    ): AcCmsPage {

        const oroLandingPage = context.data.landingPage;

        return {
            __typename: 'CmsPage',
            content_heading: "",
            type: 'CMS_PAGE',
            url_key: "",
            page_layout: "",
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
