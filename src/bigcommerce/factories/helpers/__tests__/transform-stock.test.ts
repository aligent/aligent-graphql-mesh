import { getTransformedAvailableStock, getTransformedVariantStockStatus } from '../transform-stock';

describe('transform-stock', () => {
    it(`can return a "IN_STOCK" stock status`, () => {
        expect(
            getTransformedVariantStockStatus(
                {
                    isInStock: true,
                    aggregated: {
                        availableToSell: 2,
                        warningLevel: 5,
                    },
                },
                true
            )
        ).toEqual('IN_STOCK');
    });

    it(`can return a "OUT_OF_STOCK" stock status`, () => {
        expect(
            getTransformedVariantStockStatus({
                isInStock: false,
                aggregated: {
                    availableToSell: 2,
                    warningLevel: 5,
                },
            })
        ).toEqual('OUT_OF_STOCK');

        expect(getTransformedVariantStockStatus(null)).toEqual('OUT_OF_STOCK');
    });

    it(`can return the available product stock`, () => {
        expect(
            getTransformedAvailableStock({
                isInStock: true,
                aggregated: {
                    availableToSell: 2,
                    warningLevel: 5,
                },
            })
        ).toEqual(2);

        expect(
            getTransformedAvailableStock({
                isInStock: true,
                aggregated: {
                    availableToSell: 0,
                    warningLevel: 5,
                },
            })
        ).toEqual(0);
    });

    it(`returns "null" stock if inventory is undefined`, () => {
        expect(getTransformedAvailableStock()).toEqual(null);
    });
});
