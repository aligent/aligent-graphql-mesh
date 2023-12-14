import { Checkout } from '@aligent/bigcommerce-operations';
import { Cart, ProductInterface, Country as AcCountry } from '@aligent/bigcommerce-resolvers';
import { getTransformedCartPrices } from './helpers/transform-cart-prices';
import { getTransformedShippingAddresses } from './helpers/transform-shipping-addresses';
import { getTransformCartItems } from './helpers/transform-cart-items';
import { getTransformedBillingAddress } from './helpers/transform-address';
import { getIsVirtualCart } from '../utils/get-is-virtual-cart';
import { BcStorefrontFormFields } from '../types';

export const getTransformedCartData = (
    checkoutData: Checkout,
    additionalCartItemData?: Array<ProductInterface>,
    formFields?: BcStorefrontFormFields,
    countries?: AcCountry[]
): Cart => {
    const { billingAddress, cart, customerMessage, coupons, entityId, shippingConsignments } =
        checkoutData;

    const applied_coupons = coupons.map(({ code }) => ({ code }));

    return {
        applied_coupons,
        id: entityId,
        total_quantity: cart?.lineItems?.totalQuantity || 0,
        error_type: null,
        items: getTransformCartItems(cart, additionalCartItemData),
        is_virtual: getIsVirtualCart(cart?.lineItems),
        // @todo work out free shipping details
        free_shipping_details: {
            free_shipping_active: false,
            free_shipping_percentage: 100,
            free_shipping_remaining: {
                value: 0,
                currency: 'AUD',
            },
            free_shipping_threshold: {
                value: 0,
                currency: 'AUD',
            },
        },
        prices: getTransformedCartPrices(checkoutData, cart),
        billing_address: getTransformedBillingAddress(billingAddress, countries),
        shipping_addresses: getTransformedShippingAddresses(
            shippingConsignments,
            customerMessage,
            formFields,
            countries
        ),
        available_gift_wrappings: [],
        gift_receipt_included: false,
        printed_card_included: false,
    };
};
