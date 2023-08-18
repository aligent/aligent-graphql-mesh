import { BcAddress, BcAddressRest, BcCustomer, BcSubscriber } from '../../types';
import { bcGet, bcPost, bcPut } from './client';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';

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
    const path = `${CUSTOMER_ADDRESS_API}?include=formfields&customer_id:in=${bcCustomerId}`;

    const response = await bcGet(path);
    return response.data;
};

export const createCustomerAddress = async (address: BcAddress): Promise<BcAddress> => {
    const response = await bcPost(CUSTOMER_ADDRESS_API, [address]);
    if (!response.data[0]) {
        //BC rest api will return 200 without any data, if the address already exits
        //TODO: improve error handling for this case
        logAndThrowError(new Error('Address already exists.'));
    }
    return response.data[0];
};

export const getSubscriberByEmail = async (email: string): Promise<BcSubscriber | undefined> => {
    const path = `${CUSTOMER_SUBSCRIBERS}?email=${email}`;
    const response = await bcGet(path);

    return response.data[0];
}

export const updateCustomerAddress = async (address: BcAddress): Promise<BcAddress> => {
    const response = await bcPut(CUSTOMER_ADDRESS_API, [address]);
    return response.data[0];
};

/**
 * Returns the address for the given addressId and customerId.
 * If the address does not exist then return null.
 */
export const getCustomerAddress = async (
    addressId: number,
    customerId: number
): Promise<BcAddress | null> => {
    const path = `${CUSTOMER_ADDRESS_API}?id:in=${addressId}&customer_id:in=${customerId}`;
    const response = await bcGet(path);

    if (response.data.length === 0) {
        return null; //if there is no data we return null instead of empty array
    }
    return response.data;
};
