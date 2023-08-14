import { BcSubscriber } from '../../../types';
import { transformSubscriberToNewsletterOutput } from '../subscribe-email-to-newsletter';

describe('Transform SubscriberToNewsletter test', () => {
    test('Subscriber email exists', () => {
        const transformedSubscriber = transformSubscriberToNewsletterOutput(bcSubscriber);

        expect(transformedSubscriber.status).toEqual('SUBSCRIBED');
    });
    test('Subscriber email does not exist', () => {
        const transformedSubscriber =  transformSubscriberToNewsletterOutput(
            bcSubscriberInvalid
        );

        expect(transformedSubscriber.status).toEqual('UNCONFIRMED');
    });
});

const bcSubscriber: BcSubscriber = {
    email: 'test@example.com',
    first_name: 'bla',
    last_name: 'blubb',
    source: 'string',
    order_id: 1,
    channel_id: 1,
    id: 0,
    date_modified: '2019-08-24T14:15:22Z',
    date_created: '2019-08-24T14:15:22Z',
    consents: ['consents'],
};

const bcSubscriberInvalid: BcSubscriber = {
    email: '',
    first_name: 'bla',
    last_name: 'blubb',
    source: 'string',
    order_id: 1,
    channel_id: 1,
    id: 0,
    date_modified: '2019-08-24T14:15:22Z',
    date_created: '2019-08-24T14:15:22Z',
    consents: ['consents'],
};
