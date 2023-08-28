import { ConfigurableProduct, Maybe, ProductInterface, SimpleProduct } from '@mesh';

/**
 * De nests product variants to be their own item in an array
 * @param products
 */
export const getDeNestedProductVariants = (
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
