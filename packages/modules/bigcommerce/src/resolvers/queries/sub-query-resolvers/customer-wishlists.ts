import { CustomerResolvers } from '@aligent/bigcommerce-resolvers';
import { getTransformedWishlists } from '../../../factories/helpers/transform-wishlists';
import { getCustomerWishlists } from '../../../apis/graphql';
import { getBcCustomerIdFromMeshToken } from '../../../utils';
import { retrieveCustomerImpersonationTokenFromCache } from '../../../apis/rest';

export const customerWishlistsResolver: CustomerResolvers['wishlists'] = {
    resolve: async (_root, _args, context, _info) => {
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);
        const wishlists = await getCustomerWishlists(bcCustomerId, customerImpersonationToken);

        return getTransformedWishlists(wishlists);
    },
};
