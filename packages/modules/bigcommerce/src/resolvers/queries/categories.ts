import { atob } from '@aligent/utils';
import { getCategories } from '../../apis/graphql/categories';
import { getTransformedCategoryData } from '../../factories/transform-category-data';
import { QueryResolvers } from '@aligent/bigcommerce-resolvers';

export const categoriesResolver: QueryResolvers['categories'] = {
    resolve: async (_root, args, context, _info) => {
        const categoryUid = args?.filters?.category_uid?.eq;
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        /* The PWA sets a "root_category_uid" as an environment variable when it builds. This "root_category_uid"
         * is used when querying for category tree/mega menu data. This is something TF Adobe Commerce relies on which
         * TF Big Commerce doesn't need. So if a "categoryUid" of "null" comes through, expect the FE is querying for megamenu
         * data. */
        const rootEntityId =
            categoryUid && categoryUid !== 'null' ? Number(atob(categoryUid)) : null;
        const { category, categoryTree } = await getCategories(
            customerImpersonationToken,
            rootEntityId
        );

        // Because we make a "category" query based on the "categoryUid" passed to this resolver,
        // the data returned will correspond to the first "categoryTree" item so merge them together.
        categoryTree[0] = { ...categoryTree[0], ...category };
        const transformedData = categoryTree.map(getTransformedCategoryData);

        /* If there's no "rootEntityId" then the PWA is most likely asking for the mega menu category tree
         * which doesn't require an id.*/
        return !rootEntityId
            ? {
                  items: [
                      {
                          children: transformedData,
                          redirect_code: 0,
                          staged: false,
                          uid: 'null',
                      },
                  ],
              }
            : { items: transformedData };
    },
};