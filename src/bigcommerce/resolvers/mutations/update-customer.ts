import { Customer, CustomerOutput, MutationResolvers } from '@mesh';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';
import {
    transformBcCustomerToAcCustomerForMutation,
    transformCustomerForMutation,
} from '../../factories/transform-customer-data';
import { updateCustomer } from '../../apis/rest/customer';

export const updateCustomerResolver: MutationResolvers['updateCustomer'] = {
    resolve: async (_root, { input: customerInput }, context, _info) => {
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        if (!customerInput) {
            return null;
        }

        const bcCustomer = transformCustomerForMutation(customerId, customerInput as Customer);

        const customerResponse = await updateCustomer(bcCustomer);
        // const subscribeResponse = await updateSubscriber(subscriber);

        //email, firstname, lastname, password,
        // implement update subscriber for: is_subscribed
        ///https://developer.bigcommerce.com/docs/rest-management/subscribers#update-a-subscriber

        const customer = transformBcCustomerToAcCustomerForMutation(customerResponse);
        const customerOutput: CustomerOutput = {
            customer: customer,
        };

        return customerOutput; //todo: add subscriber
    },
};
