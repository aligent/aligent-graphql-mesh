import { CustomerResolvers } from '@aligent/bigcommerce-resolvers';
import { getTransformedWishlists } from '../../../factories/helpers/transform-wishlists';
import { getCustomerWishlists } from '../../../apis/graphql';
import { getBcCustomerIdFromMeshToken } from '../../../utils';

export const customerWishlistsResolver: CustomerResolvers['wishlists'] = {
    resolve: async (_root, _args, context, _info) => {
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const wishlists = await getCustomerWishlists(bcCustomerId, customerImpersonationToken);

        return getTransformedWishlists(wishlists);
    },
};
