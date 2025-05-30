import {
    CreateWishlistInput,
    WishlistItemInput,
    WishlistItemInterface,
    WishlistVisibilityEnum,
} from '@aligent/bigcommerce-resolvers';
import {
    AddWishlistItemsInput,
    CreateWishlistInput as BcCreateWishlistInput,
    UpdateWishlistInput as BcUpdateWishlistInput,
    DeleteWishlistItemsInput,
    ProductConnection,
} from '@aligent/bigcommerce-operations';
import { compareArraysRegardlessElementOrder } from '../../utils/compare-arrays';

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

export const getTransformedAddProductsToWishlistArgs = (
    acArgs: {
        wishlistId: string;
        wishlistItems: WishlistItemInput[];
    },
    bcDetailedProducts?: ProductConnection | null
): AddWishlistItemsInput => {
    const { wishlistId, wishlistItems } = acArgs;

    const items = wishlistItems.map((item) => {
        const productEntityId = Number(atob(String(item.uid || '')).replace('Product:', ''));
        let variantEntityId;

        //Magento based arguments are like
        //selected_options: ["Y29uZmlndXJhYmxlLzE2OC8yMzc=", "Y29uZmlndXJhYmxlLzE2OS8yNDU="]
        //which were generated by product data transformer by option ids `configurable/${optionId}/${optionValueId}`
        if (item.selected_options?.length) {
            const optionEntityIds = item.selected_options.map((option) => {
                if (!option) {
                    return;
                }
                const entityIdsArr = atob(option).split('/').slice(1);

                return entityIdsArr;
            });

            const bcProduct = bcDetailedProducts?.edges?.find(
                (product) => product?.node.entityId === productEntityId
            );

            const selectedVariant = bcProduct?.node.variants.edges?.find((variant) => {
                const optionIds = variant?.node.options.edges?.map((option) => {
                    return [
                        String(option?.node.entityId),
                        String(option?.node?.values?.edges?.[0]?.node.entityId),
                    ];
                });

                if (!compareArraysRegardlessElementOrder(optionEntityIds, optionIds)) {
                    return null;
                }

                return variant;
            });

            variantEntityId = selectedVariant?.node.entityId;
        }

        return {
            productEntityId,
            ...(variantEntityId && { variantEntityId }),
        };
    });

    return {
        entityId: Number(wishlistId),
        items,
    };
};

export const getTransformedDeleteWishlistItemsArgs = (acArgs: {
    wishlistId: string;
    wishlistItemsIds: string[];
}): DeleteWishlistItemsInput => {
    const { wishlistId, wishlistItemsIds } = acArgs;

    const itemEntityIds = wishlistItemsIds.map((id) => {
        return Number(id);
    });

    return {
        entityId: Number(wishlistId),
        itemEntityIds,
    };
};

export const getTransformedCopyProductsBetweenWishlistsArgs = (acArgs: {
    wishlistId: string;
    wishlistItems: WishlistItemInterface[];
}): AddWishlistItemsInput => {
    const { wishlistId, wishlistItems } = acArgs;

    const items = wishlistItems.map((item) => {
        return {
            productEntityId: Number(atob(String(item.product?.uid || '')).replace('Product:', '')),
        };
    });

    return {
        entityId: Number(wishlistId),
        items,
    };
};
