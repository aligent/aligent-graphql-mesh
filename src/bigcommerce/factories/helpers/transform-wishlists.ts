import { Maybe, Wishlist, WishlistItemInterface, WishlistVisibilityEnum } from '@mesh';
import {
    BC_WishlistConnection,
    BC_WishlistItemConnection,
} from '@mesh/external/BigCommerceGraphqlApi';
import { getTransformedProductData } from '../transform-products-data';

export const getTransformedWishlists = (
    wishlists: BC_WishlistConnection
): Array<Maybe<Wishlist>> => {
    if (!wishlists.edges) return [];

    return wishlists.edges.map((edge) => {
        if (!edge?.node || !edge?.node.items.edges) return null;
        const { entityId, isPublic, name, token } = edge.node;
       // console.log(JSON.stringify(edge.node.items), '/n');
        return {
            id: String(entityId),
            name,
            visibility: getWishListVisibility(isPublic),
            items_v2: {
                items: getTransformedWishListItems(edge.node.items),
                page_info: {
                    page_size: null,
                    total_pages: null,
                    current_page: null,
                },
            },
            items_count: edge?.node.items.edges?.length,
            sharing_code: token, // Need to confirm this is equivalent
            updated_at: '',
        };
    });
};

export const getTransformedWishListItems = (
    wishListItems: BC_WishlistItemConnection
): Array<Maybe<WishlistItemInterface>> => {
    if (!wishListItems.edges) return [];
    return wishListItems.edges.map((wishlistItem) => {
        if (!wishlistItem?.node) return null;
        const { entityId } = wishlistItem.node;
        const transformedProduct = getTransformedProductData(wishlistItem.node.product);
        console.log({transformedProduct});
        return {
            // __typename: 'SimpleWishlistItem'
            id: String(entityId),
            quantity: 1, // Value not in BC
            added_at: 'null', // Value not in BC
            customizable_options: [],
            description: wishlistItem.node.product.description,
            product: transformedProduct,
        };
    });
};

export const getWishListVisibility = (visibility: boolean): WishlistVisibilityEnum => {
    if (visibility) return 'PUBLIC';
    return 'PRIVATE';
};
