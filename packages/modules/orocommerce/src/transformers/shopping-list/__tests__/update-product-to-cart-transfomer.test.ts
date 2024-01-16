import 'reflect-metadata';
import { UpdateCartItemTransformer } from '../update-cart-item-transformer';

describe('Update cart item transformation tests', () => {
    test('Returns update cart item Args transformed into ORO Shopping list cart item format', () => {
        const updatedCartItemArgs = {
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

        const updateCartItemTransformer: UpdateCartItemTransformer =
            new UpdateCartItemTransformer();
        const transformedUpdateProductItem = updateCartItemTransformer.transform({
            data: updatedCartItemArgs,
        });

        expect(transformedUpdateProductItem).toEqual(expectedTransformedArgs);
    });
});
