import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getAllStates, getCountries } from '../../apis/rest/countries';
import { transformCountriesAndStates } from '../../factories/transform-countries-data';
import { getDataFromMeshCache } from '../../utils/mesh-cache';
import { CACHE_KEY__COUNTRIES } from '../../constants';

/* istanbul ignore next */
export const countriesResolver: QueryResolvers['countries'] = {
    resolve: async (_root, _args, context, _info) => {
        const [countries, states] = await retrieveCountriesAndStatesFromCache(context);

        return transformCountriesAndStates(countries, states);
    },
};

export const retrieveCountriesAndStatesFromCache = async (
    context: GraphQLModules.ModuleContext
) => {
    const query = () => Promise.all([getCountries(), getAllStates(1)]);

    return getDataFromMeshCache(context, CACHE_KEY__COUNTRIES, query);
};
