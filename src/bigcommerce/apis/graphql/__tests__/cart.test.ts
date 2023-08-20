import axios from 'axios';
import { addProductsToCart, createCart, updateCartLineItem } from '../cart';
import { mockBcCart } from '../../../resolvers/mocks/cart.bc';
import {
    addProductsToCartMutation,
    createCartMutation,
    updateCartLineItemQuery,
} from '../requests';
jest.mock('axios');

const bcCustomerId = 10;

const { entityId, productEntityId, variantEntityId } = mockBcCart.lineItems.physicalItems[0];

const mockedAxiosErrorResponse = {
    data: {
        errors: [
            {
                message:
                    'Missing required fields: The request payload is missing required fields: `lineItem.quantity`',
                path: ['cart', 'updateCartLineItem'],
                locations: [{ line: 1, column: 116 }],
            },
        ],
    },
};

const mockedAxiosCreateCartResponse = {
    data: {
        data: { cart: { createCart: { cart: { entityId: mockBcCart.entityId } } } },
    },
};

const createCartMock = () =>
    createCart([
        {
            quantity: 1,
            productEntityId,
            variantEntityId,
        },
    ]);

describe('createCart', () => {
    it(`makes a createCart graphql call through axios`, async () => {
        (axios.post as jest.Mock).mockResolvedValue(mockedAxiosCreateCartResponse);

        expect(await createCartMock()).toEqual({
            entityId: mockBcCart.entityId,
        });

        expect(axios.post).toBeCalledTimes(1);

        expect(axios.post).toBeCalledWith(
            'https://api.bigcommerce.com/stores/abcdefg',
            {
                query: createCartMutation,
                variables: {
                    lineItems: [{ productEntityId: 492, quantity: 1, variantEntityId: 513 }],
                },
            },
            {
                headers: {
                    Authorization: 'Bearer BC_GRAPHQL_TOKEN',
                },
            }
        );
    });

    it(`handles a error from the createCart response`, () => {
        (axios.post as jest.Mock).mockReset();
        (axios.post as jest.Mock).mockResolvedValue(mockedAxiosErrorResponse);

        expect(async () => {
            await createCartMock();
        }).rejects.toThrow(new Error(JSON.stringify(mockedAxiosErrorResponse.data.errors)));
    });
});

const mockedAxiosAddProductsToCartResponse = {
    data: {
        data: { cart: { addCartLineItems: { cart: { entityId: mockBcCart.entityId } } } },
    },
};

const addProductsToCartMock = () =>
    addProductsToCart(mockBcCart.entityId, {
        lineItems: [
            {
                quantity: 1,
                productEntityId,
                variantEntityId,
            },
        ],
    });

describe('addProductsToCart', () => {
    it(`makes a addProductsToCart graphql call through axios`, async () => {
        (axios.post as jest.Mock).mockReset();
        (axios.post as jest.Mock).mockResolvedValue(mockedAxiosAddProductsToCartResponse);

        expect(await addProductsToCartMock()).toEqual({
            entityId: mockBcCart.entityId,
        });

        expect(axios.post).toBeCalledTimes(1);
        expect(axios.post).toBeCalledWith(
            'https://api.bigcommerce.com/stores/abcdefg',
            {
                query: addProductsToCartMutation,
                variables: {
                    cartId: '98bf4b97-14a8-4860-ada3-44a780c24eb4',
                    cartItems: {
                        lineItems: [{ productEntityId: 492, quantity: 1, variantEntityId: 513 }],
                    },
                },
            },
            {
                headers: {
                    Authorization: 'Bearer BC_GRAPHQL_TOKEN',
                },
            }
        );
    });

    it(`handles a error from the addProductsToCart response`, () => {
        (axios.post as jest.Mock).mockReset();
        (axios.post as jest.Mock).mockResolvedValue(mockedAxiosErrorResponse);

        expect(async () => {
            await addProductsToCartMock();
        }).rejects.toThrow(new Error(JSON.stringify(mockedAxiosErrorResponse.data.errors)));
    });
});

const mockedAxiosUpdateCartItemResponse = {
    data: {
        data: { cart: { updateCartLineItem: { cart: { entityId: mockBcCart.entityId } } } },
    },
};

const updateCartLineItemMock = () =>
    updateCartLineItem(
        {
            cartEntityId: mockBcCart.entityId,
            data: {
                lineItem: {
                    quantity: 1,
                    productEntityId,
                    variantEntityId,
                },
            },
            lineItemEntityId: entityId,
        },
        bcCustomerId
    );

describe('updateCartLineItem', () => {
    it(`makes a updateCartLineItem graphql call through axios`, async () => {
        (axios.post as jest.Mock).mockReset();
        (axios.post as jest.Mock).mockResolvedValue(mockedAxiosUpdateCartItemResponse);

        expect(await updateCartLineItemMock()).toEqual({
            entityId: mockBcCart.entityId,
        });

        expect(axios.post).toBeCalledTimes(1);
        expect(axios.post).toBeCalledWith(
            'https://api.bigcommerce.com/stores/abcdefg',
            {
                query: updateCartLineItemQuery,
                variables: {
                    cartEntityId: '98bf4b97-14a8-4860-ada3-44a780c24eb4',
                    data: { lineItem: { productEntityId: 492, quantity: 1, variantEntityId: 513 } },
                    lineItemEntityId: 'df21b1d0-6178-454c-a159-699e80c7d8e0',
                },
            },
            {
                headers: {
                    Authorization: 'Bearer BC_GRAPHQL_TOKEN',
                    'x-bc-customer-id': bcCustomerId,
                },
            }
        );
    });

    it(`handles a error from the updateCartLineItem response`, () => {
        (axios.post as jest.Mock).mockReset();
        (axios.post as jest.Mock).mockResolvedValue(mockedAxiosErrorResponse);

        expect(async () => {
            await updateCartLineItemMock();
        }).rejects.toThrow(new Error(JSON.stringify(mockedAxiosErrorResponse.data.errors)));
    });
});
