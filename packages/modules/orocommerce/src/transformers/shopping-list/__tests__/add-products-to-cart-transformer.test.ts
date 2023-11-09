import 'reflect-metadata';
import { AddProductsToCartTransformer } from '../../shopping-list/add-products-to-cart-transformer';

describe('Adding products to cart transformation tests', () => {
    test('Returns AddProductsToCart Args transformed into ORO Shopping list items format', () => {
        const addProductsToCartArgs = {
            cartId: '75',
            cartItems: [
                {
                    quantity: 2,
                    sku: 'KAPRDBWK8MMPP',
                    uid: 'UHJvZHVjdDo4',
                },
            ],
            isInCheckout: false,
        };

        const expectedTransformedArgs = [
            {
                type: 'shoppinglistitems',
                attributes: {
                    quantity: 2,
                },
                relationships: {
                    product: {
                        data: {
                            type: 'products',
                            id: '8',
                        },
                    },
                    unit: {
                        data: {
                            type: 'productunits',
                            id: 'each',
                        },
                    },
                },
            },
        ];

        const addProductsToCartTransformer: AddProductsToCartTransformer =
            new AddProductsToCartTransformer();
        const transformedAddProductsToCartArgs = addProductsToCartTransformer.transform({
            data: addProductsToCartArgs.cartItems,
        });

        expect(transformedAddProductsToCartArgs).toStrictEqual(expectedTransformedArgs);
    });
});
