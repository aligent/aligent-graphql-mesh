import { CategoriesClient } from '../../apis/rest';
import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import {
    CategoriesTransformerChain,
    decodeCategoryId,
} from '../../transformers/categories/categories-transformer';

export const categoriesResolver: QueryResolvers['categories'] = {
    resolve: async (_root, args, context, _info) => {
        const categoryUid = args?.filters?.category_uid?.eq;
        const rootEntityId = decodeCategoryId(categoryUid);
        const api: CategoriesClient = context.injector.get(CategoriesClient);
        const categories = await api.getCategories(rootEntityId);
        const transformer: CategoriesTransformerChain = context.injector.get(
            CategoriesTransformerChain
        );
        return { items: transformer.transform({ data: categories }) };
    },
};
