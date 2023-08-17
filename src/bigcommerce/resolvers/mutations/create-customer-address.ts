import { MutationResolvers } from '@mesh';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';
import { createCustomerAddress } from '../../apis/rest/customer';
import {
    transformCustomerAddress,
    transformBcAddress,
} from '../../factories/transform-customer-address-data';
import { isCustomerAddressValid } from '../../../utils/validators/customer-address-validator';
import { CustomerAddressValidated } from '../../types';

export const createCustomerAddressResolver: MutationResolvers['createCustomerAddress'] = {
    resolve: async (_root, { input }, context, _info) => {
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        if (!isCustomerAddressValid(input)) {
            return logAndThrowError(
                'ValidationError: Failed to validate CustomerAddressInput, Required field is missing'
            );
        }

        const customerAddressInput = input as CustomerAddressValidated;
        const address = transformCustomerAddress(customerAddressInput, customerId);
        const response = await createCustomerAddress(address);

        return transformBcAddress(response);
    },
};
