import { Cart, Maybe, QueryResolvers } from '@mesh';
import { GraphQlContext } from '../../../meshrc/types';
import { getBcCustomerId } from '../../../utils';
import { getEnrichedCart } from '../../apis/graphql/enriched-cart';

export const cartResolver: QueryResolvers['cart'] = {
    resolve: async (_root, args, context: GraphQlContext, _info): Promise<Maybe<Cart>> => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
        const bcCustomerId = getBcCustomerId(context);

        return getEnrichedCart(args, bcCustomerId, customerImpersonationToken);
    },
};
