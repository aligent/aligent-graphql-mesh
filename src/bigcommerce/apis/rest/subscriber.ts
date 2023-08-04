import { BcSubscriber } from '../../types';
import { bcPost } from './client';

/* istanbul ignore file */
export const createSubscriber = async(email: string): Promise<BcSubscriber> => {
    const path = `/v3/customers/subscribers`;

    const data = {
        email: email
    }

    const response = await bcPost(path, data);
    console.log('Subscriber added: ' + JSON.stringify(response.data));

    return response.data;
}
