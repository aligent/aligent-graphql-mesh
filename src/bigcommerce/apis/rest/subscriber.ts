import { BcSubscriber } from '../../types';
import { bcDelete, bcGet, bcPost, bcPut } from './client';
import { logAndThrowError } from '../../../utils/error-handling';

/* istanbul ignore file */

const CUSTOMER_SUBSCRIBERS_API = `/v3/customers/subscribers`;

export const getSubscriberByEmail = async (email: string): Promise<BcSubscriber | undefined> => {
    //encodeURI is necessary to get results for emails with special characters, such as + or .
    const path = `${CUSTOMER_SUBSCRIBERS_API}?email=${encodeURIComponent(email)}`;
    const response = await bcGet(path);

    return response.data[0];
};

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

/**
 * https://developer.bigcommerce.com/docs/rest-management/subscribers#update-a-subscriber
 */
export const updateSubscriber = async (
    subscriberId: number,
    data: { email: string }
): Promise<BcSubscriber> => {
    const response = await bcPut(`${CUSTOMER_SUBSCRIBERS_API}/${subscriberId}`, data);

    const subscriber = response.data;
    if (!subscriber?.id) {
        return logAndThrowError(
            'Invalid Subscriber object received: attribute id has to be defined.'
        );
    }

    return subscriber;
};

export const deleteSubscriberById = async (subscriberId: number): Promise<boolean> => {
    const path = `${CUSTOMER_SUBSCRIBERS_API}/${subscriberId}`;
    await bcDelete(path);

    //Nothing is returned by BigComm, not matter if success or not, always 204 No Content
    //So if there is no critical error we are just returning true
    return true;
};
