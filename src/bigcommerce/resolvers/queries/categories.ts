import { atob } from '../../../utils';
import { getCategories } from '../requests/bc-graphql-calls';
import { getTransformedCategoriesData } from '../../factories/transform-category-data';
import { CategoryResult } from '../../../meshrc/.mesh';

export const categoriesResolver = {
    resolve: async (
        root: any,
        args: { filters: { category_uid: { eq: string } } },
        context: {
            headers: { authorization: string };
        },
        info: any
    ): Promise<CategoryResult> => {
        const {
            filters: {
                category_uid: { eq: categoryUid },
            },
        } = args || {};

        const rootEntityId = Number(atob(categoryUid));

        const { category, categoryTree } = await getCategories(rootEntityId);

        // Because we make a "category" query based on the "categoryUid" passed to this resolver,
        // the data returned will correspond to the first "categoryTree" item so merge them together.
        categoryTree[0] = { ...categoryTree[0], ...category };
        const transformedData = categoryTree.map(getTransformedCategoriesData);

        /*
         * AC has a default category of "2" set for the mega menu.
         * If this happens wrap the received category content as if it's a child
         * of a default category.
         * */
        return Number(atob(categoryUid)) === 2
            ? {
                  items: [
                      {
                          children: transformedData,
                          redirect_code: 0,
                          staged: false,
                          uid: categoryUid,
                      },
                  ],
              }
            : { items: transformedData };
    },
};
