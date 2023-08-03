import {
    BC_VariantConnection,
    ConfigurableVariant,
    Maybe,
    ProductStockStatus,
} from '../../../meshrc/.mesh';
import { getTransformedImage } from './transform-images';
import { getTransformedPriceRange } from './transform-product-prices';
import { getTransformedOptions } from './transform-product-options';

export const getTransformedVariants = (
    variants: BC_VariantConnection
): Maybe<Array<Maybe<ConfigurableVariant>>> => {
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
    });

    return variantsResults;
};
