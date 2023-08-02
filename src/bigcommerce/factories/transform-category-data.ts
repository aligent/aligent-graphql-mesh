import { Category } from '../types';
import { btoa, slashAtStartOrEnd } from '../../utils';
import { CategoryTree } from '../../meshrc/.mesh';

export const getTransformedCategoriesData = (category: Category): CategoryTree => {
    const { children, description, entityId, name, path, products, seo } = category;

    const productCount = category.productCount || products?.collectionInfo?.totalItems;
    const { metaDescription, pageTitle } = seo || {};

    const children_count = children ? children.length : 0;
    return {
        children: children ? children.map(getTransformedCategoriesData) : [],
        children_count: String(children_count),
        description,
        id: entityId,
        include_in_menu: 1, // BC doesn't support
        meta_description: metaDescription,
        meta_title: pageTitle,
        name,
        position: 0,
        product_count: productCount,
        redirect_code: 0,
        uid: btoa(entityId.toString()),
        url_path: path.replace(slashAtStartOrEnd, ''),
        url_suffix: '',
        staged: false,
    };
};
