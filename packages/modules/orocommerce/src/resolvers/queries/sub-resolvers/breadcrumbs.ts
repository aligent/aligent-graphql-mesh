import { CategoryTreeResolvers } from '@aligent/orocommerce-resolvers';
import { CategoriesClient } from '../../../apis/rest/category-client';
import { BreadcrumbsTransformerChain } from '../../../transformers/categories/breadcrumbs-transformer';

/**
 * This is a sub-resolver it is executed after categoriesResolver when items was specified in the query
 * The sub-resolvers is configured here in the scr/resolves/index.ts
 */
export const breadcrumbsSubResolver: CategoryTreeResolvers['breadcrumbs'] = {
    resolve: async (root, _args, context, _info) => {
        const nodeId = Number(root.id);
        if (!nodeId) return [];
        const api: CategoriesClient = context.injector.get(CategoriesClient);
        const categories = await api.getBreadcrumbs(nodeId);
        const transformer: BreadcrumbsTransformerChain = context.injector.get(
            BreadcrumbsTransformerChain
        );
        return transformer.transform({ data: categories });
    },
};
