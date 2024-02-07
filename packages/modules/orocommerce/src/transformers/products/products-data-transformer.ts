import {
    Category,
    ConfigurableProductAttribute,
    Product as OroProduct,
    ProductImage,
    ProductImageFile,
    ProductIncludeTypes,
    ProductsTransformerInput,
} from '../../types';
import {
    ChainTransformer,
    Transformer,
    TransformerContext,
    btoa,
    isNotNull,
    logAndThrowError,
    slashAtStartOrEnd,
} from '@aligent/utils';
import {
    Products,
    SimpleProduct,
    ConfigurableProduct,
    ConfigurableAttributeOption,
    Maybe,
    CurrencyEnum,
    Money,
    ConfigurableVariant,
    Aggregation,
    MediaGalleryEntry,
    CategoryTree,
} from '@aligent/orocommerce-resolvers';
import { getTransformedProductStockStatus } from './stock-status-transformer';
import { getTransformedReviews } from './reviews-transformer';
import { Injectable } from 'graphql-modules';
import { getEncodedCategoryUidFromCategoryData } from '../../utils';

@Injectable({
    global: true,
})
export class ProductsTransformerChain extends ChainTransformer<
    ProductsTransformerInput,
    Products
> {}

@Injectable()
export class ProductsTransformer implements Transformer<ProductsTransformerInput, Products> {
    public transform(context: TransformerContext<ProductsTransformerInput, Products>): Products {
        const { oroProductsData, pageSize, currentPage, productAttributes } = context.data;
        const { data, included, meta } = oroProductsData;
        const oroProducts: Array<OroProduct> = [];
        /* Response data here can be coming from either '/products' or '/productsearch' Oro apis
         * In the latter case, associated products are returned in the 'included' section of the response
         * messed up with all the other related entities like categories, images and stock statuses.
         * For the sake of consistency we have to filter out each Product entity, and all the related to it data
         */
        data.forEach((entry) => {
            if (entry.type === 'productsearch') {
                const oroProduct = <OroProduct>(
                    included?.find((entity) => entity.type === 'products' && entity.id === entry.id)
                );
                if (oroProductsData.included) {
                    oroProduct.included = this.getEntitiesRelatedToProduct(
                        oroProductsData.included,
                        oroProduct.id
                    );
                }
                oroProducts.push(oroProduct);
            }

            if (entry.type === 'products') {
                oroProducts.push(entry);

                if (included) {
                    oroProducts[0].included = included;
                }
            }
        });

        const totalRecordsCount = meta?.totalRecordsCount ?? 1;
        return {
            aggregations: productAttributes
                ? this.getTransformedProductAggregations(productAttributes)
                : null,
            items: oroProducts.map((product) => this.getTransformedProductData(product)),
            page_info: {
                current_page: currentPage,
                page_size: pageSize,
                total_pages: Math.ceil(totalRecordsCount / pageSize),
            },
            total_count: totalRecordsCount,
        };
    }

    // This function has been created from the limited data returned from /tf_product_attributes custom API
    getTransformedProductAggregations(
        productAttributes: ConfigurableProductAttribute[]
    ): Aggregation[] {
        return productAttributes.map((attribute) => {
            const { id, attributes } = attribute;
            return {
                attribute_code: id,
                count: 1,
                label: attributes.label,
                options: [],
            };
        });
    }

    getPriceData(currency: string, price: string): Money {
        return {
            currency: currency as CurrencyEnum,
            value: Number(price),
        };
    }

    getTransformedProductsAttributes = (
        oroProductData: OroProduct
    ): Maybe<Array<Maybe<ConfigurableAttributeOption>>> => {
        const productAttributesWithValues = oroProductData.attributes.productAttributes;
        const productAttributes = Object.keys(productAttributesWithValues);

        const attributes = productAttributes
            .map((attribute) => {
                const attributeValue = productAttributesWithValues[attribute];
                if (!attributeValue) return null;
                //TODO: figure out when attribute can be an array and handle it
                if (Array.isArray(attributeValue)) return null;
                return {
                    code: attribute,
                    label: attributeValue.targetValue,
                    // value_index: Number(attributeValue.id), // This is a string in ORO
                    uid: btoa(String(attributeValue.id)),
                };
            })
            .filter(Boolean);
        return attributes;
    };

