import { AxiosResponse } from 'axios';
import * as xray from 'aws-xray-sdk';

// The time we want the cached data to live. 30 minutes
export const TTL_IN_MILLI_SECONDS = 1800000;
const ENABLE_CACHE_LOGGING = !!Number(process.env.DEBUG);

/**
 * Searches for data in the mesh context cache, otherwise makes a request for
 * the wanted data and stores the response in the cache.
 *
 * @param context - The Graphql module context instance.
 * @param cacheKey - The key which the query response should be cached under in the context.cache
 * @param query - The query to be invoked should the corresponding response not be stored
 *                in the cache. This is required to an arrow function, so it can hold the
 *                arguments without being invoked. e.g. "() => myFunction(arg1: "arg", arg2: true)"
 * @param {{ttl: number}} config - 'ttl' is a number representing time-to-live in milliseconds
 *
 * usage:
 * const uninvokedQuery = () => getStoreConfigs(context);
 * const dataFromCache = await getDataFromMeshCache(context, "store-config", uninvokedQuery);
 *
 */
export const getDataFromMeshCache = async (
    context: GraphQLModules.ModuleContext,
    cacheKey: string,
    query: () => Promise<unknown>,
    config?: { ttl?: number | string }
): Promise<AxiosResponse['data']> => {
    const segment = new xray.Segment('Cache');
    const ns = xray.getNamespace();

    return ns.runAndReturn(async () => {
        xray.setSegment(segment);

        let response = await xray.captureAsyncFunc(
            'getCache',
            async (subSegment) => {
                subSegment?.addAnnotation('cacheKey', cacheKey);

                const cacheData = await context.cache.get(cacheKey);
                subSegment?.close();
                return cacheData;
            },
            segment
        );

        if (!response && query) {
            response = await query();

            if (!cacheKey) return response;

            const ttl =
                config?.ttl && !!Number(config.ttl) ? Number(config.ttl) : TTL_IN_MILLI_SECONDS;

            await xray.captureAsyncFunc(
                'setCache',
                async (subSegment) => {
                    subSegment?.addAnnotation('cacheKey', cacheKey);

                    const cacheData = await context.cache.set(cacheKey, response, ttl);
                    subSegment?.close();
                    return cacheData;
                },
                segment
            );

            if (ENABLE_CACHE_LOGGING) {
                logCachingTimesMessage(cacheKey, ttl);
            }
        }
        segment.close();

        return response;
    });
};

/**
 * Logs a message to the terminal at what time a cached item is set and set to expiry.
 * e.g. "categories-23" cached on "28/02/2024, 10:04:05 am" and set to expire on "28/02/2024, 10:14:05 am"
 *
 * @param cacheKey
 * @param ttl
 */
const logCachingTimesMessage = (cacheKey: string, ttl: number) => {
    const currentTime = new Date();

    const expiryTime = new Date(currentTime.getTime() + ttl);

    console.info(
        `CACHE ITEM: "${cacheKey}" cached on "${currentTime.toLocaleString()}" and set to expire on "${expiryTime.toLocaleString()}"`
    );
};
