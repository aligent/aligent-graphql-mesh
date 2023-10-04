import { BreadcrumbConnection } from '@aligent/bigcommerce-operations';
import { Maybe, Breadcrumb } from '@aligent/bigcommerce-resolvers';
import { Category } from '../types';
import { slashAtStartOrEnd } from '@aligent/utils';
import { ROOT_BIGCOMMERCE_CATEGORY } from './transform-category-data';
import { removeFalseyValues } from '../utils/remove-falsey-values';

/**
 * Transforms breadcrumb data into a structure the PWA is expecting.
 * This function explicitly handles a "breadcrumbs" property coming from a
 * "category" query and not the "categoryTree" query
 *
 * @param breadcrumbs
 * @param currentCategory
 * @param parentCategories
 */
export const getTransformedBreadcrumbsData = (
    breadcrumbs: BreadcrumbConnection | undefined,
    currentCategory: Category,
    parentCategories?: Category[]
): Maybe<Array<Maybe<Breadcrumb>>> => {
    /* Only the root "category" query contains "breadcrumb" data so if it exists,
     * use this condition. */
    if (breadcrumbs?.edges) {
        return breadcrumbs.edges
            .map((breadcrumb) => {
                if (!breadcrumb?.node) return null;

                const { entityId, name, path } = breadcrumb.node;

                if (name === currentCategory.name && path === currentCategory.path) return null;

                const urlPath = path?.replace(slashAtStartOrEnd, '');
                const categoryLevel = path?.split('/').filter(removeFalseyValues).length;

                return {
                    category_id: entityId,
                    category_level: categoryLevel,
                    category_name: name,
                    category_url_path: urlPath,
                    category_url_key: urlPath,
                    category_uid: btoa(String(entityId)),
                };
            })
            .filter(removeFalseyValues);
    }

    /* As we nest our way down a root category to its children, we
     * collect each parent category in an array, so we can iterate through
     * it to form the child breadcrumbs */
    return getTransformedBreadcrumbsFromCategories(parentCategories);
};

/**
 * Transforms breadcrumb data into a structure the PWA is expecting.
 * This function forms breadcrumbs data for nested child categories of a root
 * category we've queried. Nested child category data only comes from the
 * "categoryTree" query which doesn't contain a "breadcrumbs" property.
 *
 * @param parentCategories
 */
export const getTransformedBreadcrumbsFromCategories = (
    parentCategories?: Category[]
): Maybe<Array<Maybe<Breadcrumb>>> => {
    if (!parentCategories?.length) return null;

    let level = 1;

    const breadcrumbs = parentCategories.reduce((carry, category) => {
        if (category.name === ROOT_BIGCOMMERCE_CATEGORY.name) return carry;
        const { entityId, name, path } = category;
        const categoryPath = path.replace(slashAtStartOrEnd, '');

        const breadcrumb = {
            category_id: entityId,
            category_level: level,
            category_name: name,
            category_url_path: categoryPath,
            category_url_key: categoryPath,
            category_uid: btoa(String(entityId)),
        };

        level++;

        return [...carry, breadcrumb];
    }, [] as Breadcrumb[]);

    return breadcrumbs;
};
