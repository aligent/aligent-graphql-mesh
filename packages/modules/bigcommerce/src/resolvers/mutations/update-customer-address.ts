import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import {
    transformBcAddress,
    transformCustomerAddress,
} from '../../factories/transform-customer-address-data';
import { CustomerAddressValidated } from '../../types';
import { getCustomerAddress, updateCustomerAddress } from '../../apis/rest/customer';
import { logAndThrowError } from '@aligent/utils';
import { getBcCustomerIdFromMeshToken, isCustomerAddressValid } from '../../utils';
import { getCountryByCode, getStateByCountryIdAndStateId } from '../../apis/rest/countries';

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

        //the pwa only provides the region id, so we need to get the state from the api to get the full name
        const country = await getCountryByCode(customerAddressInput.country_code);
        const state = await getStateByCountryIdAndStateId(
            country.id,
            customerAddressInput.region.region_id
        );

        const address = transformCustomerAddress(
            customerAddressInput,
            state,
            customerId,
            addressId
        );
        const response = await updateCustomerAddress(address);
        if (!response) {
            return null; //No data returned if the updated does not contain any change
        }

        return transformBcAddress(response);
    },
};
