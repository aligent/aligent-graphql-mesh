import { BC_VariantConnection } from '@mesh/external/BigCommerceGraphqlApi';
import { ConfigurableVariant, Maybe } from '@mesh';
import { getTransformedImage } from './transform-images';
import { getTransformedPriceRange } from './transform-product-prices';
import { getTransformedProductsAttributes } from './transform-product-attributes';
import { getTransformedAvailableStock, getTransformedStockStatus } from './transform-stock';

export const getTransformedVariants = (
    variants: Maybe<BC_VariantConnection>
): Maybe<Array<Maybe<ConfigurableVariant>>> => {
    if (!variants?.edges || variants?.edges.length === 0) return [];

    const variantsResults = variants.edges
        .map((variant) => {
            if (!variant?.node) return null;
            const { defaultImage, entityId, id, inventory, options, prices, sku } = variant.node;

            return {
                attributes: getTransformedProductsAttributes(options),
                product: {
                    custom_attributes: [],
                    id: entityId,
                    media_gallery_entries: [getTransformedImage(defaultImage)].filter(Boolean),
                    only_x_left_in_stock: getTransformedAvailableStock(inventory),
                    price_range: getTransformedPriceRange(prices || null, 'SimpleProduct', null),
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
                    stock_status: getTransformedStockStatus(inventory),
                    uid: id,
                },
            };
        })
        .filter(Boolean);

    return variantsResults;
};
