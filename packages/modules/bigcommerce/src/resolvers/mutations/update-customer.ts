import { CustomerInput, MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { getBcCustomerIdFromMeshToken } from '../../utils';
import {
    transformBcCustomerToAcCustomerForMutation,
    transformCustomerForMutation,
} from '../../factories/transform-customer-data';
import { updateCustomer } from '../../apis/rest/customer';
import { getBcCustomer } from '../../apis/graphql';
import { verifyCustomerCredentials } from '../../apis/helpers/verify-customer-credentials';
import {
    createSubscriber,
    deleteSubscriberById,
    getSubscriberByEmail,
    updateSubscriber,
} from '../../apis/rest/subscriber';

export const updateCustomerResolver: MutationResolvers['updateCustomer'] = {
    resolve: async (_root, { input: customerInput }, context, _info) => {
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        if (!customerInput) {
            return null;
        }

        const email = customerInput.email;

        if (email && customerInput?.password) {
            /* Customer email updates require the users password to be validated against their current
             * email address. If this step fails, the "verifyCustomerCredentials" will pass an error
             * to the PWA which will cause the browser to end the user's session.*/
            await verifyCustomerCredentials(
                customerId,
                customerImpersonationToken,
                customerInput.password
            );

            await updateSubscriberEmail(customerId, email, customerImpersonationToken);
        }

        /* Take flight doesn't require a password to update customer information which isn't
         * changing a password or email */

        const isSubscribed = await updateSubscriptionStatus(
            customerId,
            customerInput,
            customerImpersonationToken
        );

        const bcCustomer = transformCustomerForMutation(customerId, customerInput);
        const customerResponse = await updateCustomer(bcCustomer);

        return transformBcCustomerToAcCustomerForMutation(customerResponse, isSubscribed);
    },
};

async function updateSubscriberEmail(
    customerId: number,
    inputEmail: string,
    customerImpersonationToken: string
) {
    const bcCustomerResponse = await getBcCustomer(customerId, customerImpersonationToken);
    const bcSubscriber = await getSubscriberByEmail(bcCustomerResponse.email);
    if (bcSubscriber) {
        await updateSubscriber(bcSubscriber.id, { email: inputEmail });
    }
}

async function updateSubscriptionStatus(
    customerId: number,
    customer: CustomerInput,
    customerImpersonationToken: string
) {
    let isSubscribed = false;
    if (customer.is_subscribed !== undefined) {
        const bcCustomerResponse = await getBcCustomer(customerId, customerImpersonationToken);
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
