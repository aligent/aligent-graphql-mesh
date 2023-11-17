import { ProductReviews } from '@aligent/orocommerce-resolvers';

export const getTransformedReviews = (): ProductReviews => {
    // TODO: Add Product Review transformer function after product review functionality added
    const page_info = {
        current_page: 0,
        page_size: 0,
        total_pages: 0,
    };

    return {
        __typename: 'ProductReviews',
        items: [],
        page_info,
    };
};
