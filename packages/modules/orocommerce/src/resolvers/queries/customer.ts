import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CustomerClient } from '../../apis/rest/customer';
import { OroCustomerTransformerChain } from '../../transformers/customers/transform-customer-data';
import { OroAddressesTransformerChain } from '../../transformers/customers/transform-oro-addresses-data';

export const customerResolver = {
    resolve: async (_root, _args, context, _info) => {
        const customerClient: CustomerClient = context.injector.get(CustomerClient);
        const getCustomerUserResponse = await customerClient.getCustomerUser();
        const oroCustomer = getCustomerUserResponse.data;
        const oroAddresses = getCustomerUserResponse.included;
        const oroCustomerTransformer: OroCustomerTransformerChain = context.injector.get(
            OroCustomerTransformerChain
        );

        const oroAddressesTransformer: OroAddressesTransformerChain = context.injector.get(
            OroAddressesTransformerChain
        );

        const transformedAddresses = oroAddressesTransformer.transform({ data: oroAddresses });
        const transformedCustomer = oroCustomerTransformer.transform({
            data: { oroCustomer, transformedAddresses },
        });

        return transformedCustomer;
    },
} satisfies QueryResolvers['customer'];
