import { Customer, MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { mockChangeCustomerPassword } from '../mocks/change-customer-password';

export const changeCustomerPasswordResolver: MutationResolvers['changeCustomerPassword'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockChangeCustomerPassword as unknown as Customer;
    },
};
