import { CustomerOutput, MutationResolvers } from '../../../meshrc/.mesh';
import { CustomContext } from '../../types';
import { mockUpdateCustomer } from '../mocks/update-customer';

export const updateCustomerResolver: MutationResolvers<CustomContext>['updateCustomerV2']= {
    resolve: (_root, _args, _context, _info) => {
        return (mockUpdateCustomer as unknown) as CustomerOutput;
    },
};
