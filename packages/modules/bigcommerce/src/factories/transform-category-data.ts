import { Category } from '../types';
import { btoa, slashAtStartOrEnd } from '@aligent/utils';
import { CategoryConnection, BreadcrumbConnection } from '@aligent/bigcommerce-operations';
import { CategoryTree, Maybe, Breadcrumb } from '@aligent/bigcommerce-resolvers';

export const getTransformedCategoryData = (category: Category): CategoryTree => {
    const { children, description, entityId, name, path, products, seo, breadcrumbs } = category;

    const productCount = category.productCount || products?.collectionInfo?.totalItems;
    const { metaDescription, pageTitle } = seo || {};

    const children_count = children ? children.length : 0;
    return {
        children: children ? children.map(getTransformedCategoryData) : [],
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
        // TODO: Need further tests
        // BC categories endpoint is returning wrong breadcrumbs data at the moment. They have identified this as an internal
        // task to fix(STRF-11163).
        breadcrumbs: getTransformedBreadcrumbsData(breadcrumbs),
        __typename: 'CategoryTree',
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

const getTransformedBreadcrumbsData = (
    breadcrumbs: BreadcrumbConnection | undefined
): Maybe<Array<Maybe<Breadcrumb>>> => {
    if (!breadcrumbs?.edges) return null;

    return breadcrumbs.edges.map((node, index) => {
        if (!node?.node) return null;
        return {
            category_level: index,
            category_name: node.node.name,
            category_url_path: node.node.path,
            category_url_key: null,
            category_uid: '',
        };
    });
};
