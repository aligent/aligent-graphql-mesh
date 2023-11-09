import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CustomerClient } from '../../apis/rest/customer';
import { OroCustomerTransformerChain } from '../../transformers/customers/transform-customer-data';

export const customerResolver = {
    resolve: async (_root, _args, context, _info) => {
        const customerClient: CustomerClient = context.injector.get(CustomerClient);
        const getCustomerUserResponse = await customerClient.getCustomerUser();
        const oroCustomer = getCustomerUserResponse.data;
        const oroAddresses = getCustomerUserResponse.included;
        const oroCustomerTransformer: OroCustomerTransformerChain = context.injector.get(
            OroCustomerTransformerChain
        );

        return oroCustomerTransformer.transform({
            data: { oroCustomer, oroAddresses },
        });
    },
} satisfies QueryResolvers['customer'];
