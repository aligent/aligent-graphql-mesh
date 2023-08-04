import { MutationResolvers, SubscribeEmailToNewsletterOutput } from '../../../meshrc/.mesh';
import { logAndThrowError } from '../../../utils/error-handling';
import { createSubscriber } from '../../apis/rest/subscriber';
import { BcSubscriber } from '../../types';

export const subscribeEmailToNewsletterResolver: MutationResolvers['subscribeEmailToNewsletter'] = {
    resolve: async (_root, _args, _context, _info) => {
        console.log('In subscribeEmailToNewsletterResolver');
        if (
            !_args.email
        ) {
            return logAndThrowError(
                new Error('Missing email')
            );
        }

        const bcSubscriber = await createSubscriber(_args.email);

        const subscribeEmailToNewsletterOutput = await transformSubscriberToNewsletterOutput(bcSubscriber);

        return subscribeEmailToNewsletterOutput;
    },
};

export async function transformSubscriberToNewsletterOutput(bcSubscriber: BcSubscriber): Promise<SubscribeEmailToNewsletterOutput> {
    console.log('In transformSubscriberToNewsletterOutput');
    return {
        status: 'SUBSCRIBED'
    }
}
