import { mockBcProducts } from '../../../resolvers/mocks/products.bc';
import { getTransformedPrice } from '../transform-price';

describe('transform-price', () => {
    it('Transforms a BC price to a AC price structure', () => {
        expect(getTransformedPrice(mockBcProducts[0].prices.basePrice)).toEqual({
            currency: 'AUD',
            value: 57,
        });
    });
});
