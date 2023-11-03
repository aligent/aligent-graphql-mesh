import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { CustomerClient } from '../../apis/rest/customer';

export const deleteCustomerAddressMutation: MutationResolvers['deleteCustomerAddress'] = {
    resolve: async (_root, { id }, context, _info) => {
        const customerClient: CustomerClient = context.injector.get(CustomerClient);
        const response = await customerClient.deleteCustomerAddress(id);
        return response;
    },
};
