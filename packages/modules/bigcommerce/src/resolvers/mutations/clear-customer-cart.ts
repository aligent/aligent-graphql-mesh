import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { getBcCustomerId } from '../../utils';
import { deleteCart } from '../../apis/graphql/delete-cart';

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
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const bcCustomerId = getBcCustomerId(context);

        const response = await deleteCart(args.cartUid, customerImpersonationToken, bcCustomerId);

        return {
            cart: UNDEFINED_CART,
            status: !!response,
        };
    },
} satisfies MutationResolvers['clearCustomerCart'];
