import { atob } from '../../../utils';
import { getCategories } from '../../apis/graphql/categories';
import { getTransformedCategoryData } from '../../factories/transform-category-data';
import { QueryResolvers } from '../../../meshrc/.mesh';

export const categoriesResolver: QueryResolvers['categories'] = {
    resolve: async (_root, args, _context, _info) => {
        /*
         * AC has a default category of "2" set for the mega menu.
         * If this happens wrap the received category content as if it's a child
         * of a default category.
         */
        const categoryUid = args?.filters?.category_uid?.eq || '2';
        const rootEntityId = Number(atob(categoryUid));
        const { category, categoryTree } = await getCategories(rootEntityId);

        // Because we make a "category" query based on the "categoryUid" passed to this resolver,
        // the data returned will correspond to the first "categoryTree" item so merge them together.
        categoryTree[0] = { ...categoryTree[0], ...category };
        const transformedData = categoryTree.map(getTransformedCategoryData);

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
