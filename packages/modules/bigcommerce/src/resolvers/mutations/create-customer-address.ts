import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { getBcCustomerIdFromMeshToken, isCustomerAddressValid } from '../../utils';
import { createCustomerAddress } from '../../apis/rest/customer';
import {
    transformCustomerAddress,
    transformBcAddress,
} from '../../factories/transform-customer-address-data';
import { CustomerAddressValidated } from '../../types';
import { getCountryByCode, getStateByCountryIdAndStateId } from '../../apis/rest/countries';

export const createCustomerAddressResolver: MutationResolvers['createCustomerAddress'] = {
    resolve: async (_root, { input }, context, _info) => {
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        if (!isCustomerAddressValid(input)) {
            return logAndThrowError(
                'ValidationError: Failed to validate CustomerAddressInput, Required field is missing'
            );
        }

        const customerAddressInput = input as CustomerAddressValidated;

        //the pwa only provides the region id, so we need to get the state from the api to get the full name
        const country = await getCountryByCode(customerAddressInput.country_code);
        const state = await getStateByCountryIdAndStateId(
            country.id,
            customerAddressInput.region.region_id
        );
        const address = transformCustomerAddress(customerAddressInput, state, customerId);
        const response = await createCustomerAddress(address);

        return transformBcAddress(response);
    },
};
