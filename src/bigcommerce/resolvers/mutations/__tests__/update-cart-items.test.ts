import { updateCartItemsResolver } from '../update-cart-items';
import { mockCart } from '../../mocks/cart';
import { updateCartLineItem } from '../../../apis/graphql/cart';
import { getCheckout } from '../../../apis/graphql/checkout';
import { getTransformedCartData } from '../../../factories/transform-cart-data';

jest.mock('../../../apis/graphql/cart');
jest.mock('../../../apis/graphql/checkout');
jest.mock('../../../factories/transform-cart-data');

(updateCartLineItem as jest.Mock).mockResolvedValue({ entityId: mockCart.id });
(getCheckout as jest.Mock).mockResolvedValue({ entityId: mockCart.id });
(getTransformedCartData as jest.Mock).mockReturnValue({ id: mockCart.id });

const root = null;
const info = null;
const bcCustomerId = null;

describe('update-cart-items', () => {
    it('Ensures updateCartItemsResolver can return cart data', async () => {
        /* @ts-expect-error: TS18048: 'updateCartItemsResolver' is possibly 'undefined'.*/
        const result = await updateCartItemsResolver.resolve(
            root,
            {
                input: {
                    cart_id: mockCart.id,
                    cart_items: [
                        {
                            cart_item_uid: mockCart.items[0].uid,
                            quantity: 1,
                        },
                    ],
                },
            },
            { headers: {} },
            info
        );
        expect(updateCartLineItem).toBeCalledWith(
            {
                cartEntityId: mockCart.id,
                lineItemEntityId: 'f84c1f76-8cf0-4543-b4d6-562a9cd56ca6',
                data: { lineItem: { productEntityId: 492, variantEntityId: 513, quantity: 1 } },
            },
            bcCustomerId
        );

        expect(getCheckout).toBeCalledWith(mockCart.id, bcCustomerId);
        expect(getTransformedCartData).toBeCalledWith({ entityId: mockCart.id });
        expect(result).toEqual({
            cart: { id: mockCart.id },
        });
    });

    it(`Throws an error if there's no cart id`, () => {
        expect(async () => {
            /* @ts-expect-error: TS18048: 'updateCartItemsResolver' is possibly 'undefined'.*/
            await updateCartItemsResolver.resolve(
                root,
                {
                    input: {
                        cart_id: null,
                        cart_items: [
                            {
                                cart_item_uid: mockCart.items[0].uid,
                                quantity: 1,
                            },
                        ],
                    },
                },
                { headers: {} },
                info
            );
        }).rejects.toThrow(new Error('Missing update cart information'));
    });

    it(`Throws an error if the cart item quantity is 0`, () => {
        expect(async () => {
            /* @ts-expect-error: TS18048: 'updateCartItemsResolver' is possibly 'undefined'.*/
            await updateCartItemsResolver.resolve(
                root,
                {
                    input: {
                        cart_id: mockCart.id,
                        cart_items: [
                            {
                                cart_item_uid: mockCart.items[0].uid,
                                quantity: 0,
                            },
                        ],
                    },
                },
                { headers: {} },
                info
            );
        }).rejects.toThrow(new Error('Quantity cannot be "0"'));
    });

    it(`Throws an error if the cart item quantity is not defined`, () => {
        expect(async () => {
            /* @ts-expect-error: TS18048: 'updateCartItemsResolver' is possibly 'undefined'.*/
            await updateCartItemsResolver.resolve(
                root,
                {
                    input: {
                        cart_id: mockCart.id,
                        cart_items: [
                            {
                                cart_item_uid: mockCart.items[0].uid,
                                quantity: null,
                            },
                        ],
                    },
                },
                { headers: {} },
                info
            );
        }).rejects.toThrow(new Error('Cart item quantity is incorrect'));
    });

    it(`Returns "null" if the getCheckout query returns no entityId`, async () => {
        (updateCartLineItem as jest.Mock).mockResolvedValue({ entityId: null });
        /* @ts-expect-error: TS18048: 'updateCartItemsResolver' is possibly 'undefined'.*/
        const result = await updateCartItemsResolver.resolve(
            root,
            {
                input: {
                    cart_id: mockCart.id,
                    cart_items: [
                        {
                            cart_item_uid: mockCart.items[0].uid,
                            quantity: 1,
                        },
                    ],
                },
            },
            { headers: {} },
            info
        );

        expect(result).toEqual(null);
    });
});
