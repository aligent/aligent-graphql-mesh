import { QueryResolvers } from "../../../meshrc/.mesh";
import { mockCountries } from "../mocks/countries";

export const countriesResolver: QueryResolvers['countries'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockCountries;
    },
};
