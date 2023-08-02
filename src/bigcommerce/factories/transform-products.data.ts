import {
    BC_Image,
    BC_ImageConnection,
    BC_Money,
    BC_MultipleChoiceOption,
    BC_OptionConnection,
    BC_Prices,
    BC_Product,
    BC_ProductAvailabilityStatus,
    BC_ProductConnection,
    BC_ProductOptionConnection,
    BC_ReviewConnection,
    BC_SwatchOptionValue,
    BC_VariantConnection,
    ConfigurableAttributeOption,
    ConfigurableProduct,
    ConfigurableProductOptions,
    ConfigurableVariant,
    CurrencyEnum,
    Maybe,
    MediaGalleryEntry,
    Money,
    PriceRange,
    ProductInterface,
    ProductReview,
    Products,
    ProductStockStatus,
} from '../../meshrc/.mesh';
import { getTransformedCategoriesData } from './transform-category-data';
import { btoa, slashAtStartOrEnd } from '../../utils';

const getPrice = (priceObject: BC_Money): Money => {
    const { currencyCode, value } = priceObject;
    return { currency: currencyCode as Maybe<CurrencyEnum>, value: value || 0 };
};

const getPriceRange = (prices: Maybe<BC_Prices>): PriceRange => {
    if (!prices)
        return {
            maximum_price: prices
                ? {
                      discount: {
                          amount_off: null,
                          percent_off: null,
                      },
                      final_price: { currency: null, value: null },
                      regular_price: { currency: null, value: null },
                  }
                : null,
            minimum_price: {
                discount: {
                    amount_off: null,
                    percent_off: null,
                },
                final_price: { currency: null, value: null },
                regular_price: { currency: null, value: null },
            },
        };

    return {
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
    };
};

const getTransformedImage = (image: Maybe<BC_Image>): Maybe<MediaGalleryEntry> => {
    if (!image) return null;
    const { altText, url } = image;

    return {
        disabled: false,
        file: url,
        label: altText,
        position: null,
        uid: '',
    };
};
const getTransformedMediaGalleryEntries = (
    images: BC_ImageConnection
): Array<Maybe<MediaGalleryEntry>> => {
    if (!images?.edges || !images?.edges.length) return [];

    return images?.edges.map(image => {
        if (!image) return null;
        return getTransformedImage(image.node);
    });
};

const getTypeName = (bcProduct: BC_Product): 'SimpleProduct' | 'ConfigurableProduct' => {
    const { variants } = bcProduct;

    if (variants?.edges && variants?.edges.length > 0) {
        return 'ConfigurableProduct';
    } else {
        return 'SimpleProduct';
    }
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

const getTransformedConfigurableOptions = (
    productOptions: BC_ProductOptionConnection
): Array<Maybe<ConfigurableProductOptions>> => {
    if (!productOptions || !productOptions?.edges) return [];

    const options = productOptions?.edges.map(option => {
        if (!option?.node) return null;

        const {
            displayName,
            displayStyle,
            entityId,
            values,
        } = option.node as BC_MultipleChoiceOption;

        const attribute_code = displayName.toLowerCase().replace(/ /g, '_');

        if (!values?.edges) return null;

        const optionValues = values?.edges.map(value => {
            if (!value?.node) return null;
            const { entityId, hexColors, isDefault, label } = value.node as BC_SwatchOptionValue;
            const swatch_data =
                hexColors && hexColors.length > 0
                    ? { value: hexColors[0], __typename: 'ColorSwatchData' }
                    : null;
            return {
                default_label: label,
                label: label,
                store_label: label,
                use_default_value: isDefault,
                value_index: entityId,
                ...(swatch_data && { swatch_data }),
                __typename: 'ConfigurableProductOptionsValues',
            };
        });

        return {
            attribute_code,
            attribute_id: String(entityId),
            displayStyle,
            id: entityId,
            label: displayName,
            values: optionValues,
            attribute_uid: btoa(String(entityId)),
            uid: btoa(String(entityId)),
        };
    });

    return options;
};

const getTransformedOptions = (
    options: BC_OptionConnection
): Array<Maybe<ConfigurableAttributeOption>> => {
    if (!options?.edges) return [];

    const optionsResult = options.edges.map(option => {
        if (!option?.node) return null;
        const { entityId: optionEntityId, displayName, values } = option.node;

        if (!values?.edges?.[0]?.node) return null;
        const { entityId: valueEntityId, label } = values.edges[0].node;
        return {
            code: displayName.toLowerCase().replace(/ /g, '_'),
            label,
            value_index: valueEntityId,
            uid: btoa(String(valueEntityId)),
        };
    });

    return optionsResult;
};

const getTransformedVariants = (
    variants: BC_VariantConnection
): Array<Maybe<ConfigurableVariant>> => {
    if (!variants?.edges) return [];

    const variantsResults = variants.edges.map(variant => {
        if (!variant?.node) return null;
        const { defaultImage, entityId, id, inventory, options, prices = null, sku } = variant.node;

        return {
            attributes: getTransformedOptions(options),
            product: {
                custom_attributes: [],
                id: entityId,
                media_gallery_entries: [getTransformedImage(defaultImage || null)],
                price_range: getPriceRange(prices),
                rating_summary: 0,
                redirect_code: 0,
                reviews: {
                    items: [],
                    page_info: {
                        current_page: 0,
                        page_size: 0,
                        total_pages: 0,
                    },
                },
                review_count: 0,
                sku,
                staged: false,
                stock_status: (inventory?.isInStock
                    ? 'IN_STOCK'
                    : 'OUT_OF_STOCK') as ProductStockStatus,
                uid: id,
            },
        };
    });

    return variantsResults;
};

// VirtualProduct' | 'SimpleProduct' | 'DownloadableProduct' | 'BundleProduct' | 'GroupedProduct' | 'ConfigurableProduct' | 'GiftCardProduct'
export const getTransformedProductData = (
    bcProduct: BC_Product
): ProductInterface | ConfigurableProduct => {
    const {
        availabilityV2,
        categories,
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

    const images = getTransformedMediaGalleryEntries(bcProduct.images);

    return {
        categories:
            categories?.edges && categories.edges.length > 0
                ? categories.edges.map(category => {
                      if (!category?.node) return null;
                      return getTransformedCategoriesData(category.node);
                  })
                : null,
        configurable_options: getTransformedConfigurableOptions(productOptions),
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
        price_range: getPriceRange(prices),
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
        variants: bcVariants ? getTransformedVariants(bcVariants) : null,
        // @ts-ignore this isn't included in the product prop types but is needed to prevent graphql from complaining
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
