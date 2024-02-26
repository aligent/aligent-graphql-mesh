import 'reflect-metadata';

import {
    StoreLocationsTransformer,
    StoreLocationsTransformerChain,
} from '../store-locations-transformer';
import { getMockOroStoreLocations } from './__data__/store-locations-data';

describe('Store Locations data transformation tests', () => {
    const mockLocations = getMockOroStoreLocations();

    const chain = new StoreLocationsTransformerChain();
    chain.addTransformer(new StoreLocationsTransformer());
    const output = chain.transform({ data: mockLocations });

    test('Check whether the transformed locations contains expected data', () => {
        expect(output.page_info).toStrictEqual(undefined);
        expect(output.total_count).toStrictEqual(mockLocations.length);
        expect(output.__typename).toStrictEqual('StoreLocations');

        for (const storeIndex in output.items) {
            const transformedStore = output.items[storeIndex];
            const mockOroStore = mockLocations[Number(storeIndex)].attributes;

            expect(transformedStore.__typename).toStrictEqual('StoreLocation');

            expect(transformedStore.city).toStrictEqual(mockOroStore.city);
            expect(transformedStore.contact_name).toStrictEqual(mockOroStore.contact_name);
            expect(transformedStore.country_id).toStrictEqual(mockOroStore.country_id);
            expect(transformedStore.description).toStrictEqual(mockOroStore.description);
            expect(transformedStore.distance).toStrictEqual(mockOroStore.distance);
            expect(transformedStore.email).toStrictEqual(mockOroStore.email);
            expect(transformedStore.fax).toStrictEqual(mockOroStore.fax);
            expect(transformedStore.latitude).toStrictEqual(mockOroStore.latitude);
            expect(transformedStore.longitude).toStrictEqual(mockOroStore.longitude);
            expect(transformedStore.name).toStrictEqual(mockOroStore.name);
            expect(transformedStore.phone).toStrictEqual(mockOroStore.phone);
            expect(transformedStore.pickup_location_code).toStrictEqual(
                mockOroStore.pickup_location_code
            );
            expect(transformedStore.postcode).toStrictEqual(mockOroStore.postcode);
            expect(transformedStore.region).toStrictEqual(mockOroStore.region);
            expect(transformedStore.region_id).toStrictEqual(mockOroStore.region_id);
            expect(transformedStore.street).toStrictEqual(mockOroStore.street);
        }
    });
});
