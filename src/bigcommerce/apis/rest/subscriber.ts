import { BcSubscriber } from '../../types';
import { bcPost, bcPut } from './client';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';

/* istanbul ignore file */

const CUSTOMER_SUBSCRIBERS_API = `/v3/customers/subscribers`;

/**
 * BigCommerce create subscriber docs: https://developer.bigcommerce.com/docs/rest-management/subscribers#create-a-subscriber
 * @param email
 */
export const createSubscriber = async (email: string): Promise<BcSubscriber> => {
    const path = `/v3/customers/subscribers`;

    const data = {
        email: email,
    };

    const response = await bcPost(path, data);

    const subscriber = response.data;
    if (!subscriber?.email) {
        return logAndThrowError(
            'Invalid Subscriber object received: attribute email has to be defined.'
        );
    }

    return subscriber;
};

export const updateSubscriber = async (subscriberInput: BcSubscriber): Promise<BcSubscriber> => {
    const response = await bcPut(CUSTOMER_SUBSCRIBERS_API, subscriberInput);

    const subscriber = response.data;
    if (!subscriber?.id) {
        return logAndThrowError(
            'Invalid Subscriber object received: attribute id has to be defined.'
        );
    }

    return subscriber;
};
