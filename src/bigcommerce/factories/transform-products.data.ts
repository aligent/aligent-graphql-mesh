import {
    BC_ImageConnection,
    BC_Money,
    BC_Product,
    BC_ProductAvailabilityStatus,
    BC_ProductConnection,
    BC_ReviewConnection,
    CurrencyEnum,
    Maybe,
    MediaGalleryEntry,
    Money,
    ProductInterface,
    ProductReview,
    Products,
    ProductStockStatus,
} from '../../meshrc/.mesh';
import { getTransformedCategoriesData } from './transform-category-data';
import { slashAtStartOrEnd } from '../../utils';

const getPrice = (priceObject: BC_Money): Money => {
    const { currencyCode, value } = priceObject;
    return { currency: currencyCode as Maybe<CurrencyEnum>, value: value || 0 };
};

const getTypeName = (bcProduct: BC_Product): 'SimpleProduct' | 'ConfigurableProduct' => {
    const { variants } = bcProduct;

    if (variants?.edges && variants?.edges.length > 0) {
        return 'ConfigurableProduct';
    } else {
        return 'SimpleProduct';
    }
};

const getTransformedImages = (images: BC_ImageConnection): Array<Maybe<MediaGalleryEntry>> => {
    if (!images?.edges || !images?.edges.length) return [];

    return images?.edges.map(image => {
        if (!image) return null;
        const { altText, isDefault, urlOriginal } = image.node;
        return {
            file: urlOriginal,
            label: altText,
            disabled: isDefault,
            uid: 'null',
            position: null,
        };
    });
};

const getTransformedReviewItems = (reviews: BC_ReviewConnection): Array<Maybe<ProductReview>> => {
    if (!reviews?.edges || !reviews.edges?.length) return [];

    return reviews.edges.map(review => {
        if (!review?.node) return null;
        const { author, createdAt, rating, text, title } = review.node;
        return {
            ratings_breakdown: [
                {
                    name: author.name,
                    value: '',
                },
            ],
            average_rating: rating,
            created_at: createdAt.utc,
            nickname: '',
            summary: title,
            text: text,
            // @todo TF doesn't get products for reviews. This will need follow up implementation if required
            product: {} as ProductInterface,
        };
    });
};

const getTransformAvailabilityStatus = (
    status: BC_ProductAvailabilityStatus
): ProductStockStatus => {
    if (status === 'Available') return 'IN_STOCK';
    else return 'OUT_OF_STOCK';
};

// VirtualProduct' | 'SimpleProduct' | 'DownloadableProduct' | 'BundleProduct' | 'GroupedProduct' | 'ConfigurableProduct' | 'GiftCardProduct'
export const getTransformedProductData = (bcProduct: BC_Product): ProductInterface => {
    const {
        availabilityV2,
        categories,
        entityId,
        id,
        name,
        path,
        prices,
        relatedProducts,
        reviewSummary,
        reviews,
        seo,
        sku,
    } = bcProduct;

    const images = getTransformedImages(bcProduct.images);

    return {
        categories:
            categories?.edges && categories.edges.length > 0
                ? categories.edges.map(category => {
                      if (!category?.node) return null;
                      return getTransformedCategoriesData(category.node);
                  })
                : null,
        description: {
            html: bcProduct.description,
        },
        staged: true,
        uid: id, // The BC "id" comes through as an uid format e.g. "UHJvZHVjdDo0OTI=" = Product:492
        custom_attributes: [],
        id: entityId,
        media_gallery_entries: images,
        meta_title: seo?.pageTitle || '',
        meta_keyword: seo?.metaKeywords || '',
        meta_description: seo?.metaKeywords || '',
        name: name,
        price: {
            regularPrice: {
                amount: prices ? getPrice(prices.price) : null,
            },
        },
        price_range: {
            maximum_price: prices
                ? {
                      discount: {
                          amount_off: null,
                          percent_off: null,
                      },
                      final_price: getPrice(prices.priceRange.max),
                      regular_price: getPrice(prices.priceRange.max),
                  }
                : null,
            minimum_price: {
                discount: {
                    amount_off: null,
                    percent_off: null,
                },
                final_price: prices?.priceRange.min ? getPrice(prices.priceRange.min) : {},
                regular_price: prices?.priceRange.min ? getPrice(prices.priceRange.min) : {},
            },
        },
        price_tiers: [],
        rating_summary: reviewSummary?.summationOfRatings || 0,
        review_count: reviewSummary?.numberOfReviews || 0,
        related_products:
            relatedProducts?.edges && relatedProducts.edges.length > 0
                ? relatedProducts.edges.map(relatedProduct => {
                      if (!relatedProduct?.node) return null;
                      return getTransformedProductData(relatedProduct.node);
                  })
                : null,
        sku,
        small_image: {
            url: images[0]?.file,
        },
        stock_status: availabilityV2?.status
            ? getTransformAvailabilityStatus(availabilityV2.status)
            : null,
        url_key: path.replace(slashAtStartOrEnd, ''),
        url_suffix: '',
        // @todo add reviews data
        reviews: {
            items: getTransformedReviewItems(reviews),
            page_info: {
                current_page: 0,
                page_size: 0,
                total_pages: 0,
            },
        },
        // @ts-ignore this isn't included in the product prop types but is needed to prevent graohql from complaining
        __typename: getTypeName(bcProduct),
    };
};

export const getTransformedProductsData = (bcProducts: BC_ProductConnection): Products => {
    const { collectionInfo, edges, pageInfo } = bcProducts;

    return {
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
