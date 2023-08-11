import { CountryCodeEnum, CustomerAddressInput, MutationResolvers } from '@mesh';
import { logAndThrowError } from '../../../utils/error-handling';
import { getDecodedMeshToken } from '../../../utils/tokens';
import {
    transformBcAddress,
    transformCustomerAddress
} from '../../factories/transform-customer-address-data';
import { isCustomerAddressValid, ValidatedInput } from './create-customer-address';

export interface ValidatedUpdateInput extends ValidatedInput {
    id: string
}


export const updateCustomerAddressResolver: MutationResolvers['updateCustomerAddress'] = {
    resolve: async (_root, { input }, context, _info) => {
        if (!context.headers['mesh-token']) {
            return logAndThrowError(new Error('mesh-token header is required for this mutation.'));
        }

        const { bc_customer_id: customerId } = getDecodedMeshToken(context.headers['mesh-token']);

        if (!isCustomerAddressValid(input)) {
            return logAndThrowError(
                new Error(
                    'ValidationError: Failed to validate CustomerAddressInput, Required field is missing'
                )
            );
        }

        const customerAddressInput = input as ValidatedUpdateInput;
        const address = transformCustomerAddress(customerAddressInput, customerId);
        const response = await updateCustomerAddress(address);

        return transformBcAddress(response);
    },
};
