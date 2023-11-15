import 'reflect-metadata';
import { UpdateProductToCartTransformer } from '../../shopping-list/update-product-to-cart-transfomer';

describe('Update product item to cart transformation tests', () => {
    test('Returns update item Args transformed into ORO Shopping list items format', () => {
        const updateProductItemToCartArgs = {
            quantity: 20,
            cartItemId: '123',
        };

        const expectedTransformedArgs = {
            type: 'shoppinglistitems',
            id: '123',
            attributes: {
                quantity: 20,
            },
        };

        const updateProductToCartTransformer: UpdateProductToCartTransformer =
            new UpdateProductToCartTransformer();
        const transformedUpdateProductItem = updateProductToCartTransformer.transform({
            data: updateProductItemToCartArgs,
        });

        expect(transformedUpdateProductItem).toEqual(expectedTransformedArgs);
    });
});
