import { CreateWishlistInput } from '@aligent/bigcommerce-resolvers';
import { CreateWishlistInput as BcCreateWishlistInput } from '@aligent/bigcommerce-operations';

export const getTransformedCreateWishlistArgs = (
    acArgs: CreateWishlistInput
): BcCreateWishlistInput => {
    return {
        name: acArgs.name,
        isPublic: acArgs.visibility === 'PUBLIC',
    };
};
