import { Customer, QueryResolvers } from '../../../meshrc/.mesh';
import { mockCustomer } from '../mocks/customer';
//import { getBcCustomer } from '../requests/bc-graphql-calls';

export const customerResolver: QueryResolvers['customer'] = {
    resolve: async (_root, _args, _context, _info) => {
        // const customerImpersonationToken = await context.cache.get('customerImpersonationToken');
        // const bcCustomerId = await context.cache.get('x-bc-customer-id');

        // Sample for using the cust imp token with the bc user id from mesh-token
        // const customer = await getBcCustomer(customerImpersonationToken, bcCustomerId);

        return mockCustomer as unknown as Customer;
    },
};
