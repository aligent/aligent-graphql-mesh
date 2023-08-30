import {
    MutationResolvers,
    SubscribeEmailToNewsletterOutput,
} from '@aligent/bigcommerce-resolvers';
import { createSubscriber } from '../../apis/rest/subscriber';
import { BcSubscriber } from '../../types';

/* istanbul ignore next */
export const subscribeEmailToNewsletterResolver: MutationResolvers['subscribeEmailToNewsletter'] = {
    resolve: async (_root, args, _context, _info) => {
        const bcSubscriber = await createSubscriber(args.email);

        return transformSubscriberToNewsletterOutput(bcSubscriber);
    },
};

export function transformSubscriberToNewsletterOutput(
    bcSubscriber: BcSubscriber
): SubscribeEmailToNewsletterOutput {
    return {
        //BigCom does not provide a status, but if the returned subscriber has an email, it means the subscription was successful.
        status: bcSubscriber.email ? 'SUBSCRIBED' : 'UNCONFIRMED',
    };
}
