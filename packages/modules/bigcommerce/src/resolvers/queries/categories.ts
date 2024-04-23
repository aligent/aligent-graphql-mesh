import { atob } from '@aligent/utils';
import { retrieveCategoriesFromCache } from '../../apis/graphql/categories';
import {
    getTransformedCategoryData,
    ROOT_PWA_CATEGORY,
} from '../../factories/transform-category-data';
import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { retrieveStoreConfigsFromCache } from '../../apis/graphql';
import { STORE_CONFIG__GRID_PER_PAGE } from './constants';
import { retrieveRESTCategoriesFromCache } from '../../apis/rest';

export const categoriesResolver: QueryResolvers['categories'] = {
    resolve: async (_root, args, context, _info) => {
        const categoryUid = args?.filters?.category_uid?.eq;

        const storeConfig = await retrieveStoreConfigsFromCache(context);

        const { grid_per_page } = storeConfig;

        /* The PWA sets a "root_category_uid" as an environment variable when it builds. This "root_category_uid"
         * is used when querying for category tree/mega menu data. This is something TF Adobe Commerce relies on which
         * TF Big Commerce doesn't need. So if a "categoryUid" of "null" comes through, expect the FE is querying for megamenu
         * data. */
        const rootEntityId =
            categoryUid && categoryUid !== 'null' ? Number(atob(categoryUid)) : null;
        const [{ category, categoryTree }, restCategories] = await Promise.all([
            retrieveCategoriesFromCache(context, rootEntityId, {
                productsPageSize: grid_per_page || STORE_CONFIG__GRID_PER_PAGE,
            }),
            retrieveRESTCategoriesFromCache(context),
        ]);

        // Because we make a "category" query based on the "categoryUid" passed to this resolver,
        // the data returned will correspond to the first "categoryTree" item so merge them together.
        categoryTree[0] = { ...categoryTree[0], ...category };
        const transformedData = categoryTree.map((child) =>
            getTransformedCategoryData(child, undefined, restCategories) //skip the second parameter
        );

        /* If there's no "rootEntityId" then the PWA is most likely asking for the mega menu category tree
         * which doesn't require an id.*/
        return !rootEntityId
            ? {
                  items: [
                      {
                          ...ROOT_PWA_CATEGORY,
                          children: transformedData,
                      },
                  ],
              }
            : { items: transformedData };
    },
};
