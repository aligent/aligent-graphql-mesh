import axios, { AxiosResponse } from 'axios';
import { logAndThrowError } from '@aligent/utils';

const STORE_HASH = process.env.STORE_HASH as string;
const BC_REST_API = `https://api.bigcommerce.com/stores/${STORE_HASH}`;
const X_AUTH_TOKEN = process.env.X_AUTH_TOKEN as string;

const headers = {
    'X-Auth-Token': X_AUTH_TOKEN,
    'Content-Type': 'application/json',
    Accept: 'application/json',
};
/* istanbul ignore file */
// TODO: generic return type
export const bcPost = async (path: string, data?: unknown): Promise<AxiosResponse['data']> => {
    const url = `${BC_REST_API}${path}`;
    try {
        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        return logAndThrowError(error, bcPost.name);
    }
};

export const bcPut = async (path: string, data?: unknown): Promise<AxiosResponse['data']> => {
    const url = `${BC_REST_API}${path}`;
    try {
        const response = await axios.put(url, data, { headers });
        return response.data;
    } catch (error) {
        return logAndThrowError(error, bcPut.name);
    }
};

export const bcGet = async (path: string, data?: unknown): Promise<AxiosResponse['data']> => {
    const url = `${BC_REST_API}${path}`;
    try {
        const response = await axios.get(url, { headers, data });
        return response.data;
    } catch (error) {
        return logAndThrowError(error, bcGet.name);
    }
};

/**
 * Generator function to iterate over a paginated API result
 * @param path
 * @param page
 * @param limit
 */
export const bcPaginate = async function* (
    path: string,
    page = 1,
    limit = 50
): AsyncGenerator<AxiosResponse['data']> {
    const url = `${BC_REST_API}${path}`;

    while (page >= 1) {
        const response = await axios.get(url, { headers, params: { page, limit } });
        const items = response.data;
        if (items.length === 0) {
            break;
        }
        for (const item of items) {
            yield item;
        }
        page++;
    }
};

export const bcDelete = async (path: string): Promise<AxiosResponse['data']> => {
    const url = `${BC_REST_API}${path}`;
    try {
        const response = await axios.delete(url, { headers });
        return response.data;
    } catch (error) {
        return logAndThrowError(error, bcDelete.name);
    }
};

export const createCustomerImpersonationToken = async (expiresAt: number): Promise<string> => {
    const path = `/v3/storefront/api-token-customer-impersonation`;
    const data = {
        channel_id: 1,
        expires_at: expiresAt,
    };

    const response = await bcPost(path, data);
    return response.data.token;
};
