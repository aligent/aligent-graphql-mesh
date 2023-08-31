import { getTransformedAvailableStock, getTransformedVariantStockStatus } from '../transform-stock';

describe('transform-stock', () => {
    it(`can return a "IN_STOCK" stock status`, () => {
        const inventory = {
            isInStock: true,
            aggregated: {
                availableToSell: 2,
                warningLevel: 5,
            },
        };

        const isPurchasable = true;

        const transformedVariantStockStatus = getTransformedVariantStockStatus(
            inventory,
            isPurchasable
        );

        const expectedResult = 'IN_STOCK';

        expect(transformedVariantStockStatus).toEqual(expectedResult);
    });

    it(`can return a "OUT_OF_STOCK" stock status`, () => {
        const inventory = {
            isInStock: true,
            aggregated: {
                availableToSell: 2,
                warningLevel: 5,
            },
        };

        const isPurchasable = false;

        const transformedVariantStockStatus = getTransformedVariantStockStatus(
            inventory,
            isPurchasable
        );

        const expectedResult = 'OUT_OF_STOCK';

        expect(transformedVariantStockStatus).toEqual(expectedResult);

        expect(getTransformedVariantStockStatus(null)).toEqual('OUT_OF_STOCK');
    });

    it(`can return the available product stock`, () => {
        const inventory = {
            isInStock: true,
            aggregated: {
                availableToSell: 2,
                warningLevel: 5,
            },
        };

        const availableStock = getTransformedAvailableStock(inventory);

        const expectedResult = 2;

        expect(availableStock).toEqual(expectedResult);
    });

    it(`will return 0 if "availableToSell" is 0`, () => {
        const inventory = {
            isInStock: true,
            aggregated: {
                availableToSell: 0,
                warningLevel: 5,
            },
        };

        const availableStock = getTransformedAvailableStock(inventory);

        const expectedResult = 0;

        expect(availableStock).toEqual(expectedResult);
    });

    it(`returns "null" stock if inventory is undefined`, () => {
        expect(getTransformedAvailableStock()).toEqual(null);
    });
});
