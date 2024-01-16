import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { CheckoutService } from '../../services';
import { AxiosError } from 'axios';

const getCreateCheckoutSourceError = (shoppingListId: number) => {
    return `Could not create a checkout source for shopping list id "${shoppingListId}"`;
};

export const createCartRedirectUrlsResolver: MutationResolvers['createCartRedirectUrls'] = {
    resolve: async (_root, args, context, _info) => {
        const shoppingListId = Number(args.cartId);

        if (isNaN(shoppingListId)) {
            throw new Error('The "cartId" input string should only contain numbers');
        }

        const checkoutService: CheckoutService = context.injector.get(CheckoutService);

        try {
            const checkout = await checkoutService.getCheckout(shoppingListId);

            if (!checkout?.id) {
                throw new Error(getCreateCheckoutSourceError(shoppingListId));
            }

            /* Form a cartUid as a string encoded object containing the cart and checkout ids.
             * Once this comes back to the mesh we know we can query for the shopping list and corresponding
             * checkout without having to go through the "/checkoutsources" api. */
            const cartUid = btoa(`{ cart_id: ${shoppingListId}, checkout_id: ${checkout.id} }`);

            /* Once a checkout source is successfully created, tell the PWA it can redirect to the checkout
             * by returning the checkout_url  */
            return {
                data: {
                    cart_url: '',
                    checkout_url: `/checkout?id=${cartUid}`,
                    embedded_checkout_url: '',
                },
            };
        } catch (e) {
            if (e instanceof AxiosError && e.response?.data?.[0]?.detail) {
                throw new Error(e.response.data[0].detail);
            }

            throw new Error(getCreateCheckoutSourceError(shoppingListId));
        }
    },
};
