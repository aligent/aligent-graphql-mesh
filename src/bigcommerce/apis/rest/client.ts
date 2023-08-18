import axios, { AxiosResponse } from 'axios';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';

const BC_REST_API = process.env.BC_REST_API as string;
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

export const bcGet = async (path: string) => {
    const url = `${BC_REST_API}${path}`;
    try {
        const response = await axios.get(url, { headers });
        return response.data;
    } catch (error) {
        return logAndThrowError(error, bcGet.name);
    }
};

export const bcDelete = async (path: string) => {
    const url = `${BC_REST_API}${path}`;
    try {
        const response = await axios.delete(url, { headers });
        return response.data;
    } catch (error) {
        logAndThrowError(error as Error);
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
