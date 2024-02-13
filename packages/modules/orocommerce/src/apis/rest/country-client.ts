import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { Country, Region } from '../../types';
@Injectable({
    global: true,
})
export class CountryClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getCountriesWithRegions(): Promise<{ data: Country[]; included?: Region[] }> {
        const path = `/countries`;
        const params = {
            include: 'regions',
            page: {
                number: 1,
                size: 250,
            },
            sort: 'id',
        };
        return this.apiClient.get<Country[], Region[]>(path, { params });
    }
}
