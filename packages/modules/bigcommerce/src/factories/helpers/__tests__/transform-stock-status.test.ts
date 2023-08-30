import { getTransformedAvailabilityStatus } from '../transform-stock-status';

describe('transform-stock-status', () => {
    it(`transforms a in bc "Available" stock status to "IN_STOCK"`, () => {
        expect(getTransformedAvailabilityStatus({ status: 'Available' })).toEqual('IN_STOCK');
    });

    it(`transforms "OUT_OF_STOCK" for "Unavailable" or nullish items`, () => {
        expect(getTransformedAvailabilityStatus({ status: 'Unavailable' })).toEqual('OUT_OF_STOCK');
        expect(getTransformedAvailabilityStatus({ status: undefined })).toEqual('OUT_OF_STOCK');
        expect(getTransformedAvailabilityStatus()).toEqual('OUT_OF_STOCK');
    });
});
