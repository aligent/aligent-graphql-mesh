import { mockCountries } from "../mocks/countries";

export const countriesResolver = {
    resolve: () => {
        return mockCountries;
    },
};
