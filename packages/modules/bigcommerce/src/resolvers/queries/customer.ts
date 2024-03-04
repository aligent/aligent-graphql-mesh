import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import {
    getCustomerAttributesFromFormFields,
    transformBcCustomer,
} from '../../factories/transform-customer-data';
import { getACustomer } from '../../apis/rest/customer';
import { getBcCustomerIdFromMeshToken } from '../../utils';

/**
 * CustomerOrders are fetched via the sub-resolver: customerOrdersResolver
 * The sub-resolvers is configured here in the scr/resolves/index.ts
 */
export const customerResolver = {
    resolve: async (_root, _args, context, _info) => {
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        const customer = await getACustomer(bcCustomerId);

        /* Retrieved custom customer properties defined in the admin.
         * NOTE: Make sure to add new customer properties coming from the admin to schema.json
         * */
        const customerAttributesFromFormFields = getCustomerAttributesFromFormFields(
            customer.form_fields
        );

        return {
            ...transformBcCustomer(customer),
            ...customerAttributesFromFormFields,
        };
    },
} satisfies QueryResolvers['customer'];
