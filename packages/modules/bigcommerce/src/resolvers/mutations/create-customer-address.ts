import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { getBcCustomerIdFromMeshToken, isCustomerAddressValid } from '../../utils';
import { createCustomerAddress } from '../../apis/rest/customer';
import {
    transformCustomerAddress,
    transformBcAddress,
} from '../../factories/transform-customer-address-data';
import { CustomerAddressValidated } from '../../types';
import { getStateByAddress } from '../../apis/rest/countries';

export const createCustomerAddressResolver: MutationResolvers['createCustomerAddress'] = {
    resolve: async (_root, { input }, context, _info) => {
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        const customerAddressInput = input as CustomerAddressValidated;
        if (!isCustomerAddressValid(input)) {
            return logAndThrowError(
                'ValidationError: Failed to validate CustomerAddressInput, Required field is missing'
            );
        }

        const state = await getStateByAddress(customerAddressInput);
        const address = transformCustomerAddress(customerAddressInput, state, customerId);
        const response = await createCustomerAddress(address);
        const regionId = customerAddressInput.region.region_id;
        if (!regionId) {
            return logAndThrowError('region Id could not be added to customer address');
        }

        return transformBcAddress(response, regionId);
    },
};
