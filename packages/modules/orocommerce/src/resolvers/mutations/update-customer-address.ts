import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { isCustomerAddressValid } from '../../utils';
import { OroAddressTransformerChain } from '../../transformers/customers/transform-oro-address-data';
import { CustomerClient } from '../../apis/rest/customer';
import { UpdateCustomerAddressTransformerChain } from '../../transformers/customers/transform-update-customer-address-data';
export const updateCustomerAddressMutation: MutationResolvers['updateCustomerAddress'] = {
    resolve: async (_root, { id: addressId, input: addressInput }, context, _info) => {
        if (!(addressInput && addressId)) {
            return null;
        }

        if (!isCustomerAddressValid(addressInput)) {
            return logAndThrowError(
                'ValidationError: Failed to validate CustomerAddressInput, Required field is missing'
            );
        }

        const updateCustomerAddressTransformerChain: UpdateCustomerAddressTransformerChain =
            context.injector.get(UpdateCustomerAddressTransformerChain);
        const transformedCustomerAddress = updateCustomerAddressTransformerChain.transform({
            data: { ...addressInput, id: addressId },
        });

        const customerClient: CustomerClient = context.injector.get(CustomerClient);
        const response = await customerClient.updateCustomerAddresses(transformedCustomerAddress);
        const transformOroAddress: OroAddressTransformerChain = context.injector.get(
            OroAddressTransformerChain
        );

        return transformOroAddress.transform({
            data: response,
        });
    },
};
