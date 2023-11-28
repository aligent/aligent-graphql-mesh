import 'reflect-metadata';
import { ProductsTransformer } from '../products-data-transformer';
import { oroProducts, outputProducts } from './__data__/product-data';
import { Product as OroProduct } from '../../../types';

describe('Product data transformation tests', () => {
    test('Check whether the transformed product data has the expected format', () => {
        oroProducts.forEach((oroProduct) => {
            const productsTransformer = new ProductsTransformer();
            expect(
                productsTransformer.getTransformedProductData(oroProduct as OroProduct)
            ).toStrictEqual(outputProducts.find((product) => String(product.id) === oroProduct.id));
        });
    });
});
