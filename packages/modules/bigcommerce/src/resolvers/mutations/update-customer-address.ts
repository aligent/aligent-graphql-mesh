import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import {
    transformBcAddress,
    transformCustomerAddress,
} from '../../factories/transform-customer-address-data';
import {
    getAllCustomerAddresses,
    getCustomerAddress,
    updateCustomerAddress,
} from '../../apis/rest/customer';
import { logAndThrowError } from '@aligent/utils';
import {
    getBcCustomerIdFromMeshToken,
    getCountryStateByAddressInput,
    isCustomerAddressValid,
} from '../../utils';
import { checkIfAddressbookHasDefaultAddress } from '../../utils/checkIfAddressbookHasDefaultAddress';
import { retrieveCountriesFromCache } from '../queries/countries';

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

        if (!isCustomerAddressValid(addressInput)) {
            return logAndThrowError(
                new Error(
                    'ValidationError: Failed to validate CustomerAddressInput, Required field is missing'
                )
            );
        }

        if (addressInput.default_shipping || addressInput.default_billing) {
            const bcAddresses = await getAllCustomerAddresses(customerId);
            const hasDefaultAddress = checkIfAddressbookHasDefaultAddress(bcAddresses);

            if (hasDefaultAddress.hasDefaultShipping && addressInput.default_shipping) {
                return logAndThrowError('Already have a default shipping address');
            }

            if (hasDefaultAddress.hasDefaultBilling && addressInput.default_billing) {
                return logAndThrowError('Already have a default billing address');
            }
        }

        const countriesData = await retrieveCountriesFromCache(context);
        const state = getCountryStateByAddressInput(countriesData, addressInput);

        const address = transformCustomerAddress(addressInput, state, customerId, addressId);
        const response = await updateCustomerAddress(address);
        if (!response) {
            return null; //No data returned if the updated does not contain any change
        }

        return transformBcAddress(response);
    },
};
