import 'reflect-metadata';
import { getTransformedSmallImage, getTransformedMediaGalleryEntries } from '../images-transformer';
import { ProductsTransformer } from '../products-data-transformer';
import { oroProducts, outputProducts } from './__data__/product-data';
import { outputImages } from './__data__/product-images';

describe('Product images data transformation tests', () => {
    test('Check whether the transformed listing images have the expected format', () => {
        oroProducts.forEach((product) => {
            expect(getTransformedSmallImage(product)).toStrictEqual(
                outputImages.find((image) => image.product_id === product.id)?.small_image
            );
        });
    });

    test('Check whether the transformed media gallery images have the expected format', () => {
        oroProducts.forEach((product) => {
            expect(getTransformedMediaGalleryEntries(product)).toStrictEqual(
                outputImages.find((image) => image.product_id === product.id)?.media_gallery
            );
        });
    });
});

describe('Product data transformation tests', () => {
    test('Check whether the transformed product data has the expected format', () => {
        oroProducts.forEach((oroProduct) => {
            const productsTransformer = new ProductsTransformer();
            expect(productsTransformer.getTransformedProductData(oroProduct)).toStrictEqual(
                outputProducts.find((product) => String(product.id) === oroProduct.id)
            );
        });
    });
});
