import { MutationResolvers } from '../../../meshrc/.mesh';
import { mockCreateCustomer } from '../mocks/create-customer';

export const createCustomerResolver: MutationResolvers['createCustomer']= {
    resolve: (_root, _args, _context, _info) => {
        return mockCreateCustomer;
    },
};
