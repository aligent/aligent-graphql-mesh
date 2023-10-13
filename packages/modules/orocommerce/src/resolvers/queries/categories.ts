import { CategoriesClient } from '@orocommerce/apis/rest/category-client';
import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { atob } from '@aligent/utils';
import { getTransformedCategoryData } from '@orocommerce/transformers/categories/categories-transformer';

export const categoriesResolver: QueryResolvers['categories'] = {
    resolve: async (_root, args, context, _info) => {
        const categoryUid = args?.filters?.category_uid?.eq;
        /* The PWA sets a "root_category_uid" as an environment variable when it builds. This "root_category_uid"
         * is used when querying for category tree/mega menu data. This is something TF Adobe Commerce relies on which
         * TF Big Commerce doesn't need. So if a "categoryUid" of "null" comes through, expect the FE is querying for megamenu
         * data. */
        const rootEntityId =
            categoryUid && categoryUid !== 'null' ? Number(atob(categoryUid)) : null;
        const api: CategoriesClient = context.injector.get(CategoriesClient);
        const categories = await api.getCategories(rootEntityId);
        return { items: getTransformedCategoryData(categories) };
    },
};
