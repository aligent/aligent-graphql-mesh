import { Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import {Country, Region} from '../../types';

/* istanbul ignore file */
@Injectable()
export class CountryClient {
    protected apiClient: ApiClient;
    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    async getCountriesWithRegions(): Promise<[Country[], Region[]]> {
        const path = `/api/countries`;
        const params = {
            include: 'regions',
            page: {
                number: 1,
                size: 250
            },
            sort: 'id'
        };
        return this.apiClient.get<{data: Country[], included: Region[]}>(path, {params});
    }
}
