import { productsMock } from './products';
import { mockCategories } from './categories';
import { mockCmsPage } from './cms-page';

export const mockRoute = (__typename: string) => {
    return {
        relative_url: 'men.html',
        redirect_code: 0,
        // products for ... on CategoryTree {} are nested in products.items
        ...(__typename === 'CategoryTree' && {
            ...mockCategories.items[0].children[1],
            products: productsMock,
        }),
        // products for ... on ConfigurableProduct {} are at the root level
        ...(__typename === 'ConfigurableProduct' && {
            ...productsMock.items[0],
        }),
        ...(__typename === 'CmsPage' && mockCmsPage),
    };
};
