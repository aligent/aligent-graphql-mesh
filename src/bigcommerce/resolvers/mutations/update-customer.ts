import { Customer, CustomerOutput, MutationResolvers } from '@mesh';
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

        const customer = customerInput as Customer;
        const email = customer.email;

        const isSubscribed = await updateSubscriptionStatus(customerId, customer);

        if (email) {
            await updateSubscriberEmail(customerId, email);
        }

        const bcCustomer = transformCustomerForMutation(customerId, customer);
        const customerResponse = await updateCustomer(bcCustomer);
        const acCustomer = transformBcCustomerToAcCustomerForMutation(
            customerResponse,
            isSubscribed
        );

        const customerOutput: CustomerOutput = {
            customer: acCustomer,
        };

        return customerOutput;
    },
};

async function updateSubscriberEmail(customerId: number, inputEmail: string) {
    const bcCustomerResponse = await getBcCustomer(customerId);
    const bcSubscriber = await getSubscriberByEmail(bcCustomerResponse.email);
    if (bcSubscriber) {
        await updateSubscriber(bcSubscriber.id, { email: inputEmail });
    }
}

async function updateSubscriptionStatus(customerId: number, customer: Customer) {
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
