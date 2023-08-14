import { BcAddress, BcAddressRest, BcCustomer, BcSubscriber } from '../../types';
import { bcPost, bcGet } from './client';

const CUSTOMERS_API = `/v3/customers`;
const CUSTOMER_ADDRESS_API = `/v3/customers/addresses`;
const CUSTOMER_SUBSCRIBERS = `/v3/customers/subscribers`;

/* istanbul ignore file */
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

export const getAllCustomerAddresses = async (bcCustomerId: number): Promise<BcAddressRest[]> => {
    const path = `${CUSTOMER_ADDRESS_API}?customer_id:in=${bcCustomerId}`;

    const response = await bcGet(path);
    return response.data;
};

export const createCustomerAddress = async (address: BcAddress): Promise<BcAddress> => {
    const response = await bcPost(CUSTOMER_ADDRESS_API, [address]);
    return response.data[0];
};

export const getSubscriberByEmail = async (email: string): Promise<BcSubscriber | undefined> => {
    const path = `${CUSTOMER_SUBSCRIBERS}?email=${email}`;
    const response = await bcGet(path);

    return response.data[0];
};
