import { getCart } from '../requests/bc-graphql-calls';
import { getTransformedCartData } from '../../factories/transform-cart-data';

export const cartResolver = {
    resolve: async (
        root: any,
        args: { cart_id: string },
        context: {
            headers: { authorization: string };
        },
        info: any
    ): Promise<any> => {
        const response = await getCart(args.cart_id);
        if (!response?.entityId) return null;
        return getTransformedCartData(response);
    },
};
