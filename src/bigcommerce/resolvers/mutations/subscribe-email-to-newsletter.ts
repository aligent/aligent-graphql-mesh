import { MutationResolvers, SubscribeEmailToNewsletterOutput } from '@mesh';
import { createSubscriber } from '../../apis/rest/subscriber';
import { BcSubscriber } from '../../types';

/* istanbul ignore next */
export const subscribeEmailToNewsletterResolver: MutationResolvers['subscribeEmailToNewsletter'] = {
    resolve: async (_root, args, _context, _info) => {
        const bcSubscriber = await createSubscriber(args.email);
        const transformedSubscriber = await transformSubscriberToNewsletterOutput(bcSubscriber);

        return transformedSubscriber;
    },
};

export async function transformSubscriberToNewsletterOutput(bcSubscriber: BcSubscriber): Promise<SubscribeEmailToNewsletterOutput> {
    return {
        //BigCom does not provide a status, but if the subscriber is return it means it was successful, if it's not an error is returned.
        status: bcSubscriber.email ? 'SUBSCRIBED' : 'UNCONFIRMED'
    }
}
