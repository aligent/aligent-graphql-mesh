import { Customer, MutationResolvers } from '@mesh';
import { mockChangeCustomerPassword } from '../mocks/change-customer-password';
import {
    transformBcCustomerToAcCustomerForMutation,
    transformCustomerForMutation,
    transformCustomerPasswordChange,
} from '../../factories/transform-customer-data';
import { updateCustomer } from '../../apis/rest/customer';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';

export const changeCustomerPasswordResolver: MutationResolvers['changeCustomerPassword'] = {
    resolve: async (_root, { currentPassword, newPassword }, context, _info) => {
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        const bcCustomer = transformCustomerPasswordChange(customerId, newPassword);
        const customerResponse = await updateCustomer(bcCustomer);
        const acCustomer = transformBcCustomerToAcCustomerForMutation(customerResponse);

        return acCustomer;
    },
};
