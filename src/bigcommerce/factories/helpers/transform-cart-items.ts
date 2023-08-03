import {
    BC_Cart,
    BC_CartSelectedMultipleChoiceOption,
    CartItemInterface,
    CurrencyEnum,
    Maybe,
} from '../../../meshrc/.mesh';
import { btoa, getNewUrl } from '../../../utils';
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
            discounts,
            extendedListPrice,
            salePrice,
            originalPrice, // RRP price
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

        return {
            id: entityId, // cart item id
            uid: btoa(entityId),
            errors: null,
            prices: {
                price: getTransformedPrice(salePrice),
                price_including_tax: getTransformedPrice(salePrice),
                // @todo need a away to work out inc/ex gst
                row_total: getTransformedPrice(extendedListPrice),
                row_total_including_tax: getTransformedPrice(extendedListPrice),
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
                        final_price: getTransformedPrice(salePrice),
                        regular_price: getTransformedPrice(originalPrice),
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
                // __typename: 'ConfigurableProduct',
            },
            quantity: quantity,
            configurable_options,
            __typename: 'ConfigurableCartItem',
        };
    });
};
