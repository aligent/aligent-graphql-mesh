import { Cart, Maybe, QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getEnrichedCart } from '../../apis/graphql/enriched-cart';
import { getBcCustomerId } from '../../utils';

export const cartResolver: QueryResolvers['cart'] = {
    resolve: async (_root, args, context: GraphQLModules.Context, _info): Promise<Maybe<Cart>> => {
        const bcCustomerId = getBcCustomerId(context);
        return getEnrichedCart(args, context, bcCustomerId);
    },
};
