import { MutationResolvers, SubscribeEmailToNewsletterOutput } from '@mesh';
import { logAndThrowError } from '../../../utils/error-handling';
import { createSubscriber } from '../../apis/rest/subscriber';
import { BcSubscriber } from '../../types';

/* istanbul ignore next */
export const subscribeEmailToNewsletterResolver: MutationResolvers['subscribeEmailToNewsletter'] = {
    resolve: async (_root, _args, _context, _info) => {
        if (
            !_args.email
        ) {
            return logAndThrowError(
                new Error('Missing email')
            );
        }

        const bcSubscriber = await createSubscriber(_args.email);
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
