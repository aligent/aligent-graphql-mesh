import { VariantConnection } from '@aligent/bigcommerce-operations';
import { ConfigurableVariant, Maybe } from '@aligent/bigcommerce-resolvers';
import { getTransformedImage, getTransformedSmallImage } from './transform-images';
import { getTransformedPriceRange, getTransformedPriceTiers } from './transform-product-prices';
import { getTransformedProductsAttributes } from './transform-product-attributes';
import { getTransformedAvailableStock, getTransformedVariantStockStatus } from './transform-stock';
import { getTransformProductLocations } from './transform-product-locations';
import { isTruthy } from '@aligent/utils';

export const getTransformedVariants = (
    variants: Maybe<VariantConnection>
): Maybe<Array<ConfigurableVariant>> => {
    if (!variants?.edges || variants?.edges.length === 0) return [];

    const variantsResults = variants.edges
        .map((variant) => {
            if (!variant?.node) return null;
            const { defaultImage, entityId, id, inventory, isPurchasable, options, prices, sku } =
                variant.node;

            return {
                attributes: getTransformedProductsAttributes(options),
                product: {
                    by_location: getTransformProductLocations(inventory),
                    custom_attributes: [],
                    id: entityId,
                    media_gallery_entries: [getTransformedImage(defaultImage)].filter(isTruthy),
                    only_x_left_in_stock: getTransformedAvailableStock(inventory),
                    price_range: getTransformedPriceRange(prices || null, 'SimpleProduct', null),
                    price_tiers: getTransformedPriceTiers(prices || null),
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
                    small_image: getTransformedSmallImage(defaultImage),
                    staged: false,
                    stock_status: getTransformedVariantStockStatus(inventory, isPurchasable),
                    uid: id,
                },
            };
        })
        .filter(isTruthy);

    return variantsResults;
};
