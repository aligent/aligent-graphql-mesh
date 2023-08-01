import { Customer, QueryResolvers } from '../../../meshrc/.mesh';
import { mockCustomer } from '../mocks/customer';

export const customerResolver: QueryResolvers['customer']= {
    resolve: (_root, _args, _context, _info) => {
        return (mockCustomer as unknown) as Customer;
    },
};
