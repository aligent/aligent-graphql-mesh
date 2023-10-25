import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { isCustomerAddressValid } from '../../utils';
import {
    createCustomerOroAddressTransformer,
    createCustomerAddressTransformer,
} from '../../transformers/customers/transform-customer-address-data';
import { CustomerClient } from '../../apis/rest/customer';

export const createCustomerAddressMutation: MutationResolvers['createCustomerAddress'] = {
    resolve: async (_root, { input }, context, _info) => {
        if (!isCustomerAddressValid(input)) {
            return logAndThrowError(
                'ValidationError: Failed to validate CustomerAddressInput, Required field is missing'
            );
        }
        const createCustomerAddressInitializer = new createCustomerAddressTransformer();
        const transformedCustomerAddress = createCustomerAddressInitializer.transform({
            data: input,
        });

        const customerClient: CustomerClient = context.injector.get(CustomerClient);
        const response = await customerClient.createCustomerAddress(transformedCustomerAddress);
        const oroCustomerAddressInitializer = new createCustomerOroAddressTransformer();

        return oroCustomerAddressInitializer.transform({data: response});
    },
};
