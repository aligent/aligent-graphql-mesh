import { AxiosResponse } from 'axios';
import * as xray from 'aws-xray-sdk';
import { ModuleConfig } from '../providers';
import { CACHE_ITEMS_TTL } from '../constants';

// The time we want the cached data to live. 30 minutes
export const DEFAULT_TTL_IN_MILLI_SECONDS = 1800000;
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
 *
 * usage:
 * const uninvokedQuery = () => getStoreConfigs(context);
 * const dataFromCache = await getDataFromMeshCache(context, "store-config", uninvokedQuery);
 *
 */
export const getDataFromMeshCache = async <T>(
    context: GraphQLModules.ModuleContext,
    cacheKey: string,
    query: () => Promise<T>
): Promise<AxiosResponse<T>['data']> => {
    const ns = xray.getNamespace();

    // The getSegment function does not know if it's a segment or a subsegment
    // Subsegments do not contain trace ids and we need the trace id
    // We know this will be the Mesh Segment, therefore not a subsegment
    const parentSegment = xray.getSegment() as xray.Segment | undefined;

    const cachedData = await ns.runAndReturn(async () => {
        // By passing the trace id and the parent segment it should link the two segments
        const segment = new xray.Segment('Cache', parentSegment?.trace_id, parentSegment?.id);
        xray.setSegment(segment);
        segment?.addAnnotation('cacheKey', cacheKey);

        const data = await xray.captureAsyncFunc(
            'getCache',
            async (subSegment) => {
                subSegment?.addAnnotation('cacheKey', cacheKey);

                const cacheData = await context.cache.get(cacheKey);
                subSegment?.close();
                return cacheData;
            },
            segment
        );
        segment.close();
        return data;
    });

    if (cachedData) return cachedData;

    const response = await query();

    if (!cacheKey) return response;

    await ns.runAndReturn(async () => {
        // By passing the trace id and the parent segment it should link the two segments
        const segment = new xray.Segment('Cache', parentSegment?.trace_id, parentSegment?.id);
        xray.setSegment(segment);
        segment?.addAnnotation('cacheKey', cacheKey);

        const ttl = getCacheItemTtl(context, cacheKey);

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
        segment.close();

        if (ENABLE_CACHE_LOGGING) {
            logCachingTimesMessage(cacheKey, ttl);
        }
    });

    return response;
};

/**
 * Gets the defined TTL (time to live) value for a cache item. TTL's can be set on the mesh "context"
 * objects and adjust on a per product level. Go to "application.ts" to see where these are added.
 * If a TTL isn't defined in the "context" object we check if one has been defined in "constants.ts".
 * If not defined TTL's can be found then we default to a global fallback value.
 *
 * @param context - The Graphql module context instance.
 * @param cacheKey - The key which the query response should be cached under in the context.cache
 */
export const getCacheItemTtl = (
    context: GraphQLModules.ModuleContext,
    cacheKey: string
): number => {
    // Cache keys will be defined with underscores "_" and if used as a prefix then anything that follows
    // will begin with a hyphen "-". e.g. "categories-58"
    const [cacheKeyPrefix] = cacheKey.split('-');

    // If a valid TTL is in the module's configuration, return it
    const ttlInContext = context.injector.get(ModuleConfig).cacheItemsTtl?.[cacheKeyPrefix];
    if (ttlInContext) {
        return ttlInContext;
    }

    // If a valid TTL is in the hardcoded constants, return it as a fallback
    if (cacheKeyPrefix in CACHE_ITEMS_TTL) {
        const ttlInConstants = CACHE_ITEMS_TTL[cacheKeyPrefix as keyof typeof CACHE_ITEMS_TTL];

        return ttlInConstants;
    }

    // If no valid TTL can be found, fall back to the global default
    return DEFAULT_TTL_IN_MILLI_SECONDS;
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
