import { AxiosResponse } from 'axios';
import * as xray from 'aws-xray-sdk';

// The time we want the cached data to live. 30 minutes
export const TTL_IN_MILLI_SECONDS = 1800000;

/**
 * Searches for data in the mesh context cache, otherwise makes a request for
 * the wanted data and stores the response in the cache.
 *
 * @param context - The Graphql module context instance.
 * @param cacheKey - The key which the query response should be cached under in the context.cache
 * @param query - The query to be invoked should the corresponding response not be stored
 *                in the cache. This is required to an arrow function, so it can hold the
 *                arguments without being invoked. e.g. "() => myFunction(arg1: "arg", arg2: true)"
 *
 * usage:
 * const uninvokedQuery = () => getStoreConfigs(context);
 * const dataFromCache = await getDataFromMeshCache(context, "store-config", uninvokedQuery);
 *
 */
export const getDataFromMeshCache = async (
    context: GraphQLModules.ModuleContext,
    cacheKey: string,
    query: () => Promise<unknown>
): Promise<AxiosResponse['data']> => {
    let response = await xray.captureAsyncFunc('getCache', async (segment) => {
        segment?.addAnnotation('cacheKey', cacheKey);

        const cacheData = await context.cache.get(cacheKey);
        segment?.close(undefined, true); // Set as remote
        return cacheData;
    });

    if (!response && query) {
        response = await query();

        if (!cacheKey) return response;

        await xray.captureAsyncFunc('setCache', async (segment) => {
            segment?.addAnnotation('cacheKey', cacheKey);

            const cacheData = await context.cache.set(cacheKey, response, TTL_IN_MILLI_SECONDS);
            segment?.close(undefined, true); // Set as remote
            return cacheData;
        });
    }

    return response;
};
