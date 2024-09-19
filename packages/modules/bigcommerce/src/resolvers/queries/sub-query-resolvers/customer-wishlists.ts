import { CustomerResolvers } from '@aligent/bigcommerce-resolvers';
import { getTransformedWishlists } from '../../../factories/helpers/transform-wishlists';
import { getCustomerWishlists, retrieveStoreConfigsFromCache } from '../../../apis/graphql';
import { getBcCustomerIdFromMeshToken } from '../../../utils';
import { retrieveCustomerImpersonationTokenFromCache } from '../../../apis/rest';
import { getIncludesTax } from '../../../utils/get-tax';

export const customerWishlistsResolver = {
    resolve: async (_root, _args, context, _info) => {
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);

        const storeConfig = await retrieveStoreConfigsFromCache(context);
        const { tax: taxSettings } = storeConfig;

        const wishlists = await getCustomerWishlists(bcCustomerId, customerImpersonationToken, {
            includeTax: getIncludesTax(taxSettings?.pdp),
        });

        return getTransformedWishlists(wishlists);
    },
} satisfies CustomerResolvers['wishlists'];
