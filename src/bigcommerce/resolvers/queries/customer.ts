import { Customer, QueryResolvers } from '../../../meshrc/.mesh';
import { mockCustomer } from '../mocks/customer';

export const customerResolver: QueryResolvers['customer'] = {
    resolve: async (_root, _args, context, _info) => {
        if (!context.headers.customerImpersonationToken) {
            throw new Error('No token generated in 🕸️ Mesh plugin');
        }

        // Sample for using the cust imp token with the bc user id header
        // const customer = await getBcCustomer(
        //     context.headers.customerImpersonationToken,
        //     context.headers['x-bc-customer-id']
        // );

        return mockCustomer as unknown as Customer;
    },
};
