import axios from 'axios';
import { logAndThrowError } from '../error-handling';
import { BcGraphqlTokenData } from '../../types';

const BC_REST_API = process.env.BC_REST_API as string;
const X_AUTH_TOKEN = process.env.X_AUTH_TOKEN as string;

const headers = {
    'X-Auth-Token': X_AUTH_TOKEN,
    'Content-Type': 'application/json',
};

// TODO: return type
const bcPost = async (path: string, data?: unknown) => {
    const url = `${BC_REST_API}${path}`;
    return axios.post(url, data, { headers }).then(resp => resp.data).catch(logAndThrowError);
};

export const getBcGraphqlToken = async (data: BcGraphqlTokenData): Promise<string> => {
    const path = `/storefront/api-token`;

    const response = await bcPost(path, data);
    return response.data.token;
};

export const createEmptyCart = async (): Promise<string> => {
    const path = `/v3/carts`;
    const data = {
        line_items: [],
    };

    const response = await bcPost(path, data);
    return response.data.id;
};
