import { Cart, CartSelectedMultipleChoiceOption } from '@aligent/bigcommerce-operations';
import {
    CartItemInterface,
    CurrencyEnum,
    Maybe,
    ProductInterface,
} from '@aligent/bigcommerce-resolvers';
import { AxiosGraphqlError, createCartItemUid } from '@aligent/utils';
import { getTransformedPrice } from './transform-price';
import { getTransformedCartItemErrors } from './transform-cart-item-errors';

export const getTransformCartItems = (
    cartItems?: Maybe<Cart>,
    additionalCartItemData?: Array<ProductInterface>
): Maybe<Array<Maybe<CartItemInterface>>> => {
    if (!cartItems?.lineItems) return null;

    return cartItems.lineItems.physicalItems.map((item) => {
        const {
            sku,
            entityId: cartItemId, // cart item id
            productEntityId,
            variantEntityId,
            discounts,
            // This is the item final price including tax
            listPrice,
            // This is the accumulated items final price including tax
            extendedListPrice,
            // This is the item final price including or excluding gst depending on admin configuration
            salePrice,
            // This is the accumulated items final price including or excluding gst depending on admin configuration
            extendedSalePrice,
            quantity,
            selectedOptions,
        } = item;

        const matchingEnrichedData = additionalCartItemData?.find((enrichedItem) => {
            return enrichedItem.sku === sku;
        });

        if (!matchingEnrichedData) {
            throw new AxiosGraphqlError(`Missing additional data for product ${sku}`);
        }

        const configurable_options = selectedOptions.map((option) => {
            const { entityId, name, value, valueEntityId } =
                option as CartSelectedMultipleChoiceOption;
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

        const cartItemUid = createCartItemUid(cartItemId, productEntityId, variantEntityId);
        return {
            id: cartItemId, // cart item id
            uid: cartItemUid,
            errors: getTransformedCartItemErrors(
                quantity,
                matchingEnrichedData?.stock_status,
                matchingEnrichedData?.only_x_left_in_stock
            ),
            prices: {
                /* "Price" this will depend on excluding or including tax admin configurable */
                price: getTransformedPrice(salePrice),
                /* At the moment Take Flight is configured to only output the "price_including_tax" when it should be
                 * outputting the "price", which is dependent on the admin config wanting to out including or excluding gst prices*/
                price_including_tax: getTransformedPrice(listPrice),
                // The value of the price multiplied by the "price"
                row_total: getTransformedPrice(extendedSalePrice),
                row_total_including_tax: getTransformedPrice(extendedListPrice),
                total_item_discount,
            },
            product: {
                ...matchingEnrichedData,
                __typename: 'SimpleProduct',
            },
            quantity: quantity,
            configurable_options,
            __typename: 'ConfigurableCartItem',
        };
    });
};
