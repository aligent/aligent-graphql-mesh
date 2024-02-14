import { Transformer, TransformerContext, logAndThrowError, btoa } from '@aligent/utils';
import { ShoppingListWithItems, Product as OroProduct } from '../../types';
import {
    Cart,
    CurrencyEnum,
    Money,
    SimpleCartItem,
    CartItemError,
} from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';
import {
    isShoppingListItem,
    isProduct,
    isProductImage,
    isProductCategory,
} from '../../utils/type-predicates';
import { UNDEFINED_CART } from './constants';
import { ProductsTransformer } from '../../transformers';

@Injectable({
    global: true,
})
export class ShoppingListToCartTransformer implements Transformer<ShoppingListWithItems, Cart> {
    constructor(protected productsTransformer: ProductsTransformer) {}
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
        cart.total_quantity = 0;

        const currency = shoppingList.data.attributes.currency as string;
        cart.prices = {
            grand_total: this.getMoneyData(currency, Number(shoppingList.data.attributes.total)),
            applied_taxes: [
                // TODO taxes
                {
                    amount: {
                        currency: 'AUD',
                        value: 0,
                    },
                    label: 'Tax description',
                },
            ],
            subtotal_including_tax: {
                currency: 'AUD',
                value: 0,
            },
        };
        // cart.free_shipping_details = free_shipping_details -> TODO
        // ...CheckoutCartFragment @include(if: $isInCheckout -> TODO

        const shoppingListItems = shoppingList.included?.filter(isShoppingListItem);
        const products = shoppingList.included?.filter(isProduct);
        const productsImages = shoppingList.included?.filter(isProductImage);
        const productsCategories = shoppingList.included?.filter(isProductCategory);
        if (!products || !shoppingListItems) {
            return logAndThrowError(
                `Could not find products or shoppingListItems included in cart ID: ${cart.id}`
            );
        }

        const items: SimpleCartItem[] = [];
        for (const product of products) {
            const baseProduct: OroProduct = {
                ...product,
                included: [...(productsImages ?? []), ...(productsCategories ?? [])],
                links: { self: product.links.self },
            };

            const errorMessage: CartItemError[] | null = null;
            const relatedShoppingListItem = shoppingListItems.find(
                (item) => item.relationships?.product.data.id === product.id
            );
            const itemShoppingListId =
                relatedShoppingListItem?.relationships?.shoppingList?.data.id;
            if (itemShoppingListId !== shoppingList.data.id) continue;
            if (!relatedShoppingListItem) {
                return logAndThrowError(
                    `Related ShoppingListItem not found for product: ${product.id} this data is required`
                );
            }

            const currency = relatedShoppingListItem.attributes.currency as string;
            const price = this.getMoneyData(
                currency,
                Number(relatedShoppingListItem.attributes.value)
            );

            //const productAttributes = product.attributes;
            const quantity = relatedShoppingListItem.attributes.quantity;

            items.push({
                __typename: 'SimpleCartItem',
                id: product.id,
                quantity: quantity,
                uid: btoa(product.id),
                available_gift_wrapping: [],
                customizable_options: [],
                prices: {
                    price,
                    price_including_tax: price,
                    row_total: price,
                    row_total_including_tax: price,
                },
                errors: errorMessage,
                product: this.productsTransformer.getTransformedProductData(baseProduct),
            });

            cart.total_quantity += quantity;
        }

        cart.items = items;

        return cart;
    }
}
