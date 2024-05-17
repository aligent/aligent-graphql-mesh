import { GraphQLResolveInfo } from 'graphql/type';
import { getEnrichedCart } from '../enriched-cart';
import { Checkout, Metafields } from '@aligent/bigcommerce-operations';

// BC checkout mutations are very likely to hit a complexity limit when querying a large amount of
// cart data, which breaks the Graphql request. Requesting a smaller amount of data with the mutation,
// then requesting the the Cart through query is the walk around for now

export const getEnrichedCartAfterCheckoutMutation = async (
    bcCheckoutMutation: () => Promise<Checkout | Metafields>,
    cart_id: string,
    context: GraphQLModules.ModuleContext,
    info: GraphQLResolveInfo,
    bcCustomerId: number | null
) => {
    await bcCheckoutMutation();

    const enrichedCart = await getEnrichedCart({ cart_id }, context, bcCustomerId);

    return enrichedCart;
};
