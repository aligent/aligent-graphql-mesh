import { mockBcProducts } from '../../../resolvers/mocks/products.bc';
import { getTransformedPrice } from '../transform-price';

describe('transform-price', () => {
    it('Transforms a BC price to a AC price structure', () => {
        expect(getTransformedPrice(mockBcProducts[0].prices.basePrice)).toEqual({
            currency: 'AUD',
            value: 50,
        });
    });

    it('values defaults to 0 if no price is defined', () => {
        expect(
            getTransformedPrice({
                currencyCode: 'AUD',
                value: null,
            })
        ).toEqual({
            currency: 'AUD',
            value: 0,
        });
    });
});
