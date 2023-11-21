import { ConfigurableVariant } from '@aligent/orocommerce-resolvers';
import {Product as OroProduct} from "@aligent/orocommerce-graphql-module";
import {getTransformedMediaGalleryEntries, getTransformedSmallImage} from "./images-transformer";
import {NO_PRICES_RESPONSE} from "./products-data-transformer";
import {getTransformedProductStockStatus} from "./stock-status-transformer";
import {getTransformedProductsAttributes} from "./product-attributes-transformer";

export const getTransformedVariants = (
    oroProductData: OroProduct
): Array<ConfigurableVariant> => {

    const variantsResults: ConfigurableVariant[] = oroProductData.included?.map(entity => {
        if (entity.type === 'products') {
            const variant = <OroProduct>entity;
            if (oroProductData.included) {
                variant.included = this.getEntitiesRelatedToProduct(oroProductData.included, variant.id);
            }
            return {
                attributes: getTransformedProductsAttributes(variant),
                product: {
                    id: Number(variant.id),
                    media_gallery_entries: getTransformedMediaGalleryEntries(variant),
                    price_range: NO_PRICES_RESPONSE, // TODO
                    price_tiers: [], // TODO
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
                    sku: variant.attributes.sku,
                    small_image: getTransformedSmallImage(variant),
                    staged: false,
                    stock_status: getTransformedProductStockStatus(variant),
                    uid: btoa(variant.id),
                },
                __typename: "ConfigurableVariant"
            };
        }
    });

    return variantsResults;
};
