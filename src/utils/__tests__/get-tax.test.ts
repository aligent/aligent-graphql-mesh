import { getIncludesTax } from '../get-tax';

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
