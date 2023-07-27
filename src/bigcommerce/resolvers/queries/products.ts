import { BcProduct } from '../../types';
import { getBcProductGraphql } from '../requests/bc-graphql-calls';

export const productsResolver = {
    resolve: async (_root, args, _context, _info) => {
        const bcProduct = await getBcProductGraphql(args.filter.sku.eq);

        return createAcReadyProduct(bcProduct);
    },
};

const createAcReadyProduct = (bcProduct: BcProduct) => {
    const images = createImages(bcProduct.images);

    return {
        items: [
            {
                __typename: 'ConfigurableProduct',
                categories: createCategories(bcProduct.categories),
                description: {
                    html: bcProduct.description,
                },
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
            },
        ],
    };
};

const transformAvailabilityStatus = (status: BcProduct['availabilityV2']['status']) => {
    if (status === 'Available') return 'IN_STOCK';
    else return 'OUT_OF_STOCK';
};

const createCategories = (categories: BcProduct['categories']) => {
    console.log(JSON.stringify(categories));
    return categories.edges.map((catItem) => {
        return {
            __typename: 'CategoryTree',
            uid: catItem.node.entityId,
            name: catItem.node.name,
            level: 1111,
            breadcrumbs: catItem.node.breadcrumbs.edges.map((crumbItem) => {
                return {
                    __typename: 'Breadcrumb',
                    category_name: crumbItem.node.name,
                    category_uid: crumbItem.node.entityId,
                };
            }),
        };
    });
};

const createImages = (images: BcProduct['images']) => {
    return images.edges.map((image) => {
        return {
            __typename: 'MediaGalleryEntry',
            file: image.node.urlOriginal,
            label: image.node.altText,
            disabled: image.node.isDefault,
            id: 1111,
            position: 1111,
        };
    });
};

const createRelatedProducts = (relatedProducts: BcProduct['relatedProducts']) => {
    return relatedProducts?.edges.map((product) => {
        return {
            categories: createCategories(product.node.categories),
            id: product.node.entityId,
            name: product.node.name,
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
            sku: product.node.sku,
            small_image: {
                __typename: 'ProductImage',
                url: product.node.images.edges[0].node.urlOriginal,
            },
            url_key: product.node.addToCartUrl,
            url_suffix: '.html',
        };
    });
};
