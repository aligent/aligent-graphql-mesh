import { Cart, CartSelectedMultipleChoiceOption } from '@aligent/bigcommerce-operations';
import { CartItemInterface, CurrencyEnum, Maybe, ProductInterface } from '@aligent/bigcommerce-resolvers';
import {
    btoa,
    createCartItemUid,
    getCartItemOriginalPrice,
    getGstPercentBetweenPrices,
    getNewUrl,
} from '@aligent/utils';
import { getTransformedPrice } from './transform-price';
import { getTransformedCartItemErrors } from './transform-cart-item-errors';

export const getTransformCartItems = (
    cartItems?: Maybe<Cart>,
    additionalCartItemData?: Array<ProductInterface>
): Maybe<Array<Maybe<CartItemInterface>>> => {
    if (!cartItems?.lineItems) return null;

    return cartItems.lineItems.physicalItems.map((item) => {
        const {
            name,
            sku,
            url,
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
            // "originalPrice" is the default price plus gst
            originalPrice: originalPriceIncGst, // RRP price
            quantity,
            selectedOptions,
            imageUrl,
        } = item;

        const matchingEnrichedData = additionalCartItemData?.find((enrichedItem) => {
            return enrichedItem.sku === sku;
        });

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

        /* Big Commerce doesn't provide a lot of good ways to get the applied gst, so we need to work it
         * out between the list and sale price */
        const gstPercentage = getGstPercentBetweenPrices(listPrice, salePrice);

        /* The "originalPrice" value will depend on tax configuration in the admin and if it should display
         * as including or excluding gst.
         * Admin > Settings > Tax > Tax Rules > Tax rates and zones > {zone} Edit settings >
         * [Display prices inclusive of tax, Display prices exclusive of tax]
         * */
        const originalPrice = getCartItemOriginalPrice(originalPriceIncGst.value, gstPercentage);

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
                id: variantEntityId,
                uid: btoa(String(variantEntityId)),
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
                            amount_off: originalPrice - salePrice.value,
                        },
                        final_price: getTransformedPrice(salePrice),
                        regular_price: getTransformedPrice(originalPriceIncGst),
                    },
                },
                rating_summary: 0,
                review_count: 0,
                url_key: getNewUrl(url).pathname?.replace(/\//g, ''),
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
                __typename: 'ConfigurableProduct',
            },
            quantity: quantity,
            configurable_options,
            __typename: 'ConfigurableCartItem',
        };
    });
};
