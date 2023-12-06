import 'reflect-metadata';

import { StoreConfigTransformer } from '../store-config-transformer';
import { transformedStoreConfig } from './__data__/store-config-transformed-data';
import { getMockOroStoreConfig } from './__data__/oro-store-config-data';

describe('Store Config data transform tests', () => {
    test('return transformed Store Config', () => {
        const storeConfigTransformer: StoreConfigTransformer = new StoreConfigTransformer();
        const transformed = storeConfigTransformer.transform({ data: getMockOroStoreConfig() });
        expect(transformed).toEqual(transformedStoreConfig);
    });
});
