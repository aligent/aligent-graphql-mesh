import { getFlattenedProducts } from '../products';
import { productsMock } from '../../resolvers/mocks/products';
import { ConfigurableProduct } from '@aligent/bigcommerce-resolvers';
import { mockFlattenedProducts } from '../../../../../utils/__tests__/__data__/mock-products';

describe('products', () => {
    it('Flattens variants as separate array items', () => {
        expect(getFlattenedProducts(productsMock as { items: Array<ConfigurableProduct> })).toEqual(
            mockFlattenedProducts
        );
    });

    it('Returns an empty array if there are no products', () => {
        expect(getFlattenedProducts(null)).toEqual([]);
        expect(getFlattenedProducts({ items: [null] })).toEqual([]);
    });
});
