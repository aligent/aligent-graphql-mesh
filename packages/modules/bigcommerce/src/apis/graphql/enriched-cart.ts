import { getCheckout } from './checkout';
import { getBcProductsGraphql } from './products';
import { getTransformedProductsData } from '../../factories/transform-products-data';
import { getTransformedCartData } from '../../factories/transform-cart-data';
import { Cart, QueryCartArgs } from '@aligent/bigcommerce-resolvers';
import { getFlattenedProducts } from '../../utils';

export const UNDEFINED_CART = {
    id: '',
    items: [],
    total_quantity: 0,
    available_gift_wrappings: [],
    gift_receipt_included: false,
    is_virtual: false,
    printed_card_included: false,
    shipping_addresses: [],
};

/**
 * Queries for checkout data and enriches cart item information with extra data from the products
 * query. There's a bit of information Big Commerce cart items are missing which is expected in
 * Take Flight, so we need to supplement this with an additional product query.
 *
 * @param args
 * @param bcCustomerId
 * @param customerImpersonationToken
 */
export const getEnrichedCart = async (
    args: QueryCartArgs,
    bcCustomerId: number | null,
    customerImpersonationToken: string
): Promise<Cart> => {
    const checkoutResponse = await getCheckout(
        args.cart_id,
        bcCustomerId,
        customerImpersonationToken
    );

    if (!checkoutResponse?.entityId) return UNDEFINED_CART;

    const cartItemEntityIds = checkoutResponse.cart?.lineItems.physicalItems.map(
        (item) => item.productEntityId
    );

    /* Ensures we don't query for duplicate product ids and cases we have variants in the cart
     * from the same parent product*/
    const uniqueEntityIds = [...new Set(cartItemEntityIds)];

    const products = await getBcProductsGraphql(
        { entityIds: uniqueEntityIds },
        customerImpersonationToken
    );

    if (!products) return UNDEFINED_CART;

    const transformedProducts = getTransformedProductsData({ products }, 50, 1);

    /* Get an array where parent products and variant are their own array item. This helps
     * when mapping additional product data to its corresponding cart item*/
    const flattenedProducts = getFlattenedProducts(transformedProducts);

    return getTransformedCartData(checkoutResponse, flattenedProducts);
};
