import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import {
    transformBcCustomerToAcCustomerForMutation,
    transformAcCustomerPasswordChange,
} from '../../factories/transform-customer-data';
import { updateCustomer } from '../../apis/rest/customer';
import { verifyCustomerCredentials } from '../../apis/helpers/verify-customer-credentials';
import { getBcCustomerIdFromMeshToken } from '../../utils';

export const changeCustomerPasswordResolver: MutationResolvers['changeCustomerPassword'] = {
    resolve: async (_root, { newPassword, currentPassword }, context, _info) => {
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        await verifyCustomerCredentials(customerId, customerImpersonationToken, currentPassword);

        const bcCustomer = transformAcCustomerPasswordChange(customerId, newPassword);
        const customerResponse = await updateCustomer(bcCustomer);
        const customerOutput = transformBcCustomerToAcCustomerForMutation(customerResponse);

        return customerOutput.customer;
    },
};
