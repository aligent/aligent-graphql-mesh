import { getFlattenedProducts } from '../products';
import { productsMock } from '../../bigcommerce/resolvers/mocks/products';
import { ConfigurableProduct } from '@mesh';
import { mockFlattenedProducts } from './__data__/mock-products';

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
