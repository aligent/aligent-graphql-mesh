import { MutationResolvers } from '@mesh';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';
import {
    transformBcCustomerRest,
    transformCustomerForMutation,
} from '../../factories/transform-customer-data';
import { updateCustomer } from '../../apis/rest/customer';

export const updateCustomerResolver: MutationResolvers['updateCustomer'] = {
    resolve: async (_root, { input: customerInput }, context, _info) => {
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        if (!customerInput) {
            return null;
        }

        const customer = transformCustomerForMutation(customerId, customerInput);

        const customerResponse = await updateCustomer(customer);
        // const subscribeResponse = await updateSubscriber(subscriber);

        //email, firstname, lastname, password,
        // implement update subscriber for: is_subscribed
        ///https://developer.bigcommerce.com/docs/rest-management/subscribers#update-a-subscriber

        return transformBcCustomerRest(customerResponse); //todo: add subscriber
    },
};
