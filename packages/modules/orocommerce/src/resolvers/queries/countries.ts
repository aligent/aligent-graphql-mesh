import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CountryClient } from '../../apis/rest/country-client';
import {
    transformCountriesAndRegions,
} from '../../factories/transform-country-data';

export const countriesResolver: QueryResolvers['countries'] = {
    resolve: async (_root, _args, context, _info) => {
        const countryClient: CountryClient = context.injector.get(CountryClient);
        const [oroCountries, oroRegions] = await countryClient.getCountriesWithRegions();
        return transformCountriesAndRegions(oroCountries, oroRegions);
    },
};
