import { getCartItemOriginalPrice, getGstPercentBetweenPrices, getIncludesTax } from '../get-tax';

describe('get-tax', () => {
    test('returns true if it taxPriceDisplay is "null", "INC" or "BOTH"', () => {
        expect(getIncludesTax('INC')).toEqual(true);
        expect(getIncludesTax('BOTH')).toEqual(true);
        expect(getIncludesTax()).toEqual(true);
    });

    test('returns false if the taxPriceDisplay is "EX"', () => {
        expect(getIncludesTax('EX')).toEqual(false);
    });
});

describe('getGstPercentBetweenPrices', () => {
    test('returns the gst percent between to prices', () => {
        const listPrice = { value: 30, currencyCode: 'AUD' };
        const salePrice = { value: 27.27, currencyCode: 'AUD' };

        expect(getGstPercentBetweenPrices(listPrice, salePrice)).toEqual(10);
    });

    test('returns 0 if the listPrice equals the salePrice', () => {
        const listPrice = { value: 0, currencyCode: 'AUD' };
        const salePrice = { value: 0, currencyCode: 'AUD' };

        expect(getGstPercentBetweenPrices(listPrice, salePrice)).toEqual(0);
    });
});

describe('getCartItemOriginalPrice', () => {
    test('Return a original cart price according to the gst amount', () => {
        expect(getCartItemOriginalPrice(70, 10)).toEqual(63.63636363636363);
        expect(getCartItemOriginalPrice(70, 0)).toEqual(70);
    });
});
