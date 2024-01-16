import 'reflect-metadata';
import { CategoriesTransformer, CategoriesTransformerChain } from '../categories-transformer';
import { inputCategories, outputCategories } from './__data__/categories-data';

describe('Oro categories data transformation tests', () => {
    test('Check whether the transformed categories contains expected data', () => {
        const chain = new CategoriesTransformerChain();
        chain.addTransformer(new CategoriesTransformer());
        expect(chain.transform({ data: inputCategories })).toStrictEqual(outputCategories);
    });
});
