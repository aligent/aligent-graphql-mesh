import { CategoriesClient } from '../../apis/rest/category-client';
import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { atob } from '@aligent/utils';
import { CategoriesTransformerChain } from '../../transformers/categories/categories-transformer';

export const categoriesResolver = {
    resolve: async (_root, args, context, _info) => {
        const categoryUid = args?.filters?.category_uid?.eq;
        const rootEntityId =
            categoryUid && categoryUid !== 'null' ? Number(atob(categoryUid)) : null;
        const api: CategoriesClient = context.injector.get(CategoriesClient);
        const categories = await api.getCategories(rootEntityId);
        const transformer: CategoriesTransformerChain = context.injector.get(
            CategoriesTransformerChain
        );
        return { items: transformer.transform({ data: categories }) };
    },
} satisfies QueryResolvers['categories'];
