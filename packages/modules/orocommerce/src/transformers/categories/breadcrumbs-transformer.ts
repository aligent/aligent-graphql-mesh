import { Breadcrumb } from '@aligent/orocommerce-resolvers';
import { WebCatalogTree as OroCategory } from '@orocommerce/types';

export const getTransformedBreadcrumbsData = (categories: OroCategory[]): Breadcrumb[] => {
    return categories.map((category) => {
        return {
            category_level: category.attributes.level,
            category_name: category.attributes.title,
            category_url_path: category.attributes.url,
            category_url_key: null,
            category_uid: '',
        };
    });
};
