import { btoa, getIsVirtualCart, getNewUrl } from '../../utils';
import {
    AvailableShippingMethod,
    BC_CartPhysicalItem,
    BC_CartSelectedMultipleChoiceOption,
    BC_Checkout,
    BC_CheckoutAvailableShippingOption,
    BC_CheckoutBillingAddress,
    BC_CheckoutConsignmentAddress,
    BC_CheckoutSelectedShippingOption,
    BC_CheckoutShippingConsignment,
    BC_Money,
    Cart,
    CartItemInterface,
    CartPrices,
    CurrencyEnum,
    Maybe,
    Money,
    SelectedShippingMethod,
    ShippingCartAddress,
} from '../../meshrc/.mesh';

const getPrice = (priceObject: BC_Money): Money => {
    const { currencyCode, value } = priceObject;
    return { currency: currencyCode as Maybe<CurrencyEnum>, value: value || 0 };
};

const getCartItems = (
    cartItems: Array<BC_CartPhysicalItem> | undefined = []
): Array<CartItemInterface> => {
    return cartItems.map(item => {
        const {
            name,
            sku,
            url,
            entityId, // cart item id
            productEntityId,
            discounts,
            extendedListPrice,
            salePrice, // R
            originalPrice, // RRP price
            quantity,
            selectedOptions,
            imageUrl,
        } = item;

        const configurable_options = selectedOptions.map(option => {
            const {
                entityId,
                name,
                value,
                valueEntityId,
            } = option as BC_CartSelectedMultipleChoiceOption;
            return {
                id: entityId,
                option_label: name,
                value_id: valueEntityId,
                value_label: value,
            };
        });

        const total_item_discount = discounts.reduce(
            (carry, discount) => {
                const { currencyCode, value } = discount.discountedAmount;
                return {
                    currency: currencyCode as Maybe<CurrencyEnum>,
                    value: carry.value + value,
                };
            },
            { currency: 'AUD' as Maybe<CurrencyEnum>, value: 0 }
        );

        return {
            id: entityId, // cart item id
            uid: btoa(entityId),
            errors: null,
            prices: {
                price: getPrice(salePrice),
                price_including_tax: getPrice(salePrice),
                // @todo need a away to work out inc/ex gst
                row_total: getPrice(extendedListPrice),
                row_total_including_tax: getPrice(extendedListPrice),
                total_item_discount,
            },
            product: {
                id: productEntityId,
                uid: btoa(String(productEntityId)),
                name: name,
                sku: sku,
                small_image: {
                    url: imageUrl,
                    label: name,
                },
                categories: [],
                price_range: {
                    minimum_price: {
                        discount: {
                            amount_off: originalPrice.value - salePrice.value,
                        },
                        final_price: getPrice(salePrice),
                        regular_price: getPrice(originalPrice),
                    },
                },
                rating_summary: 0,
                review_count: 0,
                stock_status: 'IN_STOCK', // @todo if required might need more data from another product api
                url_key: getNewUrl(url)?.pathname,
                url_suffix: '', // BC doesn't use suffix
                custom_attributes: [],
                reviews: {
                    items: [],
                    page_info: {
                        current_page: null,
                        page_size: null,
                        total_pages: null,
                    },
                },
                staged: false,
            },
            quantity: quantity,
            configurable_options,
        };
    });
};

const getAvailableShippingMethod = (
    shippingOption: BC_CheckoutAvailableShippingOption | BC_CheckoutSelectedShippingOption
): AvailableShippingMethod => {
    const { type, entityId = '', description, cost } = shippingOption;
    return {
        amount: getPrice(cost),
        // If the option is returned in the data it's available?
        available: true,
        base_amount: null,
        carrier_code: type,
        carrier_title: description,
        error_message: '',
        method_code: entityId || '',
        method_title: description,
        // @todo work if "cost" is ex or inc gst
        price_excl_tax: getPrice(cost),
        price_incl_tax: getPrice(cost),
    };
};

const getSelectedShippingMethod = (
    shippingOption: BC_CheckoutSelectedShippingOption
): SelectedShippingMethod => {
    return {
        ...getAvailableShippingMethod(shippingOption),
        method_code: shippingOption.entityId || '',
        method_title: shippingOption.description,
    };
};

