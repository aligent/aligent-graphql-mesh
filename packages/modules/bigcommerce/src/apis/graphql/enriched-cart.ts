import { getCheckout } from './checkout';
import { getBcProductsGraphql } from './products';
import { getTransformedProductsData } from '../../factories/transform-products-data';
import { getTransformedCartData } from '../../factories/transform-cart-data';
import { getFlattenedProducts } from '../../utils';
import { retrieveStoreConfigsFromCache } from './store-configs';
import { getIncludesTax } from '@aligent/utils';
import { Cart, QueryCartArgs } from '@aligent/bigcommerce-resolvers';

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
 * @param context
 * @param bcCustomerId
 */
export const getEnrichedCart = async (
    args: QueryCartArgs,
    context: GraphQLModules.ModuleContext,
    bcCustomerId: number | null
): Promise<Cart> => {
    const customerImpersonationToken = (await context.cache.get(
        'customerImpersonationToken'
    )) as string;

    const checkoutQuery = getCheckout(args.cart_id, bcCustomerId, customerImpersonationToken);

    const storeConfigRequest = await retrieveStoreConfigsFromCache(context);

    const [checkoutResponse, storeConfig] = await Promise.all([checkoutQuery, storeConfigRequest]);

    const { tax: taxSettingsResponse } = storeConfig;

    if (!checkoutResponse?.entityId) return UNDEFINED_CART;

    const cartItemEntityIds = checkoutResponse.cart?.lineItems.physicalItems.map(
        (item) => item.productEntityId
    );

    /* Ensures we don't query for duplicate product ids and cases we have variants in the cart
     * from the same parent product*/
    const uniqueEntityIds = [...new Set(cartItemEntityIds)];

    const products = await getBcProductsGraphql(
        { entityIds: uniqueEntityIds, includeTax: getIncludesTax(taxSettingsResponse?.pdp) },
        customerImpersonationToken
    );

    if (!products) return UNDEFINED_CART;

    const transformedProducts = getTransformedProductsData({ products }, 50, 1);

    /* Get an array where parent products and variant are their own array item. This helps
     * when mapping additional product data to its corresponding cart item*/
    const flattenedProducts = getFlattenedProducts(transformedProducts);

    return getTransformedCartData(checkoutResponse, flattenedProducts);
};
