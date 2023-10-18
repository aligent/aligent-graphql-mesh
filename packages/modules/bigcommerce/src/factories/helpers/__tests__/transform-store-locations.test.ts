import {
    mockedAcStoreLocationsArgument,
    mockedBcStoreLocations,
} from '../../../resolvers/mocks/store-locations';
import {
    getTransformedStoreLocationsArgs,
    getTransformedStoreLocationItems,
} from '../../transform-store-locations';

const expectBcArgs = {
    distanceFilter: {
        latitude: -34.962192,
        longitude: 138.638024,
        radius: 20,
        lengthUnit: 'Kilometres',
    },
};

const expectAcStoreLocations = {
    items: [
        {
            city: 'Adelaide',
            distance: undefined,
            email: '',
            id: 1,
            latitude: -34.92396,
            longitude: 138.610467,
            name: 'Aligent BC address 1',
            phone: '',
            pickup_location_code: 'BC-ADDRESS-1',
            postcode: '5000',
            street: 'L2/212 Pirie St',
        },
    ],
};

describe('transform store locations', () => {
    it(`transforms args`, async () => {
        expect(
            await getTransformedStoreLocationsArgs(mockedAcStoreLocationsArgument, 'mockedToken')
        ).toEqual(expect.objectContaining(expectBcArgs));
    });

    it(`transforms locations`, () => {
        expect(getTransformedStoreLocationItems(mockedBcStoreLocations)).toEqual(
            expectAcStoreLocations
        );
    });
});
