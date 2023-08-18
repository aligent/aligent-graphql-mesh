import { CustomerOutput, MutationResolvers } from '@mesh';
import { mockUpdateCustomer } from '../mocks/update-customer';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';

export const updateCustomerResolver: MutationResolvers['updateCustomer'] = {
    resolve: (_root, { input: customerInput }, context, _info) => {
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        return mockUpdateCustomer as unknown as CustomerOutput;
    },
};
