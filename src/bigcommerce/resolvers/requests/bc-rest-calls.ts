import axios from 'axios';
import { logAndThrowUnknownError, throwAndLogAxiosError } from '../error-handling';
import { BcCustomer, BcGraphqlTokenData } from '../../types';

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

export const createCustomer = async (
    email: string,
    firstName: string,
    lastName: string,
    password: string
): Promise<BcCustomer> => {
    const path = `/v3/customers`;

    const data = [
        {
            email: email,
            first_name: firstName,
            last_name: lastName,
            authentication: {
                force_password_rest: false,
                new_password: password,
            },
        },
    ];

    console.log(data);

    const response = await bcPost(path, data);
    return response.data[0];
};
