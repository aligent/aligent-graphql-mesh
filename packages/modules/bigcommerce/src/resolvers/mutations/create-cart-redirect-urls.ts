import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { createCustomerLoginToken, getBcCustomerId } from '../../utils';
import { createCartRedirectUrls } from '../../apis/rest/cart';

export const createCartRedirectUrlsResolver: MutationResolvers['createCartRedirectUrls'] = {
    resolve: async (_root, args, context, _info) => {
        const cartRedirectUrls = await createCartRedirectUrls(args.cartId);

        if (!cartRedirectUrls?.checkout_url) return null;

        // Guest Users dont need to createCustomerLoginToken with customer_id and redirect_to values
        const bcCustomerId = getBcCustomerId(context);
        if (!bcCustomerId) {
            return { data: cartRedirectUrls };
        }

        const { origin, pathname, search } = new URL(cartRedirectUrls.checkout_url);

        // Need to create a jwt signed by the BC client secret, which was created with the x-auth-token
        const customerLoginToken = createCustomerLoginToken(bcCustomerId, `${pathname}${search}`);

        const checkoutRedirectUrl = `${origin}/login/token/${customerLoginToken}`;

        return {
            data: {
                checkout_url: checkoutRedirectUrl,
                cart_url: cartRedirectUrls.cart_url,
                embedded_checkout_url: cartRedirectUrls.embedded_checkout_url,
            },
        };
    },
};
