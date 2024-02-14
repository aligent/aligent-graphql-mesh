import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CustomerClient } from '../../apis/rest/customer';
import { OroCustomerTransformerChain } from '../../transformers/customers/transform-customer-data';
import { GraphqlError } from '@aligent/utils';

export const customerResolver = {
    resolve: async (_root, _args, context, _info) => {
        const bearerToken = context.request.headers.get('authorization');
        if (!bearerToken)
            throw new GraphqlError('authorization', 'No bearer token sent to getCustomerResolver');

        const customerClient: CustomerClient = context.injector.get(CustomerClient);
        const getCustomerUserResponse = await customerClient.getCustomerUser('mine', bearerToken);

        const oroCustomer = getCustomerUserResponse.data;
        const oroAddresses = getCustomerUserResponse.included;
        const oroCustomerTransformer: OroCustomerTransformerChain = context.injector.get(
            OroCustomerTransformerChain
        );

        return {
            ...oroCustomerTransformer.transform({
                data: { oroCustomer, oroAddresses },
            }),
        };
    },
} satisfies QueryResolvers['customer'];
