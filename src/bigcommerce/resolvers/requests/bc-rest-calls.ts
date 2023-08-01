import axios from 'axios';
import { logAndThrowUnknownError, throwAndLogAxiosError } from '../error-handling';
import { BcGraphqlTokenData, Countries, CountriesStates } from '../../types';

const BC_REST_API = process.env.BC_REST_API as string;
const X_AUTH_TOKEN = process.env.X_AUTH_TOKEN as string;

const headers = {
    'X-Auth-Token': X_AUTH_TOKEN,
    'Content-Type': 'application/json',
};

const bcPost = async (path: string, data?: unknown) => {
    const url = `${BC_REST_API}${path}`;
    try {
        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throwAndLogAxiosError(error, bcPost.name, path);
        } else {
            logAndThrowUnknownError(error, bcPost.name, path);
        }
    }
};

const bcGet = async (path: string) => {
    const url = `${BC_REST_API}${path}`;
    try {
        const response = await axios.get(url, { headers });
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throwAndLogAxiosError(error, bcGet.name, path);
        } else {
            logAndThrowUnknownError(bcGet.name, path);
        }
    }
};

export const getBcGraphqlToken = async (data: BcGraphqlTokenData): Promise<string> => {
    const path = `/v3/storefront/api-token`;

    const response = await bcPost(path, data);
    return response.data.token;
};

export const getCountries = async (): Promise<Countries[]> => {
    const path = `/v2/countries`;

    const response = await bcGet(path);

    return response;
};

export const getCountriesStates = async (countryResource: string): Promise<CountriesStates[]> => {
    const path = `/v2${countryResource}`;

    const response = await bcGet(path);

    return response;
};

export const createEmptyCart = async (): Promise<string> => {
    const path = `/v3/carts`;
    const data = {
        line_items: [],
    };

    const response = await bcPost(path, data);
    return response.data.id;
};

export const createCustomerImpersonationToken = async (
    expiresAt: number
): Promise<string> => {
    const path = `/v3/storefront/api-token-customer-impersonation`;
    const data = {
        channel_id: 1,
        expires_at: expiresAt,
    };

    const response = await bcPost(path, data);
    return response.data.token;
};