    getTransformedVariants = (oroProductData: OroProduct): ConfigurableVariant[] => {
        if (!oroProductData.included) return [];

        // The productimages data inside oroProductData.included only links to the parent product and not each variant
        // Currently variant images arent correct, this will later need to be updated
        const productsImages = oroProductData.included?.filter(this.isProductImage);

        const variantsResults = oroProductData.included
            .map((entity) => {
                if (entity.type === 'products') {
                    const variant = <OroProduct>entity;
                    if (oroProductData.included) {
                        variant.included = this.getEntitiesRelatedToProduct(
                            oroProductData.included,
                            variant.id
                        );
                    }
                    const productPrice = this.getPriceData(
                        variant.attributes.prices[0].currencyId,
                        variant.attributes.prices[0].price
                    );

                    const { origin } = new URL(variant.links.self);

                    const smallImage = productsImages
                        ? this.getImageByDimension(productsImages, 'product_small')
                        : null;

                    const originalImage = productsImages
                        ? this.getImageByDimension(productsImages, 'product_original')
                        : null;

                    return {
                        attributes: this.getTransformedProductsAttributes(variant),
                        product: {
                            id: Number(variant.id),
                            // TODO: Do we need to return anything here?
                            custom_attributes: [],
                            media_gallery_entries: productsImages
                                ? this.getMediaImages(productsImages, origin)
                                : [],
                            price_range: {
                                minimum_price: {
                                    regular_price: productPrice,
                                    final_price: productPrice,
                                },
                                maximum_price: {
                                    regular_price: productPrice,
                                    final_price: productPrice,
                                },
                            },
                            price_tiers: [], // TODO
                            rating_summary: 0,
                            redirect_code: 0,
                            reviews: {
                                // TODO
                                items: [],
                                page_info: {
                                    current_page: 0,
                                    page_size: 0,
                                    total_pages: 0,
                                },
                            },
                            review_count: 0,
                            sku: variant.attributes.sku,
                            small_image: {
                                url: smallImage?.url ? `${origin}${smallImage?.url}` : '',
                                label: smallImage?.label || '',
                            },
                            image: {
                                url: originalImage?.url ? `${origin}${originalImage?.url}` : '',
                                label: originalImage?.label,
                            },
                            staged: false,
                            stock_status: getTransformedProductStockStatus(variant),
                            uid: btoa(variant.id),
                        },
                        __typename: 'ConfigurableVariant',
                    } satisfies ConfigurableVariant;
                }
                return null;
            })
            .filter(isNotNull);

        return variantsResults;
    };

    isProductImage = (item: ProductIncludeTypes): item is ProductImage => {
        return item.type === 'productimages';
    };

    isProductCategory = (item: ProductIncludeTypes): item is Category => {
        return item.type === 'mastercatalogcategories';
    };

    getImageByDimension(
        images: ProductImage[],
        imageDimension: string
    ): ProductImageFile | undefined {
        for (const image of images) {
            const foundImage = image.attributes.files.find(
                (image) => image.dimension === imageDimension
            );

            if (foundImage) {
                foundImage.label = image.attributes.altText;
                return foundImage;
            }
        }

        return;
    }

    getMediaImages(includedImages: ProductImage[], origin?: string): MediaGalleryEntry[] {
        const mediaGalleryEntries: MediaGalleryEntry[] = [];
        for (const includedImage of includedImages) {
            const transformedMediaImages = includedImage.attributes.files.map((image, index) => {
                index++;
                return {
                    id: Number(includedImage.id) + index, // This ID just needs to be unique for the FE
                    label: image.dimension,
                    disabled: false,
                    file: `${origin}${image.url}`,
                    position: index, // This value doesnt exist in ORO
                    uid: btoa(`id:${includedImage.id}-dimension:${image.dimension}`),
                };
            });
            mediaGalleryEntries.push(...transformedMediaImages);
        }

        return mediaGalleryEntries;
    }

    getCategoriesData(productCategories: Category[]): CategoryTree[] {
        return productCategories.map((productCategory) => {
            const {
                title,
                description,
                metaDescription,
                metaKeywords,
                metaTitle,
                url,
                createdAt,
                images,
            } = productCategory.attributes;
            const category = { type: productCategory.type, id: productCategory.id };
            const level = 1;

            return {
                type: 'CATEGORY',
                __typename: 'CategoryTree',
                created_at: createdAt,
                id: Number(productCategory.id),
                uid: productCategory.relationships
                    ? getEncodedCategoryUidFromCategoryData(category, productCategory.id)
                    : '',
                staged: true, // Couldnt see equivalent value in ORO
                name: title,
                level: productCategory.relationships
                    ? productCategory.relationships.categoryPath.data.length + level
                    : level,
                redirect_code: 0, // Couldnt see equivalent value in ORO
                description: description,
                meta_title: metaTitle,
                meta_description: metaDescription,
                meta_keywords: metaKeywords,
                url_path: url,
                image: images.length === 0 ? null : images[0].url,
            };
        });
    }

