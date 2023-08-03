import { CustomerOutput, MutationResolvers } from '../../../meshrc/.mesh';
import { CustomContext } from '../../types';
import { mockCreateCustomer } from '../mocks/create-customer';

export const createCustomerResolver: MutationResolvers<CustomContext>['createCustomer']= {
    resolve: (_root, _args, _context, _info) => {
        return (mockCreateCustomer as unknown) as CustomerOutput;
    },
};
