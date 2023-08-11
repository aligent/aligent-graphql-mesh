import { Maybe, Wishlist, WishlistItemInterface, WishlistVisibilityEnum } from "@mesh";
import { BC_WishlistConnection, BC_WishlistItemConnection } from "@mesh/external/BigCommerceGraphqlApi";

export const getTransformedWishlists = (wishlists: BC_WishlistConnection):  Array<Maybe<Wishlist>> => {
    if(!wishlists.edges) return []
    
    return wishlists.edges.map((edge) => {
        if(!edge?.node || !edge?.node.items.edges) return null
        const { entityId, isPublic, name, token } = edge.node
        return {
            id: String(entityId),
            name,
            visibility: getWishListVisibility(isPublic),
            items_v2:{
                items: getTransformedWishListItems(edge.node.items),
                page_info: {
                    page_size: null,
                    total_pages: null,
                    current_page: null
                }
            },
            items_count: edge?.node.items.edges?.length,
            sharing_code: token, // Im not sure if this is the same as AC sharing code
            updated_at: "", 

             
        }
    })
}

const getTransformedWishListItems = (wishListItems: BC_WishlistItemConnection): Array<Maybe<WishlistItemInterface>>=> {
    if(!wishListItems.edges) return []
    return wishListItems.edges.map((wishlistItem) => {
        if(!wishlistItem?.node) return null
        const { entityId } = wishlistItem.node
        return {
           id: String(entityId),
           quantity: 1,
           added_at: "null",
           customizable_options: [],
           description: wishlistItem.node.product.description,
           product: null // todo product transform
        }
    })
}

const getWishListVisibility = (visibility: boolean): WishlistVisibilityEnum => {
    if(visibility) return 'PUBLIC'
    return 'PRIVATE'
}