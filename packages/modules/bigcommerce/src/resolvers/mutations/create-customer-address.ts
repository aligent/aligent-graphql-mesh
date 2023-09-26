import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { getBcCustomerIdFromMeshToken, isCustomerAddressValid } from '../../utils';
import { createCustomerAddress, getAllCustomerAddresses } from '../../apis/rest/customer';
import {
    transformCustomerAddress,
    transformBcAddress,
} from '../../factories/transform-customer-address-data';
import { getStateByAddress } from '../../apis/rest/countries';
import { checkIfAddressbookHasDefaultAddress } from '../../utils/checkIfAddressbookHasDefaultAddress';

export const createCustomerAddressResolver: MutationResolvers['createCustomerAddress'] = {
    resolve: async (_root, { input }, context, _info) => {
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        if (!isCustomerAddressValid(input)) {
            return logAndThrowError(
                'ValidationError: Failed to validate CustomerAddressInput, Required field is missing'
            );
        }

        if (input.default_shipping || input.default_billing) {
            const bcAddresses = await getAllCustomerAddresses(customerId);
            const hasDefaultAddress = checkIfAddressbookHasDefaultAddress(bcAddresses);

            if (hasDefaultAddress.hasDefaultShipping && input.default_shipping) {
                return logAndThrowError('Already have a default shipping address');
            }

            if (hasDefaultAddress.hasDefaultBilling && input.default_billing) {
                return logAndThrowError('Already have a default billing address');
            }
        }

        const state = await getStateByAddress(input);
        const address = transformCustomerAddress(input, state, customerId);
        const response = await createCustomerAddress(address);

        return transformBcAddress(response);
    },
};
