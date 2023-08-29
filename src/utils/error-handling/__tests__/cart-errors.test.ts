import { handleCartItemErrors } from '../cart-errors';

describe('cart-errors', () => {
    test(`Can throw an error that a item doesn't have enough stock`, () => {
        const errors = [
            {
                message:
                    "Not enough stock: Item (76331ce2-ba7e-4d89-9e41-550f45ef6edc) Mona Pullover Hoodlie is out of stock and can't be added to the cart.",
                path: ['cart', 'updateCartLineItem'],
                locations: [{ line: 1, column: 116 }],
            },
        ];

        const thrownError = () => handleCartItemErrors(errors);

        expect(thrownError).toThrow(new Error('Not enough stock'));
    });

    test(`Can throw an error that a item is no longer purchasable`, () => {
        const errors = [
            {
                message: 'Not Found: The requested item is no longer available in the cart',
                path: ['cart', 'addCartLineItems'],
                locations: [{ line: 1, column: 87 }],
            },
        ];

        const thrownError = () => handleCartItemErrors(errors);

        expect(thrownError).toThrow(new Error('Item is not purchasable'));
    });
});
