import { QueryResolvers } from '../../../meshrc/.mesh';
import { getCart } from '../requests/bc-graphql-calls';
import { getTransformedCartData } from '../../factories/transform-cart-data';

export const cartResolver: QueryResolvers['cart'] = {
    resolve: async (root, args, context, info): Promise<any> => {
        const response = await getCart(args.cart_id);
        if (!response?.entityId) return null;
        return getTransformedCartData(response);
    },
};
