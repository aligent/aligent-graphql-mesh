import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import {
    transformBcAddress,
    transformCustomerAddress,
} from '../../factories/transform-customer-address-data';
import { CustomerAddressValidated } from '../../types';
import { getCustomerAddress, updateCustomerAddress } from '../../apis/rest/customer';
import { logAndThrowError, isCustomerAddressValid, getBcCustomerIdFromMeshToken } from '@aligent/utils';

export const updateCustomerAddressResolver: MutationResolvers['updateCustomerAddress'] = {
    resolve: async (_root, { id: addressId, input: addressInput }, context, _info) => {
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        if (!addressInput) {
            return null;
        }

        const customerAddress = await getCustomerAddress(addressId, customerId);
        if (!customerAddress) {
            return logAndThrowError(
                new Error('AuthorizationError: Address does not belong to customer')
            );
        }

        const customerAddressInput = addressInput as CustomerAddressValidated;
        if (!isCustomerAddressValid(customerAddressInput)) {
            return logAndThrowError(
                new Error(
                    'ValidationError: Failed to validate CustomerAddressInput, Required field is missing'
                )
            );
        }

        const address = transformCustomerAddress(customerAddressInput, customerId, addressId);
        const response = await updateCustomerAddress(address);
        if (!response) {
            return null; //No data returned if the updated does not contain any change
        }

        return transformBcAddress(response);
    },
};
