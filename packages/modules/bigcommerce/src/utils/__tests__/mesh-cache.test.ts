import { getDataFromMeshCache } from '../mesh-cache';
import { CACHE_KEY__STORE_CONFIG, CACHE_ITEMS_TTL, CACHE_KEY__COUNTRIES } from '../../constants';

const cache: {
    [key: string]: string;
} = {
    [CACHE_KEY__STORE_CONFIG]: 'cached data',
};

const getCache = jest.fn().mockImplementation(async (cacheKey: string): Promise<unknown> => {
    return cache[cacheKey];
});

const setCache = jest.fn().mockImplementation(async (cacheKey, response): Promise<unknown> => {
    return (cache[cacheKey] = response);
});

const getInjectorMock = jest.fn().mockImplementation(async (): Promise<unknown> => {
    return {
        cacheItemsTtl: CACHE_ITEMS_TTL,
    };
});

const mockContext = {
    cache: {
        get: getCache,
        set: setCache,
    },
    injector: {
        get: getInjectorMock,
    },
};

/* Need to mock out ModuleConfig to avoid complaints in the bitbucket pipelines that getSdk isn't defined */
jest.mock('../../providers/index.ts', () => {
    return { ModuleConfig: jest.fn() };
});

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
            CACHE_KEY__STORE_CONFIG,
            query
        );

        const expectedResponse = cache[CACHE_KEY__STORE_CONFIG];

        expect(dataFromCache).toBe(expectedResponse);
        expect(getCache).toBeCalledWith(CACHE_KEY__STORE_CONFIG);
    });

    it(`can get fresh data when cached data doesn't exist`, async () => {
        const dataFromCache = await getDataFromMeshCache(
            mockContext as unknown as GraphQLModules.ModuleContext,
            CACHE_KEY__COUNTRIES,
            query
        );

        const expectedCacheKey = CACHE_KEY__COUNTRIES;
        const expectedDataToBeSet = 'fresh data';
        const expectedCacheTtl = CACHE_ITEMS_TTL[CACHE_KEY__COUNTRIES];

        expect(dataFromCache).toBe(expectedDataToBeSet);
        expect(setCache).toBeCalledWith(expectedCacheKey, expectedDataToBeSet, expectedCacheTtl);
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