    public getTransformedProductData(oroProduct: OroProduct): ConfigurableProduct | SimpleProduct {
        try {
            const productCategories = oroProduct.included?.filter(this.isProductCategory);
            const productsImages = oroProduct.included?.filter(this.isProductImage);

            const currentProductsImages = productsImages?.filter(
                (images) => images.relationships?.product.data.id === oroProduct.id
            );

            // Configurable products have empty array for prices with prices on the variants
            const currency = oroProduct.attributes.prices[0]?.currencyId || 'AUD';
            const price = oroProduct.attributes.prices[0]?.price || '0';
            const productPrice = this.getPriceData(currency, price);
            const { origin } = new URL(oroProduct.links.self);

            const smallImage = currentProductsImages
                ? this.getImageByDimension(currentProductsImages, 'product_small')
                : null;

            const originalImage = currentProductsImages
                ? this.getImageByDimension(currentProductsImages, 'product_original')
                : null;

            const baseProduct = {
                categories: productCategories ? this.getCategoriesData(productCategories) : null,
                description: {
                    __typename: 'ComplexTextValue',
                    html: oroProduct.attributes.description ?? '',
                },
                staged: true,
                uid: btoa(oroProduct.id),
                custom_attributes: [],
                id: Number(oroProduct.id),
                media_gallery_entries: productsImages
                    ? this.getMediaImages(productsImages, origin)
                    : [],
                meta_title: oroProduct.attributes.metaTitle,
                meta_keyword: oroProduct.attributes.metaKeywords,
                meta_description: oroProduct.attributes.metaDescription,
                name: oroProduct.attributes.name,
                price: null, // TODO
                price_range: {
                    minimum_price: {
                        regular_price: productPrice,
                        final_price: productPrice,
                        discount: { amount_off: 0 }, // This is needed for the PWA to not error
                    },
                    maximum_price: {
                        regular_price: productPrice,
                        final_price: productPrice,
                    },
                },
                price_tiers: [], // TODO
                redirect_code: 0,
                rating_summary: 0,
                review_count: 0,
                related_products: null, // ? TODO
                sku: oroProduct.attributes.sku,
                small_image: {
                    url: smallImage?.url ? `${origin}${smallImage?.url}` : '',
                    label: smallImage?.label || '',
                },
                image: {
                    url: originalImage?.url ? `${origin}${originalImage?.url}` : '',
                    label: originalImage?.label || '',
                },
                type: 'PRODUCT',
                stock_status: getTransformedProductStockStatus(oroProduct),
                url_key: oroProduct.attributes.url.replace(slashAtStartOrEnd, ''),
                url_suffix: '',
                reviews: getTransformedReviews(),
            } satisfies SimpleProduct;

            if (this.getProductTypeName(oroProduct) === 'ConfigurableProduct') {
                return {
                    ...baseProduct,
                    variants: this.getTransformedVariants(oroProduct),
                    // TODO: simple products of configurable product
                    // TODO: need product unit (it's a required field for many oro POST apis, ex. add product to cart)
                    configurable_options: [],
                    __typename: 'ConfigurableProduct',
                }; // TODO (product.attributes.productAttributes - for config product only)
            }

            return {
                ...baseProduct,
                __typename: 'SimpleProduct',
            };
        } catch (error) {
            return logAndThrowError(error, this.getTransformedProductData.name);
        }
    }

    protected getProductTypeName(oroProduct: OroProduct): 'ConfigurableProduct' | 'SimpleProduct' {
        if (oroProduct.attributes.productType === 'configurable') {
            return 'ConfigurableProduct';
        } else {
            return 'SimpleProduct';
        }
    }

    getEntitiesRelatedToProduct(
        included: ProductIncludeTypes[],
        productId: string
    ): ProductIncludeTypes[] {
        return included.filter(
            (entity) =>
                ['productinventorystatuses', 'productimages', 'mastercatalogcategories'].includes(
                    entity.type
                ) ||
                //filter only product variants related to requested product
                (entity.type === 'products' &&
                    entity.relationships.parentProducts.data.find(
                        (parent) => parent.id === productId
                    ))
        );
    }
}
