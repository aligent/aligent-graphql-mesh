import { ConfigurableProduct, Maybe, ProductInterface } from '@aligent/bigcommerce-resolvers';
import { isTruthy } from '@aligent/utils';

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
                .map((variant) => variant?.product ?? null)
                .filter(isTruthy);
            return [...carry, item, ...variants];
        }

        return [...carry, item];
    }, [] as Array<ProductInterface>);
};
