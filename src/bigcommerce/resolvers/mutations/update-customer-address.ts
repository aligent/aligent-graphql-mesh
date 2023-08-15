import { MutationResolvers } from '@mesh';
import { logAndThrowError } from '../../../utils/error-handling';
import { getDecodedMeshToken } from '../../../utils/tokens';
import {
    transformBcAddress,
    transformCustomerAddress,
} from '../../factories/transform-customer-address-data';
import { isCustomerAddressValid } from '@utils/validators/customer-address-validator';
import { CustomerAddressUpdateValidated } from '../../types/index';
import { updateCustomerAddress } from '../../apis/rest/customer';

export const updateCustomerAddressResolver: MutationResolvers['updateCustomerAddress'] = {
    resolve: async (_root, { input }, context, _info) => {
        if (!context.headers['mesh-token']) {
            return logAndThrowError(new Error('mesh-token header is required for this mutation.'));
        }

        const { bc_customer_id: customerId } = getDecodedMeshToken(context.headers['mesh-token']);

        if (!input) {
            return logAndThrowError(
                new Error('ValidationError: Failed to validate CustomerAddressInput, input empty')
            );
        }

        if (!isCustomerAddressValid(input)) {
            return logAndThrowError(
                new Error(
                    'ValidationError: Failed to validate CustomerAddressInput, Required field is missing'
                )
            );
        }

        const customerAddressInput = input as CustomerAddressUpdateValidated;
        //FIXME: addressId needs to be extracted from input, not accessible in available CustomerAddressInput interface
        const address = transformCustomerAddress(customerAddressInput, customerId);
        const response = await updateCustomerAddress(address);

        return transformBcAddress(response);
    },
};
