import { Category } from '../types';
import { btoa, slashAtStartOrEnd } from '@aligent/utils';
import { CategoryConnection } from '@aligent/bigcommerce-operations';
import { CategoryTree, Maybe } from '@aligent/bigcommerce-resolvers';
import { getTransformedBreadcrumbsData } from './transform-breadcrumb-data';
import { getAttributesFromMetaAndCustomFields } from '@aligent/utils';

export const getTransformedCategoryData = (category: Category): CategoryTree => {
    const {
        children,
        description,
        entityId,
        image,
        metafields,
        name,
        path,
        products,
        seo,
        breadcrumbs,
    } = category;

    const productCount = category.productCount || products?.collectionInfo?.totalItems;
    const { metaDescription, pageTitle } = seo || {};

    /* Retrieved category metafield defined in the admin.
     * NOTE: Make sure to add new category metafields coming from the admin to schema.json
     * */
    const attributesFromMetaFields = getAttributesFromMetaAndCustomFields(metafields?.edges || []);

    const children_count = children ? children.length : 0;
    return {
        children: children ? children.map(getTransformedCategoryData) : [],
        children_count: String(children_count),
        description,
        id: entityId,
        include_in_menu: 1, // BC doesn't support
        image: image?.urlOriginal,
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
        breadcrumbs: getTransformedBreadcrumbsData(breadcrumbs, category),
        __typename: 'CategoryTree',
        ...attributesFromMetaFields,
    };
};

export const getTransformedCategoriesData = (
    categories: CategoryConnection
): Maybe<Array<Maybe<CategoryTree>>> => {
    if (!categories.edges || categories?.edges.length === 0) return null;

    return categories.edges.map((category) => {
        if (!category?.node) return null;
        return getTransformedCategoryData(category.node);
    });
};
