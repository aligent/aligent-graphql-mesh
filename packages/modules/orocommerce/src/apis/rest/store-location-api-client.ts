import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { OroStoreLocation } from '../../types/store-location';
import { QueryStoreLocationsArgs } from '@aligent/orocommerce-resolvers';
import { StoreLocationClientArgs } from '../../types/store-location-api-client-args';

@Injectable({
    global: true,
})
export class StoreLocationClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getStoreLocations(_params?: StoreLocationClientArgs): Promise<OroStoreLocation[]> {
        return new Promise((resolve, _) => resolve([]));
    }
}

export class StoreLocationClientArgsBuilder {
    static buildParams(args?: QueryStoreLocationsArgs): StoreLocationClientArgs | undefined {
        if (!args) {
            return;
        }
        const coordinates = args.area?.coordinates;
        const filterCity = args.filters?.city?.eq;
        const filterPostcode = args.filters?.postcode?.eq;
        const sortCityName = args.sort?.city;
        const sortDistance = args.sort?.distance;
        return {
            ...(coordinates?.lat && { lat: coordinates?.lat }),
            ...(coordinates?.lng && { lng: coordinates?.lng }),
            ...(args.area?.radius && { radius: args.area?.radius }),
            ...(args.filters && {
                filters: {
                    ...(filterCity && { city: filterCity }),
                    ...(filterPostcode && { postcode: filterPostcode }),
                },
            }),
            ...(args.sort && {
                sort: {
                    ...(sortCityName && { cityName: sortCityName }),
                    ...(sortDistance && { distance: sortDistance }),
                },
            }),
        };
    }
}