const getAddress = (bcAddress: BC_CheckoutConsignmentAddress | BC_CheckoutBillingAddress) => {
    const {
        stateOrProvinceCode,
        stateOrProvince,
        postalCode,
        phone,
        lastName,
        firstName,
        countryCode,
        company,
        city,
        address2 = null,
        address1 = null,
    } = bcAddress;

    return {
        firstname: firstName || '',
        lastname: lastName || '',
        company: company,
        city: city ? city : '',
        country: {
            code: countryCode || '',
            label: countryCode || '', // Only "countryCode" comes from the bc checkout query
        },
        postcode: postalCode,
        region: {
            code: stateOrProvinceCode,
            label: stateOrProvince,
            region_id: 573, // @todo BC checkout doesn't return the region_id
        },
        street: [address1, address2].filter(Boolean),
        telephone: phone,
        uid: '',
    };
};

const getShippingAddresses = (
    bcShippingAddresses: Array<BC_CheckoutShippingConsignment> | undefined | null,
    customerMessage: string | null | undefined
): Array<Maybe<ShippingCartAddress>> => {
    if (!bcShippingAddresses) return [];

    return bcShippingAddresses.map(
        (bcAddress: BC_CheckoutShippingConsignment): ShippingCartAddress => {
            const {
                selectedShippingOption,
                entityId,
                availableShippingOptions,
                address,
            } = bcAddress;

            return {
                ...getAddress(address),
                uid: btoa(entityId),
                available_shipping_methods:
                    availableShippingOptions?.map(getAvailableShippingMethod) || [],
                selected_shipping_method: selectedShippingOption
                    ? getSelectedShippingMethod(selectedShippingOption)
                    : null,
                customer_notes: customerMessage,
                deliveryInstructions: {
                    authorityToLeave: false,
                    instructions: '',
                },
                /* @todo This is from "customFields" on the "shippingAddress" object. To get this
                 *  we need to know what customField.fieldId corresponds to. The BC Aligent instance currently
                 * shows this as
                 *[
                 *   {
                 *        fieldId: "field_26", // "instructions"
                 *        fieldValue: "this are instructions"
                 *   },
                 *   {
                 *       "fieldId": "field_29", "authorityToLeave"
                 *       "fieldValue": ["0"]
                 *   }
                 * ]
                 */
            };
        }
    );
};

const getPrices = (checkoutData: BC_Checkout): CartPrices => {
    const { coupons, grandTotal, subtotal, taxes, taxTotal } = checkoutData || {
        billingAddress: [],
        cart: {},
        shippingConsignments: [],
        taxes: [],
    };

    const applied_taxes =
        taxes?.map(tax => {
            const { name, amount } = tax;
            return {
                amount: getPrice(amount),
                label: name,
            };
        }) || null;

    const discounts = coupons.map(coupon => {
        const { code, discountedAmount } = coupon;

        return {
            label: code,
            amount: getPrice(discountedAmount),
        };
    });

    const discountedAmount = coupons.reduce(
        (carry, coupon) => {
            const { currencyCode, value } = coupon.discountedAmount;
            return { currency: currencyCode, value: carry.value + value };
        },
        { currency: '', value: 0 }
    );
    return {
        applied_taxes,
        discounts,
        grand_total: grandTotal?.value ? getPrice(grandTotal) : null,
        subtotal_excluding_tax: subtotal?.value ? getPrice(subtotal) : null,
        subtotal_including_tax: subtotal?.value ? getPrice(subtotal) : null,
        subtotal_with_discount_including_tax: {
            value: grandTotal?.value + discountedAmount.value,
            currency: taxTotal?.currencyCode as Maybe<CurrencyEnum>,
        },
        subtotal_with_discount_excluding_tax: {
            value: grandTotal?.value || 0 - taxTotal?.value || 0 + discountedAmount.value,
            currency: taxTotal?.currencyCode as Maybe<CurrencyEnum>,
        },
    };
};

export const getTransformedCartData = (checkoutData: BC_Checkout): Cart => {
    const {
        billingAddress,
        cart,
        customerMessage,
        coupons,
        entityId,
        shippingConsignments,
    } = checkoutData || { billingAddress: [], cart: {}, shippingConsignments: [], taxes: [] };
    const { physicalItems } = cart?.lineItems || {
        customItems: [],
        digitalItems: [],
        giftCertificates: [],
        physicalItems: [],
    };

    const items = getCartItems([...physicalItems]);

    const applied_coupons = coupons.map(({ code }) => ({ code }));

    return {
        applied_coupons,
        id: entityId,
        total_quantity: cart?.lineItems?.totalQuantity || 0,
        error_type: null,
        items,
        is_virtual: getIsVirtualCart(cart),
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
        prices: getPrices(checkoutData),
        billing_address: billingAddress ? getAddress(billingAddress) : null,
        shipping_addresses: getShippingAddresses(shippingConsignments, customerMessage),
        available_gift_wrappings: [],
        gift_receipt_included: false,
        printed_card_included: false,
    };
};
