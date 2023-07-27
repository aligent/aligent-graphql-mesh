import { atob } from '../../../utils';
import { getCategoryTree } from '../requests/bc-graphql-calls';
import { getTransformedCategoryTreeData } from '../../factories/transform-category-tree-data';
import { AcCategory } from '../../types';

export const categoriesResolver = {
    resolve: async (
        root: any,
        args: { filters: { category_uid: { eq: string } } },
        context: {
            headers: { authorization: string };
        },
        info: any
    ): Promise<AcCategory> => {
        const {
            filters: {
                category_uid: { eq: categoryUid },
            },
        } = args || {};

        const rootEntityId = Number(atob(categoryUid));

        const { category, categoryTree } = await getCategoryTree(rootEntityId);

        categoryTree[0] = { ...categoryTree[0], ...category };
        const transformedData = categoryTree.map(getTransformedCategoryTreeData);

        /*
         * AC has a default category of "2" set for the mega menu.
         * If this happens wrap the received category content as if it's a child
         * of a default category.
         * */
        return Number(atob(categoryUid)) === 2
            ? { items: [{ children: transformedData, uid: categoryUid }] }
            : { items: transformedData };
    },
};
