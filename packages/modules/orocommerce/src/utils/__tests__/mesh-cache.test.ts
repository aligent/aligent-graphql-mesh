import { getDataFromMeshCache, TTL_IN_SECONDS } from '../mesh-cache';

const cache: {
    [key: string]: string;
} = {
    data: 'cached data',
};

const getCache = jest.fn().mockImplementation(async (cacheKey: string): Promise<unknown> => {
    return cache[cacheKey];
});

const setCache = jest.fn().mockImplementation(async (cacheKey, response): Promise<unknown> => {
    return (cache[cacheKey] = response);
});

const mockContext = {
    cache: {
        get: getCache,
        set: setCache,
    },
};

/* This is the query to be performed if no cached data exists*/
const query = () =>
    new Promise((resolve) => {
        resolve('fresh data');
    });

describe('mesh-cache', () => {
    afterEach(() => {
        setCache.mockClear();
    });

    it(`Can retrieve data from the cache`, async () => {
        const dataFromCache = await getDataFromMeshCache(
            mockContext as unknown as GraphQLModules.ModuleContext,
            'data',
            query
        );

        const expectedResponse = cache.data;

        expect(dataFromCache).toBe(expectedResponse);
        expect(getCache).toBeCalledTimes(1);
    });

    it(`can get fresh data when cached data doesn't exist`, async () => {
        const dataFromCache = await getDataFromMeshCache(
            mockContext as unknown as GraphQLModules.ModuleContext,
            'no_cached_data_key',
            query
        );

        const expectedResponse = 'fresh data';

        expect(dataFromCache).toBe(expectedResponse);
        expect(setCache).toBeCalledWith('no_cached_data_key', 'fresh data', TTL_IN_SECONDS);
    });

    it(`Does not attempt to set new query data if there's no cache key`, async () => {
        const dataFromCache = await getDataFromMeshCache(
            mockContext as unknown as GraphQLModules.ModuleContext,
            '',
            query
        );

        const expectedResponse = 'fresh data';

        expect(dataFromCache).toBe(expectedResponse);
        expect(setCache).not.toBeCalled();
    });
});
