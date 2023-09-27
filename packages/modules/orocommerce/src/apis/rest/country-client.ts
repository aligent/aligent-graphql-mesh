import { Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import {Country, Customer, Region} from '../../types';

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
        const apiResponse = await this.apiClient.get<{data: Country[], included: Region[]}>(path, {params});
        return apiResponse; //[apiResponse.data, apiResponse.included];
    }
}

export const getCountriesWithRegions = async (page?: number): Promise<[Country[], Region[]]> => {
    const path = `/api/countries?include=regions&page[number]=1&page[size]=250&sort=id`;
    const apiResponse: {data: Country[], included: Region[]} = await this.apiClient.get<{data: Country[], included: Region[]}>(path);
    return [apiResponse.data, apiResponse.included];
};

export const getCountryByCode = async (countryIso2Code: string): Promise<Country> => {
    const path = `/api/countries/${countryIso2Code}`;
    return await this.apiClient.get<Country>(path);
};
