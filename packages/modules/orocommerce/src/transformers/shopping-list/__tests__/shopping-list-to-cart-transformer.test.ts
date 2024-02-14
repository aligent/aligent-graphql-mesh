import 'reflect-metadata';

import { getShoppingListsWithItems, shoppingListItem } from './__data__/shopping-list-data';
import {
    CategoriesTransformer,
    ProductsTransformer,
    ShoppingListToCartTransformer,
} from '../../../transformers';

import { CurrencyEnum, Money } from '@aligent/orocommerce-resolvers';
import { btoa } from '@aligent/utils';

describe('Shopping List to Cart transformation tests', () => {
    const cartTransformer = new ShoppingListToCartTransformer(
        new ProductsTransformer(new CategoriesTransformer())
    );

    const shoppingListWithItems = getShoppingListsWithItems();

    const cart = cartTransformer.transform({ data: shoppingListWithItems });
    console.log('CART: ', cart);

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
                    price: null,
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
                    price_tiers: [],
                    custom_attributes: [],
                    review_count: 0,
                    reviews: {
                        __typename: 'ProductReviews',
                        items: [],
                        page_info: {
                            current_page: 0,
                            page_size: 0,
                            total_pages: 0,
                        },
                    },
                    rating_summary: 0,
                    related_products: null,
                    staged: true,
                    uid: btoa('21'), //btoa(shoppingListItem.id),
                    sku: '1637228',
                    stock_status: 'IN_STOCK',
                    type: 'PRODUCT',
                    url_key: 'pb-blasterr-blaster-air-tool-lubricant-16oz',
                    url_suffix: '',
                    categories: [
                        {
                            __typename: 'CategoryTree',
                            description: '',
                            created_at: '2024-01-15T06:30:15Z',
                            id: 10,
                            image: null,
                            level: 2,
                            name: 'Chemicals',
                            meta_description: '',
                            meta_keywords: '',
                            meta_title: '',
                            redirect_code: 0,
                            staged: true,
                            uid: 'eyJpZCI6IjEwIiwidHlwZSI6Im1hc3RlcmNhdGFsb2djYXRlZ29yaWVzIn0=',
                            url_path: '/chemicals',
                            type: 'CATEGORY',
                        },
                    ],
                    description: { html: '', __typename: 'ComplexTextValue' },
                    id: 21,
                    meta_description: '',
                    meta_keyword: '',
                    meta_title: '',
                    name: 'PB Blaster® Blaster Air Tool Lubricant 16oz',
                    image: {
                        label: 'PB Blaster® Blaster Air Tool Lubricant 16oz',
                        url: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/119/65b70923765c4378008006-659e53a8366b2160675969-DV_WebLarge_I_1637228.jpg',
                    },
                    small_image: {
                        label: 'PB Blaster® Blaster Air Tool Lubricant 16oz',
                        url: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/119/65b70923765c4378008006-659e53a8366b2160675969-DV_WebLarge_I_1637228.jpg',
                    },
                    media_gallery_entries: [
                        {
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/119/65b70923765c4378008006-659e53a8366b2160675969-DV_WebLarge_I_1637228.jpg',
                            id: 36,
                            label: 'product_original',
                            position: 1,
                            uid: 'aWQ6MzUtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_gallery_popup/098f408deb471e628613685fa97b1968/119/65b70923765c4378008006-659e53a8366b2160675969-DV_WebLarge_I_1637228.jpg',
                            id: 37,
                            label: 'product_gallery_popup',
                            position: 2,
                            uid: 'aWQ6MzUtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9wb3B1cA==',
                        },
                        {
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_gallery_main/cfd646b508e8eaf0ad3fa52d426f48a6/119/65b70923765c4378008006-659e53a8366b2160675969-DV_WebLarge_I_1637228.jpg',
                            id: 38,
                            label: 'product_gallerymain',
                            position: 3,
                            uid: 'aWQ6MzUtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeW1haW4=',
                        },
                        {
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_large/484cb95e4abcb58ccab27f13d1a6188b/119/65b70923765c4378008006-659e53a8366b2160675969-DV_WebLarge_I_1637228.jpg',
                            id: 39,
                            label: 'product_large',
                            position: 4,
                            uid: 'aWQ6MzUtZGltZW5zaW9uOnByb2R1Y3RfbGFyZ2U=',
                        },
                        {
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_extra_large/611b34cf36199f7491b40a557dad14a9/119/65b70923765c4378008006-659e53a8366b2160675969-DV_WebLarge_I_1637228.jpg',
                            id: 40,
                            label: 'product_extra_large',
                            position: 5,
                            uid: 'aWQ6MzUtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_medium/c3f301e68dee27d69af5c17c4acfe7ea/119/65b70923765c4378008006-659e53a8366b2160675969-DV_WebLarge_I_1637228.jpg',
                            id: 41,
                            label: 'product_medium',
                            position: 6,
                            uid: 'aWQ6MzUtZGltZW5zaW9uOnByb2R1Y3RfbWVkaXVt',
                        },
                        {
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/119/65b70923765c4378008006-659e53a8366b2160675969-DV_WebLarge_I_1637228.jpg',
                            id: 42,
                            label: 'product_small',
                            position: 7,
                            uid: 'aWQ6MzUtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                    ],
                },
            });
        }
    });
});
