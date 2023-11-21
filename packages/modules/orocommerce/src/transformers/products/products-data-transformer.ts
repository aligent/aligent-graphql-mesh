import {
    ConfigurableProductAttribute,
    Product as OroProduct,
    ProductIncludeTypes,
    ProductSearch,
    ProductSearchMeta,
    SupportedProductTypes,
} from '../../types';
import {
    ChainTransformer,
    Transformer,
    TransformerContext,
    getPathFromUrlKey,
    logAndThrowError,
} from '@aligent/utils';
import {
    Products,
    SimpleProduct,
    ConfigurableProduct,
    BundleProduct,
} from '@aligent/orocommerce-resolvers';
import { getTransformedSmallImage, getTransformedMediaGalleryEntries } from './images-transformer';
import { getTransformedProductStockStatus } from './stock-status-transformer';
import { getTransformedReviews } from './reviews-transformer';
import { getTransformedProductAggregations } from './product-aggregations-transformer';

import { Injectable } from 'graphql-modules';
import { getTransformedVariants } from './product-variants-transformer';

export const NO_PRICES_RESPONSE = {
    maximum_price: {
        discount: {
            amount_off: null,
            percent_off: null,
        },
        final_price: { currency: null, value: null },
        regular_price: { currency: null, value: null },
    },
    minimum_price: {
        discount: {
            amount_off: null,
            percent_off: null,
        },
        final_price: { currency: null, value: null },
        regular_price: { currency: null, value: null },
    },
};

interface ProductsTransformerInput {
    oroProductsData: {
        data: Array<OroProduct | ProductSearch>;
        included?: Array<ProductIncludeTypes>;
        meta?: ProductSearchMeta;
    };
    productAttributes?: Array<ConfigurableProductAttribute>;
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
        const { oroProductsData, pageSize, currentPage } = context.data;
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
            }
        });

        const totalRecordsCount = meta?.totalRecordsCount ?? 1;

        return {
            aggregations: oroProductsData.meta?.aggregatedData
                ? getTransformedProductAggregations(oroProductsData.meta.aggregatedData)
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

    public getTransformedProductData(
        oroProduct: OroProduct
    ): SimpleProduct | ConfigurableProduct | BundleProduct | null {
        try {
            return {
                categories: null, // TODO (do we need webcatalog or mastercatalog categories here?)
                ...(this.getProductTypeName(oroProduct) === 'ConfigurableProduct' && {
                    configurable_options: [],
                }), // TODO (product.attributes.productAttributes - for config product only)
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
                price_range: NO_PRICES_RESPONSE, // TODO
                price_tiers: [], // TODO
                redirect_code: 0,
                rating_summary: 0,
                review_count: 0,
                related_products: null, // ? TODO
                sku: oroProduct.attributes.sku,
                small_image: getTransformedSmallImage(oroProduct),
                stock_status: getTransformedProductStockStatus(oroProduct),
                url_key: getPathFromUrlKey(oroProduct.attributes.url),
                url_suffix: '',
                reviews: getTransformedReviews(),
                ...(this.getProductTypeName(oroProduct) === 'ConfigurableProduct' && {
                    variants: getTransformedVariants(oroProduct),
                }), // TODO: simple products of configurable product
                // TODO: need product unit (it's a required field for many oro POST apis, ex. add product to cart)
                __typename: this.getProductTypeName(oroProduct),
            };
        } catch (error) {
            return logAndThrowError(error, this.getTransformedProductData.name);
        }
    }

    protected getProductTypeName(oroProduct: OroProduct): SupportedProductTypes {
        if (oroProduct.attributes.productType === 'configurable') {
            return 'ConfigurableProduct';
        } else {
            return 'SimpleProduct';
        }
    }

    protected getEntitiesRelatedToProduct(
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
