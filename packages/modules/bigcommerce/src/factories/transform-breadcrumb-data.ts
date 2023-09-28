import { BreadcrumbConnection } from '@aligent/bigcommerce-operations';
import { Maybe, Breadcrumb } from '@aligent/bigcommerce-resolvers';
import { Category } from '../types';

export const getTransformedBreadcrumbsData = (
    breadcrumbs: BreadcrumbConnection | undefined,
    currentCategory: Category
): Maybe<Array<Maybe<Breadcrumb>>> => {
    if (!breadcrumbs?.edges) return null;

    return breadcrumbs.edges
        .map((breadcrumb, index) => {
            if (
                !breadcrumb?.node ||
                (breadcrumb?.node.name === currentCategory.name &&
                    breadcrumb?.node.path === currentCategory.path)
            )
                return null;

            return {
                category_level: index,
                category_name: breadcrumb.node.name,
                category_url_path: breadcrumb.node.path,
                category_url_key: null,
                category_uid: '',
            };
        })
        .filter((breadcrumb) => breadcrumb);
};
