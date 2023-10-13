import { getTransformedCategoryData } from '../categories-transformer';
import { inputCategories, outputCategories } from './__data__/categories-data';

describe('Key Messages data transformation tests', () => {
    test('Check whether the transformed messages contains expected data', () => {
        expect(getTransformedCategoryData(inputCategories)).toStrictEqual(outputCategories);
    });
});
