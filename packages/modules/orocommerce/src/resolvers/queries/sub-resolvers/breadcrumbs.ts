import { CategoryTreeResolvers } from '@aligent/orocommerce-resolvers';
import { CategoriesClient } from '../../../apis/rest/category-client';
import { BreadcrumbsTransformerChain } from '../../../transformers/index';
import { getIdFromCategoryUid, getWebcatalogIdFromCategoryUid } from '../../../utils';

/**
 * This is a sub-resolver it is executed after categoriesResolver when items was specified in the query
 * The sub-resolvers is configured here in the scr/resolves/index.ts
 */
export const breadcrumbsSubResolver: CategoryTreeResolvers['breadcrumbs'] = {
    resolve: async (root, _args, context, _info) => {
        //root.uid contains the categoryId which is base64 encoded by the previously executed categories resolver
        let nodeId = getWebcatalogIdFromCategoryUid(root.uid);
        const api: CategoriesClient = context.injector.get(CategoriesClient);
        if (nodeId) {
            const categories = await api.getBreadcrumbsFromWebCatalog(nodeId);
            const transformer: BreadcrumbsTransformerChain = context.injector.get(
                BreadcrumbsTransformerChain
            );
            return transformer.transform({ data: categories });
        }
        nodeId = getIdFromCategoryUid(root.uid);
        if (!nodeId) return [];
        const categories = await api.getBreadcrumbsFromMasterCatalog(nodeId);
        const transformer: BreadcrumbsTransformerChain = context.injector.get(
            BreadcrumbsTransformerChain
        );
        return transformer.transform({ data: categories });
    },
};
