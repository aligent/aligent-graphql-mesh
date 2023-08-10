import { MutationResolvers, SubscribeEmailToNewsletterOutput } from '@mesh';
import { createSubscriber } from '../../apis/rest/subscriber';
import { BcSubscriber } from '../../types';

/* istanbul ignore next */
export const subscribeEmailToNewsletterResolver: MutationResolvers['subscribeEmailToNewsletter'] = {
    resolve: async (_root, args, _context, _info) => {
        const bcSubscriber = await createSubscriber(args.email);
        const newsletterOutput = await transformSubscriberToNewsletterOutput(bcSubscriber);

        return newsletterOutput;
    },
};

export async function transformSubscriberToNewsletterOutput(bcSubscriber: BcSubscriber): Promise<SubscribeEmailToNewsletterOutput> {
    return {
        //BigCom does not provide a status, but if the returned subscriber has an email, it means the subscription was successful.
        status: bcSubscriber.email ? 'SUBSCRIBED' : 'UNCONFIRMED'
    }
}
