import { Category } from '../types';
import { btoa, slashAtStartOrEnd } from '../../utils';
import {
    BC_BreadcrumbConnection,
    BC_CategoryConnection,
} from '@mesh/external/BigCommerceGraphqlApi';
import { Breadcrumb, CategoryInterface, CategoryTree, Maybe } from '../../meshrc/.mesh';

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
        breadcrumbs: getTransformedBreadcrumbsData(breadcrumbs),
        // @ts-expect-error: this isn't included in the category prop types but is needed to prevent graphql from complaining
        __typename: 'CategoryTree',
    };
};

export const getTransformedCategoriesData = (
    categories: BC_CategoryConnection
): Maybe<Array<Maybe<CategoryInterface>>> => {
    if (!categories.edges || categories?.edges.length === 0) return null;

    return categories.edges.map((category) => {
        if (!category?.node) return null;
        return getTransformedCategoryData(category.node);
    });
};

const getTransformedBreadcrumbsData = (
    breadcrumbs: BC_BreadcrumbConnection | undefined
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
