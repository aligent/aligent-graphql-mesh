import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { CustomerClient } from '../../apis/rest/customer';
import { UpdateCustomerTransformerChain } from '../../transformers/customers/update-customer-transformer';
import { customerResolver } from '../queries/customer';

export const updateCustomerMutation: MutationResolvers['updateCustomer'] = {
    resolve: async (root, { input: customerInput }, context, info) => {
        if (!customerInput) {
            return null;
        }

        const updateCustomerTransformerChain: UpdateCustomerTransformerChain = context.injector.get(
            UpdateCustomerTransformerChain
        );
        const transformedCustomer = updateCustomerTransformerChain.transform({
            data: customerInput,
        });

        const customerClient: CustomerClient = context.injector.get(CustomerClient);
        await customerClient.updateCustomer(transformedCustomer);

        const currentCustomerInfo = await customerResolver.resolve(root, {}, context, info);

        return {
            customer: currentCustomerInfo,
        };
    },
};
