import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import {CmsPageClient} from "../../apis/rest/cms-page";
import {CmsPageTransformerChain} from "../../transformers/cms-page/transform-cms-page-data";

export const cmsPageResolver: QueryResolvers['cmsPage'] = {
    resolve: async (_root, _args, context, _info) => {
        const cmsPageClient: CmsPageClient = context.injector.get(CmsPageClient);

        const oroLandingPage = await cmsPageClient.getLandingPage('1');

        const cmsPageTransformerChain: CmsPageTransformerChain =
            context.injector.get(CmsPageTransformerChain);

        return cmsPageTransformerChain.transform({ data: { landingPage: oroLandingPage } });
    },
};
