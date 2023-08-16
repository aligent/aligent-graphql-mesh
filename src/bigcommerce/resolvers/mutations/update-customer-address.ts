import { MutationResolvers } from '@mesh';
import { logAndThrowError } from '../../../utils/error-handling';
import { getDecodedMeshToken } from '../../../utils/tokens';
import {
    transformBcAddress,
    transformCustomerAddressUpdate,
} from '../../factories/transform-customer-address-data';
import { CustomerAddressValidated } from '../../types';
import { updateCustomerAddress } from '../../apis/rest/customer';
import { isCustomerAddressValid } from '../../../utils/validators/customer-address-validator';

export const updateCustomerAddressResolver: MutationResolvers['updateCustomerAddress'] = {
    resolve: async (_root, args, context, _info) => {
        if (!context.headers['mesh-token']) {
            return logAndThrowError(new Error('mesh-token header is required for this mutation.'));
        }

        const { bc_customer_id: customerId } = getDecodedMeshToken(context.headers['mesh-token']);

        const addressInput = args.input;
        const addressId = args.id;

        if (!isCustomerAddressValid(addressInput)) {
            return logAndThrowError(
                new Error(
                    'ValidationError: Failed to validate CustomerAddressInput, Required field is missing'
                )
            );
        }
        const customerAddressInput = addressInput as CustomerAddressValidated;

        //FIXME: addressId needs to be extracted from input, not accessible in available CustomerAddressInput interface
        const address = transformCustomerAddressUpdate(customerAddressInput, customerId, addressId);
        const response = await updateCustomerAddress(address);
        if (!response) {
            return null; //No data returned if the updated does not contain any change
        }

        return transformBcAddress(response);
    },
};
