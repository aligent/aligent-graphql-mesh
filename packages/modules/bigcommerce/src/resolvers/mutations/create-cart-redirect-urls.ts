import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { createCustomerLoginToken, getBcCustomerId } from '../../utils';

export const createCartRedirectUrlsResolver: MutationResolvers['createCartRedirectUrls'] = {
    resolve: async (root, args, context, info) => {
        const cartRedirectUrls =
            await context.BigCommerceManagementRestApi.Mutation.createCartRedirectUrls({
                root,
                args,
                context,
                info,
            });

        if (!cartRedirectUrls?.data?.checkout_url) return null;

        // Guest Users dont need to createCustomerLoginToken with customer_id and redirect_to values
        const bcCustomerId = getBcCustomerId(context);
        if (!bcCustomerId) {
            return cartRedirectUrls;
        }

        const { origin, pathname, search } = new URL(cartRedirectUrls.data.checkout_url);

        // Need to create a jwt signed by the BC client secret, which was created with the x-auth-token
        const customerLoginToken = createCustomerLoginToken(bcCustomerId, `${pathname}${search}`);

        const checkoutRedirectUrl = `${origin}/login/token/${customerLoginToken}`;

        return {
            data: {
                checkout_url: checkoutRedirectUrl,
                cart_url: cartRedirectUrls.data.cart_url,
                embedded_checkout_url: cartRedirectUrls.data.embedded_checkout_url,
            },
        };
    },
};
