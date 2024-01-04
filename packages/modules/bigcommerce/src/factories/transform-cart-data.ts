import { getIsVirtualCart, findMetafieldValueByKey } from '@aligent/utils';
import { Checkout } from '@aligent/bigcommerce-operations';
import { Cart, ProductInterface, Country as AcCountry } from '@aligent/bigcommerce-resolvers';
import { getTransformedCartPrices } from './helpers/transform-cart-prices';
import { getTransformedShippingAddresses } from './helpers/transform-shipping-addresses';
import { getTransformCartItems } from './helpers/transform-cart-items';
import { getTransformedBillingAddress } from './helpers/transform-address';
import { BcPaymentMethod, BcStorefrontFormFields } from '../types';

const SELECTED_PAYMENT_METHOD_KEY = 'selected_payment_method';

export const getTransformedCartData = (
    checkoutData: Checkout,
    additionalCartItemData?: Array<ProductInterface>,
    formFields?: BcStorefrontFormFields,
    countries?: AcCountry[],
    paymentMethods?: BcPaymentMethod[]
): Cart => {
    const { billingAddress, cart, customerMessage, coupons, entityId, shippingConsignments } =
        checkoutData;

    const selectedPaymentMethodCode =
        cart?.metafields?.edges &&
        findMetafieldValueByKey(cart?.metafields.edges, SELECTED_PAYMENT_METHOD_KEY);
    const selectedPaymentMethod =
        selectedPaymentMethodCode &&
        paymentMethods?.find((method) => method.code === selectedPaymentMethodCode);

    const applied_coupons = coupons.map(({ code }) => ({ code }));

    return {
        applied_coupons,
        available_payment_methods: paymentMethods?.map((method) => ({
            title: method.name,
            code: method.code,
            is_deferred: false, // BC doesn't provide a value match this field
        })),
        id: entityId,
        total_quantity: cart?.lineItems?.totalQuantity || 0,
        error_type: null,
        email: billingAddress?.email,
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
        selected_payment_method: selectedPaymentMethod
            ? {
                  title: selectedPaymentMethod.name,
                  code: selectedPaymentMethod.code,
              }
            : null,
        available_gift_wrappings: [],
        gift_receipt_included: false,
        printed_card_included: false,
    };
};
