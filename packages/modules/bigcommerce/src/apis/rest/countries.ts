import { BcState, Country } from '../../types';
import { bcGet } from './client';

const COUNTRIES_API = `/v2/countries`;

/* istanbul ignore file */
export const getCountries = async (): Promise<Country[]> => {
    const path = `/v2/countries?limit=250`;

    const response = await bcGet(path);

    return response;
};

export const getCountryByCode = async (countryIso2Code: string): Promise<Country> => {
    const path = `${COUNTRIES_API}?country_iso2=${countryIso2Code}`;
    const response = await bcGet(path);
    return response[0];
};

export const getAllStates = async (page: number, states: BcState[] = []): Promise<BcState[]> => {
    const path = page
        ? `/v2/countries/states?limit=250&page=${page}`
        : `/v2/countries/states?limit=250&page=1`;

    const response = await bcGet(path);
    const newResponse = states.concat(response);
    if (response !== '') {
        page++;
        return getAllStates(page, newResponse);
    }
    return states;
};

export const getStateByCountryIdAndStateId = async (
    countryId: number,
    stateId: number
): Promise<BcState> => {
    const path = `${COUNTRIES_API}/${countryId}/states/${stateId}`;
    const response = await bcGet(path);
    return response;
};
