import { Cart, Maybe, QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getBcCustomerId } from '@aligent/utils';
import { getEnrichedCart } from '../../apis/graphql/enriched-cart';

export const cartResolver: QueryResolvers['cart'] = {
    resolve: async (_root, args, context: GraphQLModules.Context, _info): Promise<Maybe<Cart>> => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
        const bcCustomerId = getBcCustomerId(context);

        return getEnrichedCart(args, bcCustomerId, customerImpersonationToken);
    },
};
