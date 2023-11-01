import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { isCustomerAddressValid } from '../../utils';
import { CustomerAddressTransformerChain } from '../../transformers/customers/transform-customer-address-data';
import { OroAddressTransformerChain } from '../../transformers/customers/transform-oro-address-data';
import { CustomerClient } from '../../apis/rest/customer';

export const createCustomerAddressMutation: MutationResolvers['createCustomerAddress'] = {
    resolve: async (_root, { input }, context, _info) => {
        if (!isCustomerAddressValid(input)) {
            return logAndThrowError(
                'ValidationError: Failed to validate CustomerAddressInput, Required field is missing'
            );
        }

        const customerAddressTransformer: CustomerAddressTransformerChain = context.injector.get(
            CustomerAddressTransformerChain
        );
        const transformedCustomerAddress = customerAddressTransformer.transform({
            data: input,
        });

        const customerClient: CustomerClient = context.injector.get(CustomerClient);
        const response = await customerClient.createCustomerAddress(transformedCustomerAddress);
        const transformOroAddress: OroAddressTransformerChain = context.injector.get(
            OroAddressTransformerChain
        );

        return transformOroAddress.transform({
            data: response,
        });
    },
};
