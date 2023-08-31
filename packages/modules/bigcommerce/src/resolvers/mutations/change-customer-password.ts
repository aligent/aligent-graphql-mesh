import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import {
    transformBcCustomerToAcCustomerForMutation,
    transformAcCustomerPasswordChange,
    transformAcCustomerValidatePassword,
} from '../../factories/transform-customer-data';
import { updateCustomer, validateCustomerCredentials } from '../../apis/rest/customer';
import { AuthorizationError } from '@aligent/utils';
import { getBcCustomerIdFromMeshToken } from '../../utils';
import { getBcCustomer } from '../../apis/graphql';

export const changeCustomerPasswordResolver: MutationResolvers['changeCustomerPassword'] = {
    resolve: async (_root, { newPassword, currentPassword }, context, _info) => {
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const bcCustomerResponse = await getBcCustomer(customerId, customerImpersonationToken);
        const channelId = 1; //for now setting channel to 1, will need additional work for multichannel support
        const validatePasswordRequest = transformAcCustomerValidatePassword(
            bcCustomerResponse.email,
            currentPassword,
            channelId
        );
        const verifyPasswordResponse = await validateCustomerCredentials(validatePasswordRequest);
        if (!verifyPasswordResponse.is_valid) {
            throw new AuthorizationError('Invalid login or password.');
        }

        const bcCustomer = transformAcCustomerPasswordChange(customerId, newPassword);
        const customerResponse = await updateCustomer(bcCustomer);
        const customerOutput = transformBcCustomerToAcCustomerForMutation(customerResponse);

        return customerOutput.customer;
    },
};
