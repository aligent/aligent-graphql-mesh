import { transformCurrency } from '../transform-currency-data';
import { oroCurrency } from './__data__/currency-input-data';
import { transformedCurrency } from './__data__/currency-transformed-data';
describe('Currency data transform tests', () => {
    test('return transformed currency', () => {
        const transformed = transformCurrency(oroCurrency);
        expect(transformed).toEqual(transformedCurrency);
    });
});
