import {
    ConfigurableProduct,
    Maybe,
    ProductInterface,
    SimpleProduct,
} from '@aligent/bigcommerce-resolvers';

/**
 * De nests product variants to be their own item in an array along with their
 * parent product
 * @param products
 */
export const getFlattenedProducts = (
    products: Maybe<{ items?: Maybe<Array<Maybe<ProductInterface & ConfigurableProduct>>> }>
): Array<ProductInterface> => {
    if (!products?.items) return [];

    return products.items.reduce((carry, item) => {
        if (!item) return carry;

        // Type guard to only do the next bit on configurable products
        if ('variants' in item) {
            const variants = (item.variants || [])
                .map((variant) => variant?.product)
                // Type guard to help filter get rid of the Maybe, undefined etc
                .filter((product): product is SimpleProduct => Boolean(product));
            return [...carry, item, ...variants];
        }

        return [...carry, item];
    }, [] as Array<ProductInterface>);
};
