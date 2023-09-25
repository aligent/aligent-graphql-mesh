import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { getCountriesWithRegions } from '../../apis/rest/countries';
import {
    transformCountriesAndRegions,
} from '../../factories/transform-country-data';

export const countriesResolver: QueryResolvers['countries'] = {
    resolve: async (_root, _args, _context, _info) => {
        const [countries, regions] = await getCountriesWithRegions();

        return transformCountriesAndRegions(countries, regions);
    },
};
