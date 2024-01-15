import {
    CreateWishlistInput,
    WishlistItemInput,
    WishlistVisibilityEnum,
} from '@aligent/bigcommerce-resolvers';
import {
    AddWishlistItemsInput,
    CreateWishlistInput as BcCreateWishlistInput,
    UpdateWishlistInput as BcUpdateWishlistInput,
} from '@aligent/bigcommerce-operations';

export const getTransformedCreateWishlistArgs = (
    acArgs: CreateWishlistInput
): BcCreateWishlistInput => {
    return {
        name: acArgs.name,
        isPublic: acArgs.visibility === 'PUBLIC',
    };
};

export const getTransformedUpdateWishlistArgs = (acArgs: {
    wishlistId: string;
    name?: string | null;
    visibility?: WishlistVisibilityEnum | null;
}): BcUpdateWishlistInput => {
    const { wishlistId, name, visibility } = acArgs;
    return {
        entityId: Number(wishlistId),
        data: {
            ...(name && { name }),
            ...(visibility && { isPublic: visibility === 'PUBLIC' }),
        },
    };
};

export const getTransformedAddProductsToWishlistArgs = (acArgs: {
    wishlistId: string;
    wishlistItems: WishlistItemInput[];
}): AddWishlistItemsInput => {
    const { wishlistId, wishlistItems } = acArgs;

    const items = wishlistItems.map((item) => {
        return {
            productEntityId: Number(atob(String(item.uid || '')).replace('Product:', '')),
        };
    });

    return {
        entityId: Number(wishlistId),
        items,
    };
};
