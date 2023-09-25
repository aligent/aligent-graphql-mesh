import { Country, Region } from '../../types';

/* istanbul ignore file */
export const getCountriesWithRegions = async (): Promise<[Country[], Region[]]> => {
    const path = `/api/countries?include=regions&page[number]=1&page[size]=250&sort=id`;
    const apiResponse: {data: Country[], included: Region[]} = await this.apiClient.get<{data: Country[], included: Region[]}>(path);
    return [apiResponse.data, apiResponse.included];
};

export const getCountryByCode = async (countryIso2Code: string): Promise<Country> => {
    const path = `/api/countries/${countryIso2Code}`;
    return await this.apiClient.get<Country>(path);
};
