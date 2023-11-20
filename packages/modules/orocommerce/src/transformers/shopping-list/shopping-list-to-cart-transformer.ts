import { Transformer, TransformerContext, logAndThrowError } from '@aligent/utils';
import {
    IncludedProduct,
    IncludedProductImages,
    ShoppingListItem,
    ShoppingListWithItems,
} from '../../types';
import { Cart, CurrencyEnum, Money } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';

const UNDEFINED_CART: Cart = {
    id: '',
    items: [],
    total_quantity: 0,
    available_gift_wrappings: [],
    gift_receipt_included: false,
    is_virtual: false,
    printed_card_included: false,
    shipping_addresses: [],
};

@Injectable()
export class ShoppingListToCartTransformer implements Transformer<ShoppingListWithItems, Cart> {
    isShoppingListItem(
        item: ShoppingListItem | IncludedProduct | IncludedProductImages
    ): item is ShoppingListItem {
        return item.type === 'shoppinglistitems';
    }

    isProduct(
        item: ShoppingListItem | IncludedProduct | IncludedProductImages
    ): item is IncludedProduct {
        return item.type === 'products';
    }

    isProductImage(
        item: ShoppingListItem | IncludedProduct | IncludedProductImages
    ): item is IncludedProductImages {
        return item.type === 'productimages';
    }

    getMoneyData(currency: string, price: string | number): Money {
        return {
            currency: currency as CurrencyEnum,
            value: Number(price),
        };
    }

    transform(context: TransformerContext<ShoppingListWithItems, Cart>): Cart {
        const shoppingList = context.data;
        const cart = { ...UNDEFINED_CART };
        cart.id = shoppingList.data.id;
        cart.total_quantity = shoppingList.included?.length || 0;

        cart.prices = {
            grand_total: {
                currency: shoppingList.data.attributes.currency as CurrencyEnum,
                value: Number(shoppingList.data.attributes.total),
            },
        };

        const shoppingListItems = shoppingList.included?.filter(this.isShoppingListItem);
        const products = shoppingList.included?.filter(this.isProduct);
        const productsImages = shoppingList.included?.filter(this.isProductImage);
        if (!products || !shoppingListItems || !productsImages) {
            return logAndThrowError(
                `Could not find products or shoppingListItems or productsImages included in cart ID: ${cart.id}`
            );
        }

        for (const product of products) {
            const productAttributes = product.attributes;
            const relatedShoppingListItem = shoppingListItems.find(
                (item) => item.relationships?.product.data.id === product.id
            );
            if (!relatedShoppingListItem)
                return logAndThrowError(
                    `Could not find related shopping list item to product id: ${product.id}`
                );

            const productImages = productsImages.find(
                (item) => item.relationships.product.data.id === product.id
            );
            if (!productImages)
                return logAndThrowError(
                    `Could not find related product image to product id: ${product.id}`
                );

            const smallImage = productImages.attributes.files.find(
                (image) => image.dimension === 'product_small'
            );

            const originalImage = productImages.attributes.files.find(
                (image) => image.dimension === 'product_original'
            );

            // This previously was being taken from the shoppinglistitems type
            const price = this.getMoneyData(
                productAttributes.prices[0].currencyId,
                productAttributes.prices[0].price
            );

            cart.items?.push({
                __typename: 'SimpleCartItem',
                id: product.id,
                quantity: relatedShoppingListItem.attributes.quantity,
                uid: btoa(product.id),
                available_gift_wrapping: [],
                customizable_options: [],
                prices: {
                    price,
                    price_including_tax: price,
                    row_total: price,
                    row_total_including_tax: price,
                },
                product: {
                    __typename: 'SimpleProduct',
                    id: Number(product.id),
                    name: productAttributes.name,
                    sku: productAttributes.sku,
                    image: {
                        url: originalImage?.url,
                        label: originalImage?.dimension,
                    },
                    small_image: {
                        url: smallImage?.url,
                        label: smallImage?.dimension,
                    },
                    canonical_url: productAttributes.url,
                    description: productAttributes.description,
                    short_description: productAttributes.shortDescription,
                    meta_description: productAttributes.metaDescription,
                    meta_keyword: productAttributes.metaKeywords,
                    meta_title: productAttributes.metaTitle,
                    redirect_code: 0,
                    price_range: {
                        minimum_price: {
                            final_price: price,
                            regular_price: price,
                            discount: {
                                amount_off: 0, // TODO
                            },
                        },
                        maximum_price: {
                            final_price: price,
                            regular_price: price,
                        },
                    },
                    stock_status: 'IN_STOCK', // Not sure about this, was able to add an out of stock item to the shoppinglist
                    url_key: productAttributes.url,
                    custom_attributes: [],
                    review_count: 0,
                    reviews: { items: [], page_info: {} },
                    rating_summary: 0,
                    staged: false,
                    uid: btoa(product.id),
                },
            });
        }

        return cart;
    }
}
