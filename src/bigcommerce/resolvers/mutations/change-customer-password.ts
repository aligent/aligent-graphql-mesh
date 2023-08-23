import { MutationResolvers } from '@mesh';
import {
    transformBcCustomerToAcCustomerForMutation,
    transformCustomerPasswordChange,
} from '../../factories/transform-customer-data';
import { updateCustomer } from '../../apis/rest/customer';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';

export const changeCustomerPasswordResolver: MutationResolvers['changeCustomerPassword'] = {
    resolve: async (_root, args, context, _info) => {
        const newPassword = args.newPassword; //args.currentPassword is ignored, as BigComm is not using that.
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        const bcCustomer = transformCustomerPasswordChange(customerId, newPassword);
        const customerResponse = await updateCustomer(bcCustomer);
        const acCustomer = transformBcCustomerToAcCustomerForMutation(customerResponse);

        return acCustomer;
    },
};
