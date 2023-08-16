import { BcAddress, BcCustomer } from '../../types';
import { bcPost, bcPut } from './client';
import { logAndThrowError } from '../../../utils/error-handling';

const CUSTOMERS_API = `/v3/customers`;
const CUSTOMER_ADDRESS_API = `/v3/customers/addresses`;

export const createCustomer = async (
    email: string,
    firstName: string,
    lastName: string,
    password: string
): Promise<BcCustomer> => {
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

    const response = await bcPost(CUSTOMERS_API, data);
    return response.data[0];
};

export const createCustomerAddress = async (address: BcAddress): Promise<BcAddress> => {
    const response = await bcPost(CUSTOMER_ADDRESS_API, [address]);
    if (!response.data[0]) {
        //BC rest api would sometimes return a 200 without any data.
        //Something has gone wrong, maybe the api token is expired, but there is no good error message.
        logAndThrowError(new Error('Expected address data missing from BC response.'));
    }
    return response.data[0];
};

export const updateCustomerAddress = async (address: BcAddress): Promise<BcAddress> => {
    const response = await bcPut(CUSTOMER_ADDRESS_API, [address]);
    return response.data[0];
};
