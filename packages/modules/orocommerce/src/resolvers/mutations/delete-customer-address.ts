import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { CustomerClient } from '../../apis/rest/customer';

export const deleteCustomerAddressMutation: MutationResolvers['deleteCustomerAddress'] = {
    resolve: async (_root, args, context, _info) => {
        const addressId = args.id;
        const customerClient: CustomerClient = context.injector.get(CustomerClient);
        const response = await customerClient.deleteCustomerAddress(addressId);
        return response;
    },
};
