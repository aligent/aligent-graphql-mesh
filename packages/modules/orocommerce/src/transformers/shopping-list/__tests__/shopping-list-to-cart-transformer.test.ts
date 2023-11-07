import { getOroMockOrderLineItems } from './__data__/order-line-items-data';
import { ShoppingListToCartTransformer } from '../shopping-list-to-cart-transformer';
import { OrderLineItemToShoppingListItemTransformer } from '../order-line-item-to-shopping-list-item-transformer';
import { OrderLineItemsToNewShoppingListTransformer } from '../order-line-items-to-new-shopping-list-transformer';
import { CurrencyEnum, Money } from '@aligent/orocommerce-resolvers';
import { btoa } from '@aligent/utils';

describe('Shopping List to Cart transformation tests', () => {
    const orderLineItems = getOroMockOrderLineItems();

    const cartTransformer = new ShoppingListToCartTransformer();
    const lineItemTransformer = new OrderLineItemToShoppingListItemTransformer();

    const shoppingListWithItems = new OrderLineItemsToNewShoppingListTransformer(
        lineItemTransformer
    ).transform({
        data: {
            newShoppingList: { default: true, name: 'New Shopping List', notes: null },
            orderLineItems: orderLineItems,
        },
    });

    const cart = cartTransformer.transform({ data: shoppingListWithItems });

    test('Check whether the cart contains expected data', () => {
        expect(cart.id).toStrictEqual(shoppingListWithItems.data.id);

        expect(cart.available_gift_wrappings).toStrictEqual([]);
        expect(cart.gift_receipt_included).toStrictEqual(false);
        expect(cart.is_virtual).toStrictEqual(false);
        expect(cart.printed_card_included).toStrictEqual(false);
        expect(cart.shipping_addresses).toStrictEqual([]);

        expect(cart.prices?.grand_total).toStrictEqual({
            currency: shoppingListWithItems.data.attributes.currency as CurrencyEnum,
            value: Number(shoppingListWithItems.data.attributes.total),
        });

        expect(cart.total_quantity).toStrictEqual(shoppingListWithItems.included.length);

        for (const index in cart.items!) {
            const shoppingListItem = shoppingListWithItems.included[index];

            const shoppingListItemPrice: Money = {
                currency: shoppingListItem.attributes.currency as CurrencyEnum,
                value: Number(shoppingListItem.attributes.value),
            };

            expect(cart.items[index]!).toStrictEqual({
                __typename: 'SimpleCartItem',
                id: shoppingListItem.id,
                uid: btoa(shoppingListItem.id),
                quantity: shoppingListItem.attributes.quantity,
                available_gift_wrapping: [],
                customizable_options: [],
                prices: {
                    price: shoppingListItemPrice,
                    price_including_tax: shoppingListItemPrice,
                    row_total: shoppingListItemPrice,
                    row_total_including_tax: shoppingListItemPrice,
                },
                product: {
                    __typename: 'SimpleProduct',
                    redirect_code: 0,
                    price_range: {
                        minimum_price: {
                            final_price: shoppingListItemPrice,
                            regular_price: shoppingListItemPrice,
                        },
                        maximum_price: {
                            final_price: shoppingListItemPrice,
                            regular_price: shoppingListItemPrice,
                        },
                    },
                    custom_attributes: [],
                    review_count: 0,
                    reviews: { items: [], page_info: {} },
                    rating_summary: 0,
                    staged: false,
                    uid: btoa(shoppingListItem.id),
                },
            });
        }
    });
});
