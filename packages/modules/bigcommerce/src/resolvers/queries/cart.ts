import { Cart, Maybe, QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getEnrichedCart } from '../../apis/graphql/enriched-cart';

export const cartResolver: QueryResolvers['cart'] = {
    resolve: async (_root, args, context: GraphQLModules.Context, _info): Promise<Maybe<Cart>> => {
        return getEnrichedCart(args, context);
    },
};
