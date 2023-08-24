import { MutationResolvers } from '@mesh';
import {
    transformBcCustomerToAcCustomerForMutation,
    transformAcCustomerPasswordChange,
    transformAcCustomerValidatePassword,
} from '../../factories/transform-customer-data';
import { updateCustomer, validateCustomerCredentials } from '../../apis/rest/customer';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';
import { logAndThrowError } from '../../../utils';
import { getBcCustomer } from '../../apis/graphql';

export const changeCustomerPasswordResolver: MutationResolvers['changeCustomerPassword'] = {
    resolve: async (_root, { newPassword, currentPassword }, context, _info) => {
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const bcCustomerResponse = await getBcCustomer(customerId, customerImpersonationToken);
        const validatePasswordRequest = transformAcCustomerValidatePassword(
            bcCustomerResponse.email,
            currentPassword,
            1
        );
        const verifyPasswordResponse = await validateCustomerCredentials(validatePasswordRequest);
        if (!verifyPasswordResponse.is_valid) {
            return logAndThrowError('Entered password is incorrect');
        }

        const bcCustomer = transformAcCustomerPasswordChange(customerId, newPassword);
        const customerResponse = await updateCustomer(bcCustomer);
        const customerOutput = transformBcCustomerToAcCustomerForMutation(customerResponse);

        return customerOutput.customer;
    },
};
