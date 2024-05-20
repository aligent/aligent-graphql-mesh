import { mockBcCart } from '../../../resolvers/mocks/cart.bc';
import { getTransformCartItems } from '../transform-cart-items';
import { ProductInterface } from '@aligent/bigcommerce-resolvers';
import { mockFlattenedProducts, transformedCartItems } from './__data__/transform-cart-items-data';

describe('transform-cart-items', () => {
    it(`transforms cart item`, () => {
        expect(
            getTransformCartItems(mockBcCart, mockFlattenedProducts as Array<ProductInterface>)
        ).toEqual(expect.objectContaining(transformedCartItems));
    });

    it(`returns "null" if there's no cart`, () => {
        expect(getTransformCartItems(null)).toBe(null);
    });
});
