import { CustomerResolvers } from '@aligent/bigcommerce-resolvers';
import { getSubscriberByEmail } from '../../../apis/rest/subscriber';

export const customerIsSubscribedResolver: CustomerResolvers['is_subscribed'] = {
    resolve: async (root, _args, _context, _info) => {
        const email = root?.email;

        if (!email) return false;

        /* As this information isn't needed anywhere else in the customer information,
         * it's better to query for this in a sub-resolver. If "is_subscribed" isn't
         * asked for then the request will never be made. */
        const subscriber = await getSubscriberByEmail(email);
        return !!subscriber;
    },
};
