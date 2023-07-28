import {
    CategoryInterface,
    Maybe,
    MediaGalleryEntry,
    ProductInterface,
    ProductInterfaceResolvers,
    Products,
} from '../../meshrc/.mesh';
import { BcProduct } from '../types';

// const isType = (
//     parent: TParent,
//     context: TContext,
//     info: GraphQLResolveInfo
//   ) => Maybe<TTypes> | Promise<Maybe<TTypes>> {

//   }

const getTypeName = (bcProduct: BcProduct): 'SimpleProduct' | 'ConfigurableProduct' => {
    if (bcProduct.variants.edges.length === 1) {
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
        categories: createCategories(bcProduct.categories),
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
                    amount_off: 1111,
                    percent_off: 1111,
                },
                final_price: {
                    currency: 'AUD',
                    value: 1111,
                },
                regular_price: {
                    currency: bcProduct.prices.priceRange.max.currencyCode,
                    value: bcProduct.prices.priceRange.max.value,
                },
            },
            minimum_price: {
                discount: {
                    amount_off: 1111,
                    percent_off: 1111,
                },
                final_price: {
                    currency: 'AUD',
                    value: 1111,
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
        url_suffix: '.html',
        reviews: {
            items: [],
            page_info: {
                current_page: 1,
                page_size: 1,
                total_pages: 1,
            },
        },
    };

    return {
        items: [product],
    };
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
            level: 1111,
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
            uid: '1111',
            position: 1111,
        };
    });
};

const createRelatedProducts = (
    relatedProducts: BcProduct['relatedProducts']
): ProductInterface[] => {
    return relatedProducts?.edges.map((product) => {
        const baseProduct: ProductInterface = {
            categories: createCategories(product.node.categories),
            id: product.node.entityId,
            name: product.node.name,
            rating_summary: 0,
            review_count: 0,
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
                        amount_off: 1111,
                        percent_off: 1111,
                    },
                    final_price: {
                        currency: 'AUD',
                        value: 1111,
                    },
                    regular_price: {
                        currency: product.node.prices.priceRange.max.currencyCode,
                        value: product.node.prices.priceRange.max.value,
                    },
                },
                minimum_price: {
                    discount: {
                        amount_off: 1111,
                        percent_off: 1111,
                    },
                    final_price: {
                        currency: 'AUD',
                        value: 1111,
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
                url: 'URL',
            },
            url_key: product.node.addToCartUrl,
            url_suffix: '.html',
        };

        baseProduct.reviews.items.push({
            ratings_breakdown: [
                {
                    name: 'Jack',
                    value: '1',
                },
            ],
            average_rating: 1,
            created_at: 'today',
            nickname: 'yelp',
            summary: 'was good',
            text: 'decent',
            product: baseProduct,
        });

        return baseProduct;
    });
};
