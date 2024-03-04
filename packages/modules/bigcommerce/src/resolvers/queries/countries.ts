import { Country, QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getAllStates, getCountries } from '../../apis/rest/countries';
import { transformCountriesAndStates } from '../../factories/transform-countries-data';
import { getDataFromMeshCache } from '../../utils/mesh-cache';
import { CACHE_KEY__COUNTRIES } from '../../constants';

export const countriesResolver: QueryResolvers['countries'] = {
    resolve: async (_root, _args, context, _info) => {
        return retrieveCountriesFromCache(context);
    },
};

export const retrieveCountriesFromCache = async (
    context: GraphQLModules.ModuleContext
): Promise<Country[]> => {
    const query = async () => {
        const [countries, states] = await Promise.all([getCountries(), getAllStates(1)]);

        return transformCountriesAndStates(countries, states);
    };

    return getDataFromMeshCache(context, CACHE_KEY__COUNTRIES, query);
};
