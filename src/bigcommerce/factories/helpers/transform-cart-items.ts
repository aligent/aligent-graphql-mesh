import { BC_Cart, BC_CartSelectedMultipleChoiceOption } from '@mesh/external/BigCommerceGraphqlApi';

import { CartItemInterface, CurrencyEnum, Maybe } from '@mesh';
import { btoa, getGstPercentBetweenPrices, getNewUrl } from '../../../utils';
import { getTransformedPrice } from './transform-price';

export const getTransformCartItems = (
    cartItems?: Maybe<BC_Cart>
): Maybe<Array<Maybe<CartItemInterface>>> => {
    if (!cartItems?.lineItems) return null;

    return cartItems.lineItems.physicalItems.map((item) => {
        const {
            name,
            sku,
            url,
            entityId, // cart item id
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

        const configurable_options = selectedOptions.map((option) => {
            const { entityId, name, value, valueEntityId } =
                option as BC_CartSelectedMultipleChoiceOption;
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

        const gstAmount = getGstPercentBetweenPrices(listPrice, salePrice);

        /* The include or exclude value of the "originalPrice" will depend on tax configuration in the admin.
         * Admin > Settings > Tax > Tax Rules > Tax rates and zones > {zone} Edit settings >
         * [Display prices inclusive of tax, Display prices exclusive of tax]
         * */
        const originalPrice = originalPriceIncGst.value / (1 + gstAmount / 100);

        return {
            id: entityId, // cart item id
            uid: btoa(entityId),
            errors: null,
            prices: {
                /* "Price" this should depend on excluding and include tax admin configurable */
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
                id: variantEntityId,
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
                            amount_off: originalPrice - salePrice.value,
                        },
                        final_price: getTransformedPrice(salePrice),
                        regular_price: getTransformedPrice(originalPriceIncGst),
                    },
                },
                rating_summary: 0,
                review_count: 0,
                stock_status: 'IN_STOCK', // @todo if required might need more data from another product api
                url_key: getNewUrl(url).pathname,
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
