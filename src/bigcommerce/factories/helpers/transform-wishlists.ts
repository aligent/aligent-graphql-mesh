import { Maybe, Wishlist, WishlistItemInterface, WishlistVisibilityEnum } from "@mesh";
import { BC_WishlistConnection, BC_WishlistItemEdge } from "@mesh/external/BigCommerceGraphqlApi";
import { getTransformedProductData } from "../transform-products-data";

export const getTransformedWishlists = (wishlists: BC_WishlistConnection): Wishlist[] => {
    if(!wishlists.edges) return []
    
    return wishlists.edges.map((edge) => {
        if(!edge?.node || !edge?.node.items.edges) return null
        const { entityId, isPublic, name, token } = edge.node
        return {
            id: entityId,
            name,
            visibility: getWishListVisibility(isPublic),
            items_v2:{
                items: getTransformedWishListItems(edge?.node.items.edges),
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

const getTransformedWishListItems = (wishListItems: Maybe<Array<Maybe<BC_WishlistItemEdge>>>): Maybe<WishlistItemInterface>[] => {
    if(!wishListItems) return []
    return wishListItems.map((item) => {
        if(!item?.node) return null
        const { entityId } = item.node
        return {
           id: String(entityId),
           quantity: 1,
           added_at: "null",
           customizable_options: [],
           description: item.node.product.description,
           product: getTransformedProductData(item.node.product)
        }
    })
}

const getWishListVisibility = (visibility: boolean): WishlistVisibilityEnum => {
    if(visibility) return 'PUBLIC'
    return 'PRIVATE'
}