import { BC_Product, BC_ProductConnection, BC_SearchProductFilterConnection } from '@mesh/external/BigCommerceGraphqlApi';
import { ConfigurableProduct, Maybe, ProductInterface, Products } from '@mesh';
import { getTransformedCategoriesData } from './transform-category-data';
import { slashAtStartOrEnd } from '../../utils';
import { getTransformedVariants } from './helpers/transform-variants';
import { getTransformedPriceRange, getTransformedPrices } from './helpers/transform-product-prices';
import { getTransformedMediaGalleryEntries, getTransformedSmallImage } from './helpers/transform-images';
import { getTransformedReviews } from './helpers/transform-reviews';
import { getTransformedConfigurableOptions } from './helpers/transform-configurable-options';
import { getTransformedAvailabilityStatus } from './helpers/transform-stock-status';
import { getTransformedRelatedProducts } from './helpers/transform-related-products';
import { logAndThrowError } from '../../utils/error-handling';
import { getTransformedProductAggregations } from './helpers/transform-product-aggregations';

export const getTypeName = (bcProduct: BC_Product): 'SimpleProduct' | 'ConfigurableProduct' => {
    const { variants } = bcProduct;

    if (variants?.edges && variants?.edges.length > 0) {
        return 'ConfigurableProduct';
    } else {
        return 'SimpleProduct';
    }
};

export const getTransformedProductData = (bcProduct: BC_Product): Maybe<ProductInterface | ConfigurableProduct> => {
    if (!bcProduct) return null;

    try {
        const {
            availabilityV2,
            categories,
            defaultImage,
            entityId,
            id,
            name,
            path,
            prices = null,
            productOptions,
            relatedProducts,
            reviewSummary,
            reviews,
            seo,
            sku,
            variants: bcVariants,
        } = bcProduct;
        return {
            categories: getTransformedCategoriesData(categories),
            configurable_options: getTransformedConfigurableOptions(productOptions),
            description: {
                html: bcProduct.description,
            },
            staged: true,
            uid: id, // The BC "id" comes through as an uid format e.g. "UHJvZHVjdDo0OTI=" = Product:492
            custom_attributes: [],
            id: entityId,
            media_gallery_entries: getTransformedMediaGalleryEntries(bcProduct.images),
            meta_title: seo?.pageTitle || '',
            meta_keyword: seo?.metaKeywords || '',
            meta_description: seo?.metaKeywords || '',
            name,
            price: getTransformedPrices(prices),
            price_range: getTransformedPriceRange(prices),
            price_tiers: [],
            rating_summary: reviewSummary?.summationOfRatings || 0,
            review_count: reviewSummary?.numberOfReviews || 0,
            related_products: getTransformedRelatedProducts(relatedProducts),
            sku,
            small_image: getTransformedSmallImage(defaultImage),
            stock_status: getTransformedAvailabilityStatus(availabilityV2),
            url_key: path.replace(slashAtStartOrEnd, ''),
            url_suffix: '',
            reviews: getTransformedReviews(reviews),
            variants: getTransformedVariants(bcVariants),
            // @ts-expect-error: this isn't included in the category prop types but is needed to prevent graphql from complaining
            __typename: getTypeName(bcProduct),
        };
    } catch (error) {
        logAndThrowError(error as Error);
        return null;
    }
};

export const getTransformedProductsData = (bcProducts: {
    products: BC_ProductConnection;
    filters: BC_SearchProductFilterConnection;
}): Maybe<Products> => {
    const { products, filters } = bcProducts;
    const { collectionInfo, edges } = products;

    return {
        aggregations: filters?.edges ? getTransformedProductAggregations(filters) : null,
        items: edges
            ? edges.map(product => {
                  if (!product) return null;
                  return getTransformedProductData(product.node);
              })
            : null,
        // @todo add pagination for category products
        page_info: {
            current_page: 0,
            page_size: 0,
            total_pages: 0,
        },
        total_count: collectionInfo?.totalItems,
    };
};
