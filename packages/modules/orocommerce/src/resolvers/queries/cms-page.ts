import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CmsPageClient } from '../../apis/rest/cms-page';
import { CmsPageTransformerChain } from '../../transformers/cms-page/transform-cms-page-data';

export const cmsPageResolver: QueryResolvers['cmsPage'] = {
    resolve: async (_root, args, context, _info) => {
        const cmsPageClient: CmsPageClient = context.injector.get(CmsPageClient);

        const id = String(args.id);
        const identifier = String(args.identifier);
        const identifierOrId = identifier ? identifier : id;

        const oroLandingPage = await cmsPageClient.getLandingPage(identifierOrId);

        const cmsPageTransformerChain: CmsPageTransformerChain =
            context.injector.get(CmsPageTransformerChain);

        return cmsPageTransformerChain.transform({ data: oroLandingPage });
    },
};
