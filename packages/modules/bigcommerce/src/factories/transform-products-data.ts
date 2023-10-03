import {
    Product,
    ProductConnection,
    ProductOptionConnection,
    SearchProductFilterConnection,
} from '@aligent/bigcommerce-operations';
import {
    BundleProduct,
    ConfigurableProduct,
    Maybe,
    ProductInterface,
    Products,
} from '@aligent/bigcommerce-resolvers';
import { getTransformedCategoriesData } from './transform-category-data';
import { slashAtStartOrEnd } from '@aligent/utils';
import { getTransformedVariants } from './helpers/transform-variants';
import { getTransformedPriceRange, getTransformedPrices } from './helpers/transform-product-prices';
import {
    getTransformedMediaGalleryEntries,
    getTransformedSmallImage,
} from './helpers/transform-images';
import { getTransformedReviews } from './helpers/transform-reviews';
import { getTransformedConfigurableOptions } from './helpers/transform-configurable-options';
import { getTransformedRelatedProducts } from './helpers/transform-related-products';
import { logAndThrowError } from '@aligent/utils';
import { getTransformedProductAggregations } from './helpers/transform-product-aggregations';
import {
    getTransformedAvailableStock,
    getTransformedSimpleStockStatus,
} from './helpers/transform-stock';
import { getAttributesFromMetaAndCustomFields } from '../../../../utils/metafields';
import { SupportedProductTypes } from '../types';
import { getTransformBundleItems } from './helpers/transform-bundle-items';

const getHasVariantOptions = (productOptions: ProductOptionConnection): boolean => {
    if (!productOptions?.edges || productOptions?.edges.length === 0) return false;

    return productOptions.edges.some((productOption) => {
        return productOption?.node.isVariantOption;
    });
};

export const getHasPickListItems = (productOptions: ProductOptionConnection): boolean => {
    if (!productOptions?.edges || productOptions.edges.length === 0) return false;

    return productOptions.edges.some((productOption) => {
        const node = productOption?.node;
        return node && 'displayStyle' in node && node.displayStyle.includes('ProductPickList');
    });
};

export const getTypeName = (
    bcProduct: Product,
    productOptions: ProductOptionConnection
): SupportedProductTypes => {
    const { variants } = bcProduct;

    const hasProductOptions = getHasVariantOptions(productOptions);
    // If BC product has picklist items we consider it as a bundle product
    // ref: https://support.bigcommerce.com/s/article/Product-Options-v3?language=en_US#picklist
    const hasPickListItems = getHasPickListItems(productOptions);

    /* Checks the combination of having both variants and product options. It's possible for a simple product
     * to have a variant option without configurable options*/
    const hasVariantOptions = variants?.edges && variants?.edges.length > 0 && hasProductOptions;

    if (hasVariantOptions) {
        return 'ConfigurableProduct';
    } else if (hasPickListItems) {
        return 'BundleProduct';
    } else {
        return 'SimpleProduct';
    }
};

export const getTransformedProductData = (
    bcProduct: Product,
    bundleItemProducts?: Maybe<Maybe<Maybe<ProductInterface>[]> | undefined>
): Maybe<ProductInterface & ConfigurableProduct & BundleProduct> => {
    if (!bcProduct) return null;

    try {
        const {
            availabilityV2,
            customFields,
            categories,
            defaultImage,
            entityId,
            id,
            inventory,
            metafields,
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

        const productType = getTypeName(bcProduct, productOptions);

        const fields = [...(customFields?.edges || []), ...(metafields?.edges || [])];

        /* Retrieved product meta or custom field defined in the admin.
         * NOTE: Make sure to add new product meta or custom fields coming from the admin to schema.json
         * */
        const attributesFromCustomAndMetaFields = getAttributesFromMetaAndCustomFields(fields, {
            htmlStringProperties: ['short_description'],
        });

        return {
            ...(availabilityV2?.status === 'Preorder' && { availability: availabilityV2 }),
            categories: getTransformedCategoriesData(categories),
            configurable_options: getTransformedConfigurableOptions(productOptions, productType),
            description: {
                html: bcProduct.description,
            },
            staged: true,
            uid: id, // The BC "id" comes through as an uid format e.g. "UHJvZHVjdDo0OTI=" = Product:492
            custom_attributes: [],
            id: entityId,
            items: getTransformBundleItems({
                productOptions,
                productType,
                bcVariants,
                bundleItemProducts,
            }),
            media_gallery_entries: getTransformedMediaGalleryEntries(bcProduct.images),
            meta_title: seo?.pageTitle || '',
            meta_keyword: seo?.metaKeywords || '',
            meta_description: seo?.metaKeywords || '',
            name,
            only_x_left_in_stock: getTransformedAvailableStock(inventory),
            price: getTransformedPrices(prices),
            price_range: getTransformedPriceRange(prices, productType, bcVariants),
            price_tiers: [],
            redirect_code: 0,
            rating_summary: reviewSummary?.summationOfRatings || 0,
            review_count: reviewSummary?.numberOfReviews || 0,
            related_products: getTransformedRelatedProducts(relatedProducts),
            sku,
            small_image: getTransformedSmallImage(defaultImage),
            stock_status: getTransformedSimpleStockStatus(availabilityV2, inventory),
            url_key: path.replace(slashAtStartOrEnd, ''),
            url_suffix: '',
            reviews: getTransformedReviews(reviews),
            variants: getTransformedVariants(bcVariants),
            // @ts-expect-error: this isn't included in the category prop types but is needed to prevent graphql from complaining
            __typename: productType,
            ...attributesFromCustomAndMetaFields,
        };
    } catch (error) {
        return logAndThrowError(error, getTransformedProductData.name);
    }
};

export const getTransformedProductsData = (bcProducts: {
    products: ProductConnection;
    filters?: SearchProductFilterConnection;
}): Maybe<Products & { items?: Maybe<Array<Maybe<ProductInterface & ConfigurableProduct>>> }> => {
    const { products, filters } = bcProducts;
    const { collectionInfo, edges } = products;

    return {
        aggregations: filters?.edges ? getTransformedProductAggregations(filters) : null,
        items: edges
            ? edges.map((product) => {
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
