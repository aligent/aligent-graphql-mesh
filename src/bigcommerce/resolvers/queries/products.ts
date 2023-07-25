import { getBcProduct } from '../lib/bc-graphql-calls';
import { BcProduct } from '../../types';

export const productsResolver = {
    resolve: async (_root, args, _context, _info) => {
        console.log({ args });
        const bcProduct = await getBcProduct(args.search);

        console.log({ bcProduct });

        return createAcReadyProduct(bcProduct);
    },
};

const createCategories = (categories: BcProduct['categories']) => {
    return categories.edges.map((catItem) => {
        return {
            __typename: "CategoryTree",
            id: catItem.node.entityId,
            name: catItem.node.name,
            level: 1111,
            breadcrumbs: catItem.node.breadcrumbs.edges.map((crumbItem) => {
                return {
                    __typename: "Breadcrumb",
                    category_name: crumbItem.node.name,
                    category_id: crumbItem.node.entityId,
                };
            }),
        };
    });
};

const createImages = (images: BcProduct['images']) => {
    return images.edges.map((image) => {
        return {
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
                        currency: 'NOT SURE',
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
                        currency: 'NOT SURE',
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
                url: product.node.images.edges[0].node.urlOriginal,
            },
            url_key: product.node.addToCartUrl,
            url_suffix: 'NOT SURE',
        };
    });
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
                            currency: 'NOT SURE',
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
                            currency: 'NOT SURE',
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
                stock_status: bcProduct.availabilityV2.status,
                url_key: bcProduct.addToCartUrl,
                url_suffix: 'NOT SURE',
            },
        ],
    };
};
