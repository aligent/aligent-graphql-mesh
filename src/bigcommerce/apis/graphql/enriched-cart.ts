import { getCheckout } from './checkout';
import { getBcProductsGraphql } from './products';
import { getTransformedProductsData } from '../../factories/transform-products-data';
import { getTransformedCartData } from '../../factories/transform-cart-data';
import { Cart, QuerycartArgs } from '@mesh';
import { getDeNestedProductVariants } from '../../../utils';

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
    args: QuerycartArgs,
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

    const uniqueEntityIds = [...new Set(cartItemEntityIds)];

    const products = await getBcProductsGraphql(
        { entityIds: uniqueEntityIds },
        customerImpersonationToken
    );

    if (!products) return UNDEFINED_CART;

    const transformedProducts = getTransformedProductsData({ products });

    const deNestedProducts = getDeNestedProductVariants(transformedProducts);
    return getTransformedCartData(checkoutResponse, deNestedProducts);
};
