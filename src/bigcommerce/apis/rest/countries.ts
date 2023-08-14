import { Country, CountryStates } from '../../types';
import { bcGet } from './client';

/* istanbul ignore file */
export const getCountries = async (): Promise<Country[]> => {
    const path = `/v2/countries`;

    const response = await bcGet(path);

    return response;
};

export const getCountriesStates = async (countryResource: string): Promise<CountryStates[]> => {
    const path = `/v2${countryResource}`;

    const response = await bcGet(path);

    return response;
};
