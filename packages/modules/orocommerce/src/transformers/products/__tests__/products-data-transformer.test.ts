import 'reflect-metadata';
import { ProductsTransformer, CategoriesTransformer } from '../../../transformers';
import { oroProducts } from './__data__/product-data-input';
import { outputProducts } from './__data__/product-data-output';
import { Product as OroProduct } from '../../../types';

describe('Product data transformation tests', () => {
    test('Check whether the transformed product data has the expected format', () => {
        oroProducts.forEach((oroProduct) => {
            const productsTransformer = new ProductsTransformer(new CategoriesTransformer());
            expect(
                productsTransformer.getTransformedProductData(oroProduct as OroProduct)
            ).toStrictEqual(outputProducts.find((product) => String(product.id) === oroProduct.id));
        });
    });
});
