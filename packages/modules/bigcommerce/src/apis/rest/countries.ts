import { BcState, Country, CustomerAddressValidated } from '../../types';
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

export const getAllStatesByCountryId = async (countryId: number): Promise<BcState[]> => {
    const path = `${COUNTRIES_API}/${countryId}/states`;
    const response = await bcGet(path);
    return response;
};

export const getStateByAddress = async (address: CustomerAddressValidated): Promise<BcState> => {
    //if the frontend only provides the region id, we need to get the state from the api to get the full name
    const country = await getCountryByCode(address.country_code);
    if (address.region?.region_id) {
        const state = await getStateByCountryIdAndStateId(country.id, address.region.region_id);
        return state;
    }
    //if the user's address is not Australian or American (and potentially some other countries), the front end
    //returns a string, we can attempt to find the region_id here by comparing strings
    const states = await getAllStatesByCountryId(country.id);
    const defaultState = {
        id: null,
        state: address.region.region,
        state_abbreviation: '',
        country_id: country.id,
    };
    const state =
        states?.length > 0
            ? states.find(
                  (state) => state.state.toLowerCase() === address.region.region.toLowerCase()
              )
            : defaultState;
    return state || defaultState;
};

export const getStateByCountryIdAndStateId = async (
    countryId: number,
    stateId: number
): Promise<BcState> => {
    const path = `${COUNTRIES_API}/${countryId}/states/${stateId}`;
    const response = await bcGet(path);
    return response;
};
