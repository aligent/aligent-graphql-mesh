import { Category } from '../types';
import { btoa, slashAtStartOrEnd } from '@aligent/utils';
import { CategoryConnection } from '@aligent/bigcommerce-operations';
import { CategoryTree, Maybe } from '@aligent/bigcommerce-resolvers';
import { getTransformedBreadcrumbsData } from './transform-breadcrumb-data';
import { getAttributesFromMetaAndCustomFields } from '../utils/metafields';
import { getTransformedProductsData } from './transform-products-data';
import { CategoryRest } from '../types/rest-prop-types';

export const ROOT_BIGCOMMERCE_CATEGORY = {
    id: btoa('0'),
    entityId: 0,
    name: 'Big Commerce categories',
    path: '',
    description: '',
};

/**
 * The root category we defined as the parent category of all categories.
 * This is needed to satisfy what the Take Flight PWA is expecting when
 * ask for all categories.
 */
export const ROOT_PWA_CATEGORY = {
    name: ROOT_BIGCOMMERCE_CATEGORY.name,
    children_count: '',
    id: ROOT_BIGCOMMERCE_CATEGORY.entityId,
    level: 0,
    path: '0',
    url_key: '',
    url_path: null,
    children: [],
    staged: false,
    uid: 'null',
    redirect_code: 0,
};

/**
 * Transforms category data into a shape the TT PWA is expecting
 * @param category - The current category object
 * @param parentCategories - The category id path leading up to the current category
 */
export const getTransformedCategoryData = (
    category: Category,
    parentCategories: Category[] | Array<never> = [ROOT_BIGCOMMERCE_CATEGORY],
    restCategories?: CategoryRest[]
): CategoryTree => {
    const { children, description, entityId, image, metafields, name, path, products, seo } =
        category;
    const productCount = products?.collectionInfo?.totalItems || category.productCount;
    const { metaDescription, pageTitle } = seo || {};

    /* Retrieved category metafield defined in the admin.
     * NOTE: Make sure to add new category metafields coming from the admin to schema.json
     * */
    const attributesFromMetaFields = getAttributesFromMetaAndCustomFields(metafields?.edges || []);

    const children_count = children ? children.length : 0;

    /* Collects all the categories as we drill down to child categories. This allows us
     * to access parent category information in child categories and even form breadcrumbs
     */
    const newParentCategories = [...parentCategories, category];

    /* The id path to a category e.g. "0/25/36/30"*/
    const categoryIdPathToString = newParentCategories
        .map((category) => category.entityId)
        .join('/');

    const breadcrumbs = getTransformedBreadcrumbsData(
        category.breadcrumbs,
        category,
        parentCategories
    );

    const level = (breadcrumbs?.length || 0) + 1;

    const urlPath = path.replace(slashAtStartOrEnd, '');

    let parentCategory = null;

    const matchedCurrentCategoryInRest = restCategories?.find(
        (restCategory) => restCategory.category_id === category.entityId
    );

    if (matchedCurrentCategoryInRest) {
        const matchedParentCategory = restCategories?.find(
            (restCategory) => restCategory.category_id === matchedCurrentCategoryInRest.parent_id
        );

        if (matchedParentCategory) {
            parentCategory = {
                id: matchedParentCategory.category_id,
                uid: btoa(String(matchedParentCategory.category_id)),
                name: matchedParentCategory.name,
                url_path: matchedParentCategory.url.path,
            };
        }
    }

    return {
        canonical_url: urlPath,
        children: children
            ? children.map((child) => getTransformedCategoryData(child, newParentCategories))
            : [],
        children_count: String(children_count),
        description,
        id: entityId,
        include_in_menu: 1, // BC doesn't support
        image: image?.urlOriginal,
        level,
        meta_description: metaDescription,
        meta_title: pageTitle,
        name,
        path: categoryIdPathToString,
        position: 0,
        product_count: productCount,
        products: products ? getTransformedProductsData({ products }, 24, 1) : null,
        redirect_code: 0,
        uid: btoa(entityId.toString()),
        url_path: urlPath,
        url_suffix: '',
        staged: false,
        breadcrumbs,
        parent_category: parentCategory,
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
