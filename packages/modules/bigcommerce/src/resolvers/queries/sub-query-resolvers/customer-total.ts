import { CustomerOrderResolvers } from '@aligent/bigcommerce-resolvers';
import { getDiscounts } from '../../../apis/rest/order';
import { getTransformedOrderDiscounts } from '../../../factories/helpers/transform-customer-order-discounts';
import { getSelectionInSelectionSet } from '@aligent/utils';

/**
 * This is a sub-resolver it is executed after customerOrdersResolver when items was specified in the query
 * The sub-resolvers is configured here in the scr/resolves/index.ts
 */
export const customerTotalResolver: CustomerOrderResolvers['total'] = {
    resolve: async (root, _args, _context, info) => {
        /* The already retrieved and transformed total information from the customerOrderResolvers
         * at packages/modules/bigcommerce/src/resolvers/queries/sub-query-resolvers/customerOrders.ts */
        const totalFromCustomerOrder = root.total;

        if (!totalFromCustomerOrder) return null;

        const orderId = root.order_number;

        /* Check if "discounts" is asked for in the graphql request */
        const isDiscountsPropInQuery = !!getSelectionInSelectionSet(
            'discounts',
            info.fieldNodes[0].selectionSet
        );

        /* If "discounts" isn't asked for in the graphql request then don't make a network request
         * for the data. This is beneficial on order listing pages.
         */
        const discounts = isDiscountsPropInQuery ? await getDiscounts(orderId) : [];

        const currencyCode = root.currency_code;

        const transformedDiscounts = getTransformedOrderDiscounts(discounts, currencyCode);

        return { ...totalFromCustomerOrder, discounts: transformedDiscounts };
    },
};
