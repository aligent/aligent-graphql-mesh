import { CategoryTreeResolvers } from '@aligent/orocommerce-resolvers';
import { CategoriesClient } from '../../../apis/rest/category-client';
import { BreadcrumbsTransformerChain } from '../../../transformers/categories/breadcrumbs-transformer';
import { decodeCategoryId } from '../../../transformers/categories/categories-transformer';

/**
 * This is a sub-resolver it is executed after categoriesResolver when items was specified in the query
 * The sub-resolvers is configured here in the scr/resolves/index.ts
 */
export const breadcrumbsSubResolver: CategoryTreeResolvers['breadcrumbs'] = {
    resolve: async (root, _args, context, _info) => {
        //root.uid contains the categoryId which is base64 encoded by the previously executed categories resolver
        const nodeId = decodeCategoryId(root.uid);
        if (!nodeId) return [];

        const api: CategoriesClient = context.injector.get(CategoriesClient);
        const categories = await api.getBreadcrumbs(nodeId);
        const transformer: BreadcrumbsTransformerChain = context.injector.get(
            BreadcrumbsTransformerChain
        );
        return transformer.transform({ data: categories });
    },
};
