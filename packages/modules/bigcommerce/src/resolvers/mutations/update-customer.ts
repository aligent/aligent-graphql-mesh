import { CustomerInput, MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { getBcCustomerIdFromMeshToken } from '../../utils';
import { transformCustomerForMutation } from '../../factories/transform-customer-data';
import { getBcCustomer } from '../../apis/graphql';
import { verifyCustomerCredentials } from '../../apis/helpers/verify-customer-credentials';
import {
    createSubscriber,
    deleteSubscriberById,
    getSubscriberByEmail,
    retrieveCustomerImpersonationTokenFromCache,
    updateCustomer,
    updateSubscriber,
} from '../../apis/rest';
import { customerResolver } from '../queries/customer';

export const updateCustomerResolver: MutationResolvers['updateCustomer'] = {
    resolve: async (root, { input: customerInput }, context, info) => {
        const customerId = getBcCustomerIdFromMeshToken(context.headers.authorization);
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);

        if (!customerInput) {
            return null;
        }

        const emailInput = customerInput.email;
        let verifiedCustomerEmail;

        if (emailInput && customerInput?.password) {
            /* Customer email updates require the users password to be validated against their current
             * email address. If this step fails, the "verifyCustomerCredentials" will pass an error
             * to the PWA which will cause the browser to end the user's session.*/
            const verifiedCustomer = await verifyCustomerCredentials(
                customerId,
                customerImpersonationToken,
                customerInput.password
            );

            /* Note that if verifying a customer in "verifyCustomerCredentials" fails, it will throw an error
             *  and we won't reach this point of having verified customer data*/
            verifiedCustomerEmail = verifiedCustomer.email;
        }

        const bcCustomer = transformCustomerForMutation(customerInput, customerId);

        const updatedCustomerResponse = await updateCustomer(bcCustomer);

        /* If the user has updated their email address attached to their account
         * attempt to update the email address stored against the newsletter subscriber
         * api. */
        if (verifiedCustomerEmail && emailInput && emailInput === updatedCustomerResponse?.email) {
            await updateSubscriberEmail(customerId, verifiedCustomerEmail, emailInput);
        }

        await updateSubscriptionStatus(customerId, customerInput, customerImpersonationToken);

        /* Retrieve the current customers data from the "customerResolver" as it will contain all the
         * the logic and expected data we want to return by the updateCustomer resolver.
         * */
        const currentCustomerInfo = await customerResolver.resolve(root, {}, context, info);

        return {
            customer: currentCustomerInfo,
        };
    },
};

async function updateSubscriberEmail(
    customerId: number,
    oldEmail: string,
    newEmail: string
): Promise<{ isSubscribed: boolean }> {
    /* Get if the user is a newsletter subscriber using their old email address */
    const currentSubscriberInfo = await getSubscriberByEmail(oldEmail);

    if (!currentSubscriberInfo) {
        return {
            isSubscribed: false,
        };
    }

    /* If we know the user is a current newsletter subscriber with their old email, subscribe the new
     * email to the newsletter */
    const updatedSubscriberInfo = await updateSubscriber(currentSubscriberInfo.id, {
        email: newEmail,
    });

    return {
        isSubscribed: updatedSubscriberInfo?.email === newEmail,
    };
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
