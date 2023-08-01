import {
    BC_ImageConnection,
    BC_Product,
    BC_ReviewConnection,
    CategoryInterface,
    CurrencyEnum,
    Maybe,
    MediaGalleryEntry,
    ProductInterface,
    ProductReview,
} from '../../meshrc/.mesh';
import { BcProduct } from '../types';
import { getTransformedCategoriesData } from './transform-category-data';

const getTypeName = (bcProduct: BC_Product): 'SimpleProduct' | 'ConfigurableProduct' => {
    const { variants } = bcProduct;

    if (variants?.edges && variants?.edges.length > 0) {
        return 'ConfigurableProduct';
    } else {
        return 'SimpleProduct';
    }
};

// VirtualProduct' | 'SimpleProduct' | 'DownloadableProduct' | 'BundleProduct' | 'GroupedProduct' | 'ConfigurableProduct' | 'GiftCardProduct'
export const createAcReadyProduct = (bcProduct: BC_Product): ProductInterface => {
    const {
        availabilityV2,
        categories,
        prices,
        relatedProducts,
        reviewSummary,
        reviews,
        seo,
    } = bcProduct;

    const images = createImages(bcProduct.images);

    const product: ProductInterface = {
        __typename: getTypeName(bcProduct),
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
        uid: bcProduct.id,
        custom_attributes: [],
        id: bcProduct.entityId,
        media_gallery_entries: images,
        meta_title: seo?.pageTitle || '',
        meta_keyword: seo?.metaKeywords || '',
        meta_description: seo?.metaKeywords || '',
        name: bcProduct.name,
        price: {
            regularPrice: {
                amount: {
                    currency: prices ? (prices.price.currencyCode as CurrencyEnum) : null,
                    value: prices ? prices.price.value : null,
                },
            },
        },
        price_range: {
            maximum_price: prices
                ? {
                      discount: {
                          amount_off: null,
                          percent_off: null,
                      },
                      final_price: {
                          currency: 'AUD',
                          value: null,
                      },
                      regular_price: {
                          currency: (prices.priceRange.max.currencyCode as CurrencyEnum) || null,
                          value: prices.priceRange.max.value || null,
                      },
                  }
                : null,
            minimum_price: {
                discount: {
                    amount_off: null,
                    percent_off: null,
                },
                final_price: {
                    currency: 'AUD',
                    value: null,
                },
                regular_price: {
                    currency: prices ? (prices.priceRange.min.currencyCode as CurrencyEnum) : null,
                    value: prices ? prices.priceRange.min.value : null,
                },
            },
        },
        price_tiers: [],
        rating_summary: reviewSummary?.summationOfRatings || 0,
        review_count: reviewSummary?.numberOfReviews || 0,
        related_products:
            relatedProducts?.edges && relatedProducts.edges.length > 0
                ? relatedProducts.edges.map(relatedProduct => {
                      if (!relatedProduct?.node) return null;
                      return createAcReadyProduct(relatedProduct.node);
                  })
                : null,
        sku: bcProduct.sku,
        small_image: {
            url: images[0]?.file,
        },
        stock_status: availabilityV2?.status
            ? transformAvailabilityStatus(availabilityV2.status)
            : null,
        url_key: bcProduct.addToCartUrl,
        url_suffix: '',
        // @todo add reviews data
        reviews: {
            items: createReviewItems(reviews),
            page_info: {
                current_page: 0,
                page_size: 0,
                total_pages: 0,
            },
        },
    };

    return {
        items: [product],
    };
};

const createReviewItems = (reviews: BC_ReviewConnection): Array<Maybe<ProductReview>> => {
    if (!reviews?.edges || !reviews.edges?.length) return [];

    return reviews.edges.map(review => {
        if (!review?.node) return null;
        const { author, createdAt, rating, text, title } = review.node;
        return {
            ratings_breakdown: [
                {
                    name: author.name,
                    value: 'null',
                },
            ],
            average_rating: rating,
            created_at: createdAt.utc,
            nickname: 'null',
            summary: title,
            text: text,
            // @todo TF doesn't get products for reviews. This will need follow up implementation
            product: {} as ProductInterface,
        };
    });
};

const transformAvailabilityStatus = status => {
    if (status === 'Available') return 'IN_STOCK';
    else return 'OUT_OF_STOCK';
};

const createCategories = (categories: BcProduct['categories']): CategoryInterface[] => {
    return categories.edges.map(catItem => {
        return {
            __typename: 'CategoryTree',
            uid: String(catItem.node.entityId),
            name: catItem.node.name,
            level: null,
            staged: true,
            breadcrumbs: catItem.node.breadcrumbs.edges.map(crumbItem => {
                return {
                    __typename: 'Breadcrumb',
                    category_name: crumbItem.node.name,
                    category_uid: String(crumbItem.node.entityId),
                };
            }),
        };
    });
};

const createImages = (images: BC_ImageConnection): Array<Maybe<MediaGalleryEntry>> => {
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
