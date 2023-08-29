import { getInStockError, getInsufficientStockError } from '../transform-cart-item-errors';

describe('transform-cart-item-errors', () => {
    it('Transforms a insufficient stock error', () => {
        const insufficientStockError = getInsufficientStockError(2, 0);

        const expectedResult = {
            __typename: 'CartItemError',
            code: 'ITEM_QTY',
            message: 'The requested qty is not available',
        };

        expect(insufficientStockError).toEqual(expectedResult);
    });

    it(`returns null if there's no stock error`, () => {
        const insufficientStockError = getInsufficientStockError(2, null);

        const expectedResult = null;

        expect(insufficientStockError).toEqual(expectedResult);
    });

    it('Transforms a stock error', () => {
        const inStockError = getInStockError('OUT_OF_STOCK');

        const expectedResult = {
            __typename: 'CartItemError',
            code: 'ITEM_QTY',
            message: 'This item is no longer in stock or not currently purchasable',
        };

        expect(inStockError).toEqual(expectedResult);
    });
});
