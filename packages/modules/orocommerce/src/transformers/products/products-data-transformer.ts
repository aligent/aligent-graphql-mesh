import {
    ConfigurableProductAttribute,
    Product as OroProduct,
    ProductIncludeTypes,
    ProductSearch,
    ProductSearchMeta,
} from '../../types';
import {
    ChainTransformer,
    Transformer,
    TransformerContext,
    getPathFromUrlKey,
    isNotNull,
    logAndThrowError,
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
    FilterTypeEnum,
} from '@aligent/orocommerce-resolvers';
import { getTransformedSmallImage, getTransformedMediaGalleryEntries } from './images-transformer';
import { getTransformedProductStockStatus } from './stock-status-transformer';
import { getTransformedReviews } from './reviews-transformer';
import { Injectable } from 'graphql-modules';

interface ProductsTransformerInput {
    oroProductsData: {
        data: Array<OroProduct | ProductSearch>;
        included?: Array<ProductIncludeTypes>;
        meta?: ProductSearchMeta;
    };
    productAttributes?: ConfigurableProductAttribute[];
    pageSize: number;
    currentPage: number;
}

@Injectable()
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

                const productVariants = included?.filter((product) => product.type === 'products');
                if (productVariants) {
                    oroProducts[0].included = productVariants;
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

    getTransformedProductAggregations(
        productAttributes: ConfigurableProductAttribute[]
    ): Aggregation[] {
        return productAttributes.map((attribute) => {
            const { id, label } = attribute.meta;
            return {
                attribute_code: id,
                count: 1,
                label: label,
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
                    return {
                        attributes: this.getTransformedProductsAttributes(variant),
                        product: {
                            id: Number(variant.id),
                            // TODO: Do we need to return anything here?
                            custom_attributes: [],
                            media_gallery_entries: getTransformedMediaGalleryEntries(variant),
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
                            small_image: getTransformedSmallImage(variant),
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

    public getTransformedProductData(oroProduct: OroProduct): ConfigurableProduct | SimpleProduct {
        try {
            const currency = oroProduct.attributes.prices[0]?.currencyId || 'AUD';
            const price = oroProduct.attributes.prices[0]?.price || '0';
            const productPrice = this.getPriceData(currency, price);
            const baseProduct = {
                categories: null, // TODO (do we need webcatalog or mastercatalog categories here?)

                description: {
                    __typename: 'ComplexTextValue',
                    html: oroProduct.attributes.description ?? '',
                },
                staged: true,
                uid: btoa(oroProduct.id),
                custom_attributes: [],
                id: Number(oroProduct.id),
                media_gallery_entries: getTransformedMediaGalleryEntries(oroProduct),
                meta_title: oroProduct.attributes.metaTitle,
                meta_keyword: oroProduct.attributes.metaKeywords,
                meta_description: oroProduct.attributes.metaDescription,
                name: oroProduct.attributes.name,
                price: null, // TODO
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
                redirect_code: 0,
                rating_summary: 0,
                review_count: 0,
                related_products: null, // ? TODO
                sku: oroProduct.attributes.sku,
                small_image: getTransformedSmallImage(oroProduct),
                type: 'PRODUCT',
                stock_status: getTransformedProductStockStatus(oroProduct),
                url_key: getPathFromUrlKey(oroProduct.attributes.url),
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
