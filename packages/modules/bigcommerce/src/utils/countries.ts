import { Country, Region } from '@aligent/bigcommerce-resolvers';
import { CustomerAddressValidated } from '../types';

/**
 * Finds a country by country code from an array of countries data
 *
 * @param countries - countries data retrieved from the "retrieveCountriesFromCache" method
 * @param countryCode - The country code
 *
 * Usage:
 * gets countries data from "retrieveCountriesFromCache" and pass to getCountryByCountryCode
 * along with the countryCode e.g. "AU"
 *
 * import { retrieveCountriesFromCache } from '../queries/countries';
 *
 * const countriesData = await retrieveCountriesFromCache(context);
 * const state = getCountryStateByAddressInput(countriesData, input);
 */
export const getCountryByCountryCode = (
    countries: Country[],
    countryCode: string
): Country | null => {
    const country =
        countries?.find((country) => country.two_letter_abbreviation === countryCode) || null;

    return country;
};

/**
/**
 * Gets a country by name from the countries and state retrieved via the
 * "retrieveCountriesAndStatesFromCache".
 *
 * usage:
 * gets countries data from "retrieveCountriesFromCache" and pass to getCountryByCountryCode
 * along with the countryCode e.g. "AU"
 *
 * import { retrieveCountriesFromCache } from '../queries/countries';
 *
 * const countriesData = await retrieveCountriesFromCache(context);
 * const state = getCountryByName(countriesData, "Australia");
 *
 * @param countries
 * @param countryName
 */
export const getCountryByName = (countries: Country[], countryName: string): Country | null => {
    const country =
        countries?.find(
            (country) => country.full_name_english?.toLowerCase() === countryName?.toLowerCase()
        ) || null;

    return country;
};

/**
 * Gets a countries state information by address input. Used when
 * creating or updating an address
 *
 * @param countries - countries data retrieved from the "retrieveCountriesFromCache" method
 * @param address - use address input
 *
 * Usage:
 * gets countries data from "retrieveCountriesFromCache" and pass to getCountryStateByAddressInput
 * along with address input.
 *
 * import { retrieveCountriesFromCache } from '../queries/countries';
 *
 * const countriesData = await retrieveCountriesFromCache(context);
 * const state = getCountryStateByAddressInput(countriesData, input);
 */
export const getCountryStateByAddressInput = (
    countries: Country[],
    address: CustomerAddressValidated
): Region | null => {
    const { country_code, region: regionObject } = address;
    const { region_id, region: regionName } = regionObject || {};
    const country = getCountryByCountryCode(countries, country_code);

    const defaultState = {
        id: null,
        name: regionName,
        country_id: country?.id,
    };

    const state = country?.available_regions?.find((region) => {
        const isMatchingId = region?.id === region_id;

        //if the user's address is not Australian or American (and potentially some other countries), the front end
        //returns a string, we can attempt to find the region_id here by comparing strings
        const isMatchingName = region?.name === regionName;

        return isMatchingId || isMatchingName;
    });

    return state || defaultState;
};
