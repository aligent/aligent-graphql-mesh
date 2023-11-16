import 'reflect-metadata';
import { getTransformedProductAggregations } from '../product-aggregations-transformer';
import { oroProductAttributes, outputProductFilers } from './__data__/product-aggregations';

describe('Product filters transformation tests', () => {
    test('Check whether the transformed aggregations data has the expected format', () => {
        expect(getTransformedProductAggregations(oroProductAttributes)).toStrictEqual(
            outputProductFilers
        );
    });
});
