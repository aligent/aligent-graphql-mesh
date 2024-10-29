import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { BigCommerceCustomerService } from '../../services';
import { BigCommerceGraphQlClient } from '../../clients';

export const UNDEFINED_CART = {
    id: '',
    items: [],
    total_quantity: 0,
    available_gift_wrappings: [],
    gift_receipt_included: false,
    is_virtual: false,
    printed_card_included: false,
    shipping_addresses: [],
};

export const clearCustomerCartResolver = {
    resolve: async (_root, args, context, _info) => {
        if (!args.cartUid) {
            return logAndThrowError('Missing cart uid');
        }

        const customerService = context.injector.get(BigCommerceCustomerService);
        const headers = customerService.customerHeaders;

        const graphQlClient = context.injector.get(BigCommerceGraphQlClient);
        const status = await graphQlClient
            .deleteCart({ cartEntityId: args.cartUid }, { headers })
            .then((response) => {
                if (response.errors) {
                    logAndThrowError(response.errors);
                }
                return response.data?.cart.deleteCart;
            });

        return {
            cart: UNDEFINED_CART,
            status: !!status,
        };
    },
} satisfies MutationResolvers['clearCustomerCart'];
