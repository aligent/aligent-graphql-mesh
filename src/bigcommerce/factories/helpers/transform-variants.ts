import {
    BC_VariantConnection,
    ConfigurableVariant,
    Maybe,
    ProductStockStatus,
} from '../../../meshrc/.mesh';
import { getTransformedImage } from './transform-images';
import { getTransformedPriceRange } from './transform-product-prices';
import { getTransformedProductsAttributes } from './transform-product-attributes';

export const getTransformedVariants = (
    variants: Maybe<BC_VariantConnection>
): Maybe<Array<Maybe<ConfigurableVariant>>> => {
    if (!variants?.edges || variants?.edges.length === 0) return [];

    const variantsResults = variants.edges
        .map(variant => {
            if (!variant?.node) return null;
            const { defaultImage, entityId, id, inventory, options, prices, sku } = variant.node;

            return {
                attributes: getTransformedProductsAttributes(options),
                product: {
                    custom_attributes: [],
                    id: entityId,
                    media_gallery_entries: [getTransformedImage(defaultImage)].filter(Boolean),
                    price_range: getTransformedPriceRange(prices),
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
        })
        .filter(Boolean);

    return variantsResults;
};
