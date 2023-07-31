import {
    CategoryInterface,
    MediaGalleryEntry,
    ProductInterface,
    Products,
} from '../../meshrc/.mesh';
import { BcProduct } from '../types';
import { getTransformedCategoriesData } from './transform-category-data';

const getTypeName = (bcProduct: BcProduct): 'SimpleProduct' | 'ConfigurableProduct' => {
    if (bcProduct.variants.edges.length <= 1) {
        return 'SimpleProduct';
    } else {
        return 'ConfigurableProduct';
    }
};

// VirtualProduct' | 'SimpleProduct' | 'DownloadableProduct' | 'BundleProduct' | 'GroupedProduct' | 'ConfigurableProduct' | 'GiftCardProduct'
export const createAcReadyProduct = (bcProduct: BcProduct): Products => {
    const images = createImages(bcProduct.images);

    const product: ProductInterface = {
        __typename: getTypeName(bcProduct),
        categories: getTransformedCategoriesData(bcProduct.categories),
        description: {
            html: bcProduct.description,
        },
        staged: true,
        uid: bcProduct.id,
        custom_attributes: [],
        id: bcProduct.entityId,
        media_gallery_entries: images,
        meta_title: bcProduct.seo.pageTitle,
        meta_keyword: bcProduct.seo.metaKeywords,
        meta_description: bcProduct.seo.metaKeywords,
        name: bcProduct.name,
        price: {
            regularPrice: {
                amount: {
                    currency: bcProduct.prices.price.currencyCode,
                    value: bcProduct.prices.price.value,
                },
            },
        },
        price_range: {
            maximum_price: {
                discount: {
                    amount_off: null,
                    percent_off: null,
                },
                final_price: {
                    currency: 'AUD',
                    value: null,
                },
                regular_price: {
                    currency: bcProduct.prices.priceRange.max.currencyCode,
                    value: bcProduct.prices.priceRange.max.value,
                },
            },
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
                    currency: bcProduct.prices.priceRange.min.currencyCode,
                    value: bcProduct.prices.priceRange.min.value,
                },
            },
        },
        price_tiers: [],
        rating_summary: bcProduct.reviewSummary.summationOfRatings,
        review_count: bcProduct.reviewSummary.numberOfReviews,
        related_products: createRelatedProducts(bcProduct.relatedProducts),
        sku: bcProduct.sku,
        small_image: {
            url: images[0].file,
        },
        stock_status: transformAvailabilityStatus(bcProduct.availabilityV2.status),
        url_key: bcProduct.addToCartUrl,
        url_suffix: '',
        reviews: {
            items: [],
            page_info: {
                current_page: 1,
                page_size: 1,
                total_pages: 1,
            },
        },
    };

    product.reviews.items = createReviewItems(bcProduct.reviews, product);

    return {
        items: [product],
    };
};

const createReviewItems = (reviews: BcProduct['reviews'], product: ProductInterface) => {
    return reviews.edges.map((review) => {
        return {
            ratings_breakdown: [
                {
                    name: review.node.author.name,
                    value: 'null',
                },
            ],
            average_rating: review.node.rating,
            created_at: review.node.createdAt.utc,
            nickname: 'null',
            summary: review.node.title,
            text: review.node.text,
            product,
        };
    });
};

const transformAvailabilityStatus = (status: BcProduct['availabilityV2']['status']) => {
    if (status === 'Available') return 'IN_STOCK';
    else return 'OUT_OF_STOCK';
};

const createCategories = (categories: BcProduct['categories']): CategoryInterface[] => {
    return categories.edges.map((catItem) => {
        return {
            __typename: 'CategoryTree',
            uid: String(catItem.node.entityId),
            name: catItem.node.name,
            level: null,
            staged: true,
            breadcrumbs: catItem.node.breadcrumbs.edges.map((crumbItem) => {
                return {
                    __typename: 'Breadcrumb',
                    category_name: crumbItem.node.name,
                    category_uid: String(crumbItem.node.entityId),
                };
            }),
        };
    });
};

const createImages = (images: BcProduct['images']): MediaGalleryEntry[] => {
    return images.edges.map((image) => {
        return {
            file: image.node.urlOriginal,
            label: image.node.altText,
            disabled: image.node.isDefault,
            uid: 'null',
            position: null,
        };
    });
};

const createRelatedProducts = (
    relatedProducts: BcProduct['relatedProducts']
): ProductInterface[] => {
    return relatedProducts?.edges.map((product) => {
        const baseProduct: ProductInterface = {
            __typename: 'ConfigurableProduct',
            categories: createCategories(product.node.categories),
            id: product.node.entityId,
            name: product.node.name,
            rating_summary: null,
            review_count: null,
            staged: true,
            uid: product.node.id,
            custom_attributes: [],
            price: {
                regularPrice: {
                    amount: {
                        currency: product.node.prices.price.currencyCode,
                        value: product.node.prices.price.value,
                    },
                },
            },
            price_range: {
                maximum_price: {
                    discount: {
                        amount_off: null,
                        percent_off: null,
                    },
                    final_price: {
                        currency: 'AUD',
                        value: null,
                    },
                    regular_price: {
                        currency: product.node.prices.priceRange.max.currencyCode,
                        value: product.node.prices.priceRange.max.value,
                    },
                },
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
                        currency: product.node.prices.priceRange.min.currencyCode,
                        value: product.node.prices.priceRange.min.value,
                    },
                },
            },
            reviews: {
                items: [],
                page_info: {
                    current_page: 1,
                    page_size: 1,
                    total_pages: 1,
                },
            },
            sku: product.node.sku,
            small_image: {
                url: 'null',
            },
            url_key: product.node.addToCartUrl,
            url_suffix: '.html',
        };

        return baseProduct;
    });
};
