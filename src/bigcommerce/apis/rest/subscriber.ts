import { BcSubscriber } from '../../types';
import { bcPost } from './client';
import { logAndThrowError } from '../../../utils/error-handling';

/* istanbul ignore file */
/**
 * BigCommerce create subscriber docs: https://developer.bigcommerce.com/docs/rest-management/subscribers#create-a-subscriber
 * @param email
 */
export const createSubscriber = async(email: string): Promise<BcSubscriber> => {
    const path = `/v3/customers/subscribers`;

    const data = {
        email: email
    }

    const response = await bcPost(path, data);
    console.log('Subscriber added: ' + JSON.stringify(response.data));

    return response.data;
}
