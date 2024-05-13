import { getTransformedStoreLocationsArgs } from '../../../../bigcommerce/src/factories/transform-store-locations';
import {
    bcStoreAvailability,
    bcStoreAvailabilityArgs,
    bcStoreLocationsWithDistance,
    storeAvailabilityArgs,
    storeAvailabilityData,
} from './__data__/store-availability';
import { getTransformedStoreAvailabilityData } from '../transform-store-availability';

const customerImpersonationToken = 'customerImpersonationToken';

describe('transform-store-availability-data', () => {
    test('transform AC args to BC', async () => {
        const transformed = await getTransformedStoreLocationsArgs(
            storeAvailabilityArgs,
            customerImpersonationToken
        );

        expect(bcStoreAvailabilityArgs).toEqual(transformed);
    });

    test('transform BC store locations and product availability to AC', () => {
        const transformed = getTransformedStoreAvailabilityData(
            bcStoreAvailability,
            bcStoreLocationsWithDistance
        );

        expect(storeAvailabilityData).toEqual(transformed);
    });
});
