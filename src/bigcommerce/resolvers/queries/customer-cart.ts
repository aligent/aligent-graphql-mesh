import { Cart, QueryResolvers } from '@mesh';
import { getCheckout } from '../../apis/graphql/checkout';
import { getTransformedCartData } from '../../factories/transform-cart-data';
import { GraphQlContext } from '../../../meshrc/types';
import { getBcCustomerId } from '../../../utils';
import { getCartIdFromBcCustomerAttribute } from '../../apis/graphql';

const UNDEFINED_CART = {
    id: '',
    items: [],
    total_quantity: 0,
    available_gift_wrappings: [],
    gift_receipt_included: false,
    is_virtual: false,
    printed_card_included: false,
    shipping_addresses: [],
};

export const customerCartResolver: QueryResolvers['customerCart'] = {
    resolve: async (_root, _args, context: GraphQlContext, _info): Promise<Cart> => {
        const bcCustomerId = getBcCustomerId(context);

        if (!bcCustomerId) {
            throw new Error(`An authorized user is required to perform this query.`);
        }

        const cartId = await getCartIdFromBcCustomerAttribute(bcCustomerId);

        if (!cartId) return UNDEFINED_CART;

        const response = await getCheckout(cartId, bcCustomerId);

        if (!response?.entityId) return UNDEFINED_CART;

        return getTransformedCartData(response);
    },
};
