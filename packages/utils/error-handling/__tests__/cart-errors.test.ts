import { getCartUserErrors } from '../index';

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

        const thrownError = () => getCartUserErrors(errors, true);

        expect(thrownError).toThrow(new Error('The requested qty is not available'));
    });

    test(`Can throw an error that a item can one longer be purchased online`, () => {
        const errors = [
            {
                message:
                    'Product is not purchasable: The following product cannot be ordered online, so we could not proceed with the checkout: [Sample] Dustpan & Brush',
                path: ['cart', 'addCartLineItems'],
                locations: [{ line: 1, column: 87 }],
            },
        ];

        const thrownError = () => getCartUserErrors(errors, true);

        expect(thrownError).toThrow(new Error('Some of the products can not be ordered online'));
    });

    test(`Can throw an error that a item is no longer available`, () => {
        const errors = [
            {
                message: 'Not Found: The requested item is no longer available in the cart',
                path: ['cart', 'addCartLineItems'],
                locations: [{ line: 1, column: 87 }],
            },
        ];

        const thrownError = () => getCartUserErrors(errors, true);

        expect(thrownError).toThrow(new Error('Some of the products are no longer available'));
    });

    test(`Can return user_errors that a item doesn't have enough stock`, () => {
        const errors = [
            {
                message:
                    "Not enough stock: Item (76331ce2-ba7e-4d89-9e41-550f45ef6edc) Mona Pullover Hoodlie is out of stock and can't be added to the cart.",
                path: ['cart', 'updateCartLineItem'],
                locations: [{ line: 1, column: 116 }],
            },
        ];
        const userErrors = getCartUserErrors(errors);

        const expectedResponse = [
            {
                code: 'INSUFFICIENT_STOCK',
                message: 'The requested qty is not available',
                path: ['cart', 'updateCartLineItem'],
            },
        ];

        expect(userErrors).toEqual(expectedResponse);
    });

    test(`Can return user_errors that a item  can one longer be purchased online`, () => {
        const errors = [
            {
                message:
                    'Product is not purchasable: The following product cannot be ordered online, so we could not proceed with the checkout: [Sample] Dustpan & Brush',
                path: ['cart', 'addCartLineItems'],
                locations: [{ line: 1, column: 87 }],
            },
        ];

        const userErrors = getCartUserErrors(errors);
        const expectedResponse = [
            {
                code: 'NOT_SALABLE',
                message: 'Some of the products can not be ordered online',
                path: ['cart', 'addCartLineItems'],
            },
        ];

        expect(userErrors).toEqual(expectedResponse);
    });

    test(`Can return user_errors that a item is no longer available`, () => {
        const errors = [
            {
                message: 'Not Found: The requested item is no longer available in the cart',
                path: ['cart', 'addCartLineItems'],
                locations: [{ line: 1, column: 87 }],
            },
        ];
        const userErrors = getCartUserErrors(errors);
        const expectedResponse = [
            {
                code: 'PRODUCT_NOT_FOUND',
                message: 'Some of the products are no longer available',
                path: ['cart', 'addCartLineItems'],
            },
        ];

        expect(userErrors).toEqual(expectedResponse);
    });
});
