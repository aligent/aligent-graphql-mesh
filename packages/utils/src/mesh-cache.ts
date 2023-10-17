import { AxiosResponse } from 'axios';

// The time we want the cached data to live. 30 minutes
export const TTL_IN_SECONDS: number = 1800;

/**
 * Searches for data in the mesh context cache, otherwise makes a request for
 * the wanted data and stores the response in the cache.
 *
 * @param context
 * @param cacheKey
 * @param query
 */
export const getDataFromMeshCache = async (
    context: GraphQLModules.ModuleContext,
    cacheKey: string,
    query: unknown
): Promise<AxiosResponse['data']> => {
    let response = await context.cache.get(cacheKey);

    if (!response && query) {
        response = await query;

        if (!cacheKey) return response;
        await context.cache.set(cacheKey, response, { ttl: TTL_IN_SECONDS });
    }

    return response;
};
