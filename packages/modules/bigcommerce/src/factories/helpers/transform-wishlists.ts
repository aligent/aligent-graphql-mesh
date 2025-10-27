import { WishlistConnection, WishlistItemConnection } from '@aligent/bigcommerce-operations';
import {
    ConfigurableProduct,
    Maybe,
    ProductInterface,
    Wishlist,
    WishlistItemInterface,
    WishlistVisibilityEnum,
} from '@aligent/bigcommerce-resolvers';
import { isTruthy } from '@aligent/utils';
import { getTransformedProductData } from '../transform-products-data';

export const getTransformedWishlists = (wishlists: WishlistConnection): Array<Wishlist> => {
    if (!wishlists.edges) return [];
    return wishlists.edges
        .map((edge) => {
            if (!edge || !edge.node.items.edges) return null;
            const { entityId, isPublic, name, token } = edge.node;
            const transformedWishlistItems = getTransformedWishListItems(edge.node.items);
            return {
                id: String(entityId),
                name,
                visibility: getWishListVisibility(isPublic),
                items_v2: {
                    items: transformedWishlistItems,
                    page_info: {
                        page_size: null,
                        total_pages: null,
                        current_page: null,
                    },
                },
                items_count: edge.node.items.edges.length,
                sharing_code: token, // Need to confirm this is equivalent
                updated_at: '',
            };
        })
        .filter(isTruthy);
};

export const getTransformedWishListItems = (
    wishListItems: WishlistItemConnection
): Array<WishlistItemInterface> => {
    if (!wishListItems.edges) return [];
    return wishListItems.edges
        .map((wishlistItem) => {
            if (!wishlistItem || !wishlistItem.node || !wishlistItem.node.product) return null;
            const { entityId, variantEntityId: wishlistItemVariantId } = wishlistItem.node;
            const transformedProduct = getTransformedProductData(
                wishlistItem.node.product,
                undefined,
                wishlistItemVariantId
            );
            return {
                // This is a temporary fix until we can get the correct __typeOf or __resolveType functions working
                __typename: getWishlistItemInterfaceType(transformedProduct),
                id: String(entityId),
                quantity: 1, // Value not in BC
                added_at: 'null', // Value not in BC
                customizable_options: [], // Value not in BC
                description: wishlistItem.node.product.description,
                product: transformedProduct,
            };
        })
        .filter(isTruthy);
};

export const getWishListVisibility = (visibility: boolean): WishlistVisibilityEnum => {
    if (visibility) return 'PUBLIC';
    return 'PRIVATE';
};

/* istanbul ignore next */
export const getWishlistItemInterfaceType = (
    product: Maybe<ProductInterface | ConfigurableProduct>
): 'SimpleWishlistItem' | 'ConfigurableWishlistItem' => {
    // @ts-expect-error: This does exists, since we added it getTransformedProductData()
    if (product.__typename === 'ConfigurableProduct') return 'ConfigurableWishlistItem';
    return 'SimpleWishlistItem';
};
