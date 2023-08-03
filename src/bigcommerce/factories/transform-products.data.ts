import {
    BC_Product,
    BC_ProductConnection,
    ConfigurableProduct,
    Maybe,
    ProductInterface,
    Products,
} from '../../meshrc/.mesh';
import { getTransformedCategoriesData } from './transform-category-data';
import { slashAtStartOrEnd } from '../../utils';
import { getTransformedVariants } from './helpers/transform-variants';
import { getTransformedPriceRange, getTransformedPrices } from './helpers/transform-product-prices';
import {
    getTransformedMediaGalleryEntries,
    getTransformedSmallImage,
} from './helpers/transform-images';
import { getTransformedReviews } from './helpers/transform-reviews';
import { getTransformedConfigurableOptions } from './helpers/transform-configurable-options';
import { getTransformedAvailabilityStatus } from './helpers/transform-stock-status';
import { getTransformedRelatedProducts } from './helpers/transform-related-products';
import { productsMock } from '../resolvers/mocks/products';

export const getTypeName = (bcProduct: BC_Product): 'SimpleProduct' | 'ConfigurableProduct' => {
    const { variants } = bcProduct;

    if (variants?.edges && variants?.edges.length > 0) {
        return 'ConfigurableProduct';
    } else {
        return 'SimpleProduct';
    }
};

// VirtualProduct' | 'SimpleProduct' | 'DownloadableProduct' | 'BundleProduct' | 'GroupedProduct' | 'ConfigurableProduct' | 'GiftCardProduct'
export const getTransformedProductData = (
    bcProduct: BC_Product
): Maybe<ProductInterface | ConfigurableProduct> => {
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
            // @ts-ignore this isn't included in the product prop types but is needed to prevent graphql from complaining
            __typename: getTypeName(bcProduct),
        };
    } catch (e) {
        console.error(e);
        throw new Error(JSON.stringify(e));
    }
};

export const getTransformedProductsData = (bcProducts: BC_ProductConnection): Maybe<Products> => {
    const { collectionInfo, edges, pageInfo } = bcProducts;

    return {
        // @todo get "aggregations/filters" from site.search.productSearch when following up for category products
        aggregations: productsMock.aggregations,
        items: edges
            ? edges.map(product => {
                  if (!product) return null;
                  return getTransformedProductData(product.node);
              })
            : null,
        page_info: {
            current_page: 0,
            page_size: 0,
            total_pages: 0,
        },
        total_count: collectionInfo?.totalItems,
    };
};
