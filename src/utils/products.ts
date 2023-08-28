import { ConfigurableProduct, Maybe, ProductInterface } from '@mesh';

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

        const variants = (item?.variants || []).map((variant) => {
            if (!variant) return null;
            return variant.product;
        });

        return [...carry, item, ...variants] as Array<ProductInterface>;
    }, [] as Array<ProductInterface>);
};
