import { Transformer, TransformerContext } from '@aligent/utils';
import { ShoppingListItem, ShoppingListWithItems } from '../../types';
import { Cart, CurrencyEnum, Money, SimpleCartItem } from '@aligent/orocommerce-resolvers';

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

export class ShoppingListToCartTransformer implements Transformer<ShoppingListWithItems, Cart> {
    transform(context: TransformerContext<ShoppingListWithItems, Cart>): Cart {
        const shoppingList = context.data;
        const cart = { ...UNDEFINED_CART };
        cart.id = shoppingList.data.id;
        cart.total_quantity = shoppingList.included.length || 0;
        //TODO: split items into a sub-resolver?
        cart.items = shoppingList.included.map((item: ShoppingListItem): SimpleCartItem => {
            // Can this also be a ConfigurableCartItem?
            const prodPrice: Money = {
                currency: item.attributes.currency as CurrencyEnum,
                value: Number(item.attributes.value),
            };
            return {
                id: item.id,
                uid: btoa(item.id),
                quantity: item.attributes.quantity,
                available_gift_wrapping: [],
                customizable_options: [],
                prices: {
                    price: prodPrice,
                    price_including_tax: prodPrice,
                    row_total: prodPrice,
                    row_total_including_tax: prodPrice,
                },
                product: {
                    redirect_code: 0,
                    price_range: {
                        minimum_price: {
                            final_price: prodPrice,
                            regular_price: prodPrice,
                        },
                        maximum_price: {
                            final_price: prodPrice,
                            regular_price: prodPrice,
                        },
                    },
                    custom_attributes: [],
                    review_count: 0,
                    reviews: { items: [], page_info: {} },
                    rating_summary: 0,
                    staged: false,
                    uid: btoa(item.id),
                },
            };
        });
        cart.prices = {
            grand_total: {
                currency: shoppingList.data.attributes.currency as CurrencyEnum,
                value: Number(shoppingList.data.attributes.total),
            },
        };
        return cart;
    }
}
