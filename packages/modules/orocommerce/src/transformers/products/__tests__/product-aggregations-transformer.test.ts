import 'reflect-metadata';
import { oroProductAttributesFromAPI, outputProductFilters } from './__data__/product-aggregations';
import { ProductsTransformer } from '../products-data-transformer';

describe('Product filters transformation tests', () => {
    test('Check whether the transformed aggregations data has the expected format', () => {
        const productsTransformer = new ProductsTransformer();

        expect(
            productsTransformer.getTransformedProductAggregations(oroProductAttributesFromAPI)
        ).toStrictEqual(outputProductFilters);
    });
});
