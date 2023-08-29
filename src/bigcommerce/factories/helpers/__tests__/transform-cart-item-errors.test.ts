import { getInStockError, getInsufficientStockError } from '../transform-cart-item-errors';

describe('transform-cart-item-errors', () => {
    it('Transforms a insufficient stock error', () => {
        expect(getInsufficientStockError(2, 0)).toEqual({
            __typename: 'CartItemError',
            code: 'ITEM_QTY',
            message: 'The requested qty is not available',
        });
    });

    it(`returns null if there's no stock error`, () => {
        expect(getInsufficientStockError(2, null)).toEqual(null);
    });

    it('Transforms a stock error', () => {
        expect(getInStockError('OUT_OF_STOCK')).toEqual({
            __typename: 'CartItemError',
            code: 'ITEM_QTY',
            message: 'This item is no longer in stock or not currently purchasable',
        });
    });
});
