import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CountryClient } from '../../apis/rest/country-client';
import { CountryTransformer } from '../../transformers/country/country-transformer';

export const countriesResolver: QueryResolvers['countries'] = {
    resolve: async (_root, _args, context, _info) => {
        const countryClient: CountryClient = context.injector.get(CountryClient);
        const getCountriesResponse = await countryClient.getCountriesWithRegions()
        const oroCountries = getCountriesResponse.data;
        const oroRegions = getCountriesResponse.included;

        const countryTransformer: CountryTransformer = context.injector.get(CountryTransformer);
        return countryTransformer.transform(oroCountries, oroRegions);
    },
};
