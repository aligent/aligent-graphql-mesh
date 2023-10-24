import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { isCustomerAddressNotValid } from '../../utils';
import {
    getTransformCustomerAddress,
    transformOroAddress,
} from '../../transformers/customers/transform-customer-address-data';
import { CustomerClient } from '../../apis/rest/customer';

export const createCustomerAddressMutation: MutationResolvers['createCustomerAddress'] = {
    resolve: async (_root, { input }, context, _info) => {
        if (isCustomerAddressNotValid(input)) {
            return logAndThrowError(
                'ValidationError: Failed to validate CustomerAddressInput, Required field is missing'
            );
        }

        const transformedCustomerAddress = getTransformCustomerAddress(input);

        const customerClient: CustomerClient = context.injector.get(CustomerClient);
        const response = await customerClient.createCustomerAddress(transformedCustomerAddress);

        return transformOroAddress(response);
    },
};
