import { CustomerInput, MutationResolvers } from '@mesh';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';
import {
    transformBcCustomerToAcCustomerForMutation,
    transformCustomerForMutation,
} from '../../factories/transform-customer-data';
import { updateCustomer } from '../../apis/rest/customer';
import { getBcCustomer } from '../../apis/graphql';
import {
    createSubscriber,
    deleteSubscriberById,
    getSubscriberByEmail,
    updateSubscriber,
} from '../../apis/rest/subscriber';

export const updateCustomerResolver: MutationResolvers['updateCustomer'] = {
    resolve: async (_root, { input: customerInput }, context, _info) => {
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        if (!customerInput) {
            return null;
        }

        const email = customerInput.email;
        const isSubscribed = await updateSubscriptionStatus(customerId, customerInput);

        if (email) {
            await updateSubscriberEmail(customerId, email);
        }

        const bcCustomer = transformCustomerForMutation(customerId, customerInput);
        const customerResponse = await updateCustomer(bcCustomer);

        return transformBcCustomerToAcCustomerForMutation(customerResponse, isSubscribed);
    },
};

async function updateSubscriberEmail(customerId: number, inputEmail: string) {
    const bcCustomerResponse = await getBcCustomer(customerId);
    const bcSubscriber = await getSubscriberByEmail(bcCustomerResponse.email);
    if (bcSubscriber) {
        await updateSubscriber(bcSubscriber.id, { email: inputEmail });
    }
}

async function updateSubscriptionStatus(customerId: number, customer: CustomerInput) {
    let isSubscribed = false;
    if (customer.is_subscribed !== undefined) {
        const bcCustomerResponse = await getBcCustomer(customerId);
        const email = bcCustomerResponse.email;
        const bcSubscriber = await getSubscriberByEmail(email);

        if (bcSubscriber && customer.is_subscribed) {
            //already subscribed
            isSubscribed = true;
        }
        if (!bcSubscriber && customer.is_subscribed) {
            //subscribe customer
            await createSubscriber(email);
            isSubscribed = true;
        }
        if (bcSubscriber && !customer.is_subscribed) {
            //unsubscribe customer
            isSubscribed = !(await deleteSubscriberById(bcSubscriber.id));
        }
    }
    return isSubscribed;
}
