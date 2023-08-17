import { MutationResolvers } from '@mesh';
import { logAndThrowError } from '../../../utils/error-handling';
import { getDecodedMeshToken } from '../../../utils/tokens';
import {
    transformBcAddress,
    transformCustomerAddress,
} from '../../factories/transform-customer-address-data';
import { CustomerAddressValidated } from '../../types';
import { getCustomerAddresses, updateCustomerAddress } from '../../apis/rest/customer';
import {
    addressIdBelongsToCustomer,
    isCustomerAddressValid,
} from '../../../utils/validators/customer-address-validator';

export const updateCustomerAddressResolver: MutationResolvers['updateCustomerAddress'] = {
    resolve: async (_root, { id: addressId, input: addressInput }, context, _info) => {
        if (!context.headers['mesh-token']) {
            return logAndThrowError(new Error('mesh-token header is required for this mutation.'));
        }

        const { bc_customer_id: customerId } = getDecodedMeshToken(context.headers['mesh-token']);

        if (!addressInput) {
            return null;
        }

        const customerAddresses = await getCustomerAddresses(customerId);
        if (!addressIdBelongsToCustomer(addressId, customerAddresses)) {
            return logAndThrowError(
                new Error('AuthorizationError: Address does not belong to customer')
            );
        }
        if (!isCustomerAddressValid(addressInput)) {
            return logAndThrowError(
                new Error(
                    'ValidationError: Failed to validate CustomerAddressInput, Required field is missing'
                )
            );
        }
        const customerAddressInput = addressInput as CustomerAddressValidated;

        const address = transformCustomerAddress(customerAddressInput, customerId, addressId);
        const response = await updateCustomerAddress(address);
        if (!response) {
            return null; //No data returned if the updated does not contain any change
        }

        return transformBcAddress(response);
    },
};
