import { getNewUrl } from '../../utils/get-url';
import { getIsVirtualCart } from '../../utils/get-is-virtual-cart';
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
    BillingCartAddress,
    Cart,
    CartAddressCountry,
    CartAddressInterface,
    CartTaxItem,
    CurrencyEnum,
    InputMaybe,
    Maybe,
    Scalars,
    SelectedShippingMethod,
    ShippingAddressInput,
    ShippingCartAddress,
} from '../../meshrc/.mesh';

const getCartItems = (cartItems: Array<BC_CartPhysicalItem> | undefined = []) => {
    if (cartItems?.length === 0) return [];

    return cartItems.map(item => {
        const {
            name,
            brand,
            sku,
            url,
            entityId, // cart item id
            parentEntityId,
            productEntityId,
            variantEntityId,
            couponAmount,
            discountedAmount,
            discounts,
            extendedListPrice,
            extendedSalePrice,
            salePrice, // RRP price with discount
            listPrice,
            originalPrice, // RRP price
            quantity,
            selectedOptions,
            giftWrapping,
            imageUrl,
            isShippingRequired,
            isTaxable,
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
                __typename: 'SelectedConfigurableOption',
            };
        });

        return {
            id: entityId, // cart item id
            uid: entityId, // @todo use btoa method
            errors: null,
            prices: {
                price_including_tax: {
                    currency: salePrice.currencyCode,
                    value: salePrice.value,
                    __typename: 'Money',
                },
                __typename: 'CartItemPrices',
            },
            product: {
                id: productEntityId,
                name: name,
                sku: sku,
                small_image: {
                    url: imageUrl,
                    label: name, // @todo might need to update to image label
                    __typename: 'ProductImage',
                },
                categories: [],
                price_range: {
                    minimum_price: {
                        discount: {
                            amount_off: originalPrice.value - salePrice.value,
                            __typename: 'ProductDiscount',
                        },
                        final_price: {
                            currency: salePrice.currencyCode,
                            value: salePrice.value,
                            __typename: 'Money',
                        },
                        regular_price: {
                            currency: originalPrice.currencyCode,
                            value: originalPrice.value,
                            __typename: 'Money',
                        },
                        __typename: 'ProductPrice',
                    },
                    __typename: 'PriceRange',
                },
                rating_summary: 0,
                review_count: 0,
                stock_status: 'IN_STOCK', // @todo if required might need more data from another product api
                url_key: getNewUrl(url)?.pathname,
                url_suffix: '', // BC doesn't use suffix
                __typename: 'ConfigurableProduct',
            },
            quantity: quantity,
            configurable_options,
            __typename: 'ConfigurableCartItem',
        };
    });
};

const getAvailableShippingMethod = (
    shippingOption: BC_CheckoutAvailableShippingOption | BC_CheckoutSelectedShippingOption
): AvailableShippingMethod => {
    const { type, transitTime, imageUrl, entityId = '', description, cost } = shippingOption;
    return {
        amount: {
            currency: cost.currencyCode as Maybe<CurrencyEnum>,
            value: cost.value,
        },
        // If the option is returned in the data it's available?
        available: true,
        base_amount: null,
        carrier_code: type,
        carrier_title: description,
        error_message: '',
        method_code: entityId || '',
        method_title: description,
        // @todo work if "cost" is ex or inc gst
        price_excl_tax: {
            currency: cost.currencyCode as Maybe<CurrencyEnum>,
            value: cost.value,
        },
        price_incl_tax: {
            currency: cost.currencyCode as Maybe<CurrencyEnum>,
            value: cost.value,
        },
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
        email,
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
                shippingCost,
                selectedShippingOption,
                lineItemIds,
                handlingCost,
                entityId,
                coupons,
                availableShippingOptions,
                address,
            } = bcAddress;

            return {
                ...getAddress(address),
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

export const getTransformedCartData = (checkoutData: BC_Checkout): Cart => {
    const {
        billingAddress,
        cart,
        customerMessage,
        coupons,
        entityId,
        grandTotal,
        id,
        shippingConsignments,
        subtotal,
        taxes,
        taxTotal,
    } = checkoutData || { billingAddress: [], cart: {}, shippingConsignments: [], taxes: [] };
    const { customItems, digitalItems, giftCertificates, physicalItems } = cart?.lineItems || {
        customItems: [],
        digitalItems: [],
        giftCertificates: [],
        physicalItems: [],
    };

    const items = getCartItems([...physicalItems]);

    const discounts = coupons.map(coupon => {
        const {
            code,
            couponType,
            discountedAmount: { currencyCode, value },
            entityId,
        } = coupon;

        return {
            label: code,
            amount: {
                value: value,
                currency: currencyCode,
            },
        };
    });

    const discountedAmount = coupons.reduce(
        (carry, coupon): { currencyCode: string; value: number } => {
            const { currencyCode, value } = discountedAmount;
            return { currencyCode: currencyCode, value: carry.value + value };
        },
        { currencyCode: '', value: 0 }
    );

    const applied_coupons = coupons.map(({ code }) => ({ code }));

    const applied_taxes =
        taxes?.map(tax => {
            const { name, amount } = tax;
            return {
                amount: {
                    currency: amount?.currencyCode as Maybe<CurrencyEnum>,
                    value: amount?.value,
                },
                label: name,
            };
        }) || null;

    return {
        applied_coupons,
        discounts,
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
        prices: {
            applied_taxes,
            grand_total: {
                currency: grandTotal?.currencyCode as Maybe<CurrencyEnum>,
                value: grandTotal?.value,
            },
            subtotal_excluding_tax: {
                currency: subtotal?.currencyCode as Maybe<CurrencyEnum>,
                value: subtotal?.value,
            },
            subtotal_including_tax: {
                currency: subtotal?.currencyCode as Maybe<CurrencyEnum>,
                value: subtotal?.value,
            },
            subtotal_with_discount_including_tax: {
                value: grandTotal?.value + discountedAmount.value,
                currency: taxTotal?.currencyCode as Maybe<CurrencyEnum>,
            },
            subtotal_with_discount_excluding_tax: {
                value: grandTotal?.value || 0 - taxTotal?.value || 0 + discountedAmount.value,
                currency: taxTotal?.currencyCode as Maybe<CurrencyEnum>,
            },
        },
        billing_address: billingAddress ? getAddress(billingAddress) : null,
        shipping_addresses: getShippingAddresses(shippingConsignments, customerMessage),
        __typename: 'Cart',
    };
};

type AcName = {
    name: string;
};

type BcName = {
    name: string | undefined;
};

const getName = ({ name }: BcName): AcName => {
    return {
        name: name || '',
    };
};

getName({ name: 'Brett' });
