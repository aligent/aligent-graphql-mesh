import 'reflect-metadata';

import { getShoppingListsWithItems, shoppingListItem } from './__data__/shopping-list-data';
import { ProductsTransformer, ShoppingListToCartTransformer } from '../../../transformers';

import { CurrencyEnum, Money } from '@aligent/orocommerce-resolvers';
import { btoa } from '@aligent/utils';

describe('Shopping List to Cart transformation tests', () => {
    const cartTransformer = new ShoppingListToCartTransformer(new ProductsTransformer());

    const shoppingListWithItems = getShoppingListsWithItems();

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

        expect(cart.total_quantity).toStrictEqual(1);

        for (const index in cart.items!) {
            const shoppingListItemPrice: Money = {
                currency: shoppingListItem.attributes.currency as CurrencyEnum,
                value: Number(shoppingListItem.attributes.value),
            };

            expect(cart.items[index]!).toStrictEqual({
                __typename: 'SimpleCartItem',
                id: '21',
                uid: btoa('21'),
                quantity: shoppingListItem.attributes.quantity,
                available_gift_wrapping: [],
                customizable_options: [],
                prices: {
                    price: shoppingListItemPrice,
                    price_including_tax: shoppingListItemPrice,
                    row_total: shoppingListItemPrice,
                    row_total_including_tax: shoppingListItemPrice,
                },
                errors: [],
                product: {
                    __typename: 'SimpleProduct',
                    redirect_code: 0,
                    price_range: {
                        minimum_price: {
                            discount: {
                                amount_off: 0,
                            },
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
                    uid: btoa('21'), //btoa(shoppingListItem.id),

                    short_description: {
                        html: '',
                    },
                    sku: '1637228',
                    stock_status: 'IN_STOCK',
                    url_key: '/pb-blasterr-blaster-air-tool-lubricant-16oz',
                    canonical_url: '/pb-blasterr-blaster-air-tool-lubricant-16oz',
                    categories: [
                        {
                            __typename: 'CategoryTree',
                            description: String({ html: '' }),
                            id: 10,
                            image: undefined,
                            level: 1,
                            name: 'Chemicals',
                            redirect_code: 0,
                            staged: true,
                            uid: 'eyJpZCI6IjEwIiwidHlwZSI6Im1hc3RlcmNhdGFsb2djYXRlZ29yaWVzIiwid2ViY2F0YWxvZ0lkIjoiMTAifQ==',
                            url_path: '/chemicals',
                        },
                    ],
                    description: { html: '' },
                    id: 21,
                    meta_description: '',
                    meta_keyword: '',
                    meta_title: '',
                    name: 'PB Blaster® Blaster Air Tool Lubricant 16oz',
                    image: {
                        label: 'PB Blaster® Blaster Air Tool Lubricant 16oz',
                        url: '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/119/65b70923765c4378008006-659e53a8366b2160675969-DV_WebLarge_I_1637228.jpg',
                    },

                    small_image: {
                        label: 'PB Blaster® Blaster Air Tool Lubricant 16oz',
                        url: '/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/119/65b70923765c4378008006-659e53a8366b2160675969-DV_WebLarge_I_1637228.jpg',
                    },
                },
            });
        }
    });
});
