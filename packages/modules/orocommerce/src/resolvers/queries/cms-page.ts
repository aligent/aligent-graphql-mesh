import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CmsPageClient } from '../../apis/rest/cms-page';
import { CmsPageTransformerChain } from '../../transformers/cms-page/transform-cms-page-data';
import { RoutesClient } from '../../apis/rest/routes';
import { getIdFromLandingPageApiUrl } from '../../utils';

export const cmsPageResolver = {
    resolve: async (_root, args, context, _info) => {
        const { id, identifier } = args;

        const isIdentifiedANumber = !!Number(identifier);

        let landingPageId = String(Number(identifier) || id);

        /*
         * If we only have an "identifier" name for a CMS page we need to find the corresponding
         * page id. To get that we query the routes endpoint using the "identifier" as the path
         * and get the id off the "apiUrl"
         *
         * If the identifier is a number (id) then don't query the routes rest endpoint and bypass this
         * condition */
        if (identifier && !isIdentifiedANumber) {
            const routesClient: RoutesClient = context.injector.get(RoutesClient);

            const pathFromIdentifier = `:${args.identifier}`;

            const routeData = await routesClient.getRoutes(pathFromIdentifier);

            if (routeData?.attributes.apiUrl) {
                landingPageId = getIdFromLandingPageApiUrl(routeData?.attributes.apiUrl);
            }
        }

        const cmsPageClient: CmsPageClient = context.injector.get(CmsPageClient);
        const oroLandingPage = await cmsPageClient.getLandingPage(landingPageId);

        const transformer: CmsPageTransformerChain = context.injector.get(CmsPageTransformerChain);

        return transformer.transform({ data: oroLandingPage });
    },
} satisfies QueryResolvers['cmsPage'];
