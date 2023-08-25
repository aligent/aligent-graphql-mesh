import {
    BcAddress,
    BcAddressRest,
    BcCustomer,
    BcMutationCustomer,
    ValidatePasswordRequest,
    ValidatePasswordResponse,
} from '../../types';
import { bcDelete, bcGet, bcPost, bcPut } from './client';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';
import { BC_CustomerAttributes } from '@mesh/external/BigCommerceGraphqlApi';

const CUSTOMERS_API = `/v3/customers`;
const CUSTOMER_ADDRESS_API = `/v3/customers/addresses`;
const CUSTOMER_VALIDATE_CREDENTIALS_API = `/v3/customers/validate-credentials`;

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

export const updateCustomer = async (customer: BcMutationCustomer): Promise<BcMutationCustomer> => {
    const response = await bcPut(CUSTOMERS_API, [customer]);
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
        logAndThrowError('Address already exists.');
    }
    return response.data[0];
};

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

export const deleteCustomerAddress = async (addressId: number): Promise<boolean> => {
    const path = `${CUSTOMER_ADDRESS_API}?id:in=${addressId}`;

    await bcDelete(path);
    //Nothing is returned by BigComm, not matter if success or not, always 204 No Content
    //So if there is no critical error we are just returning true
    return true;
};

export const getCustomerAttributeFields = async () => {
    const path = `${CUSTOMERS_API}/attributes`;
    const response = await bcGet(path);

    return response.data;
};

export const getCustomerAttributeId = async (name: string): Promise<number> => {
    const path = `/v3/customers/attributes?name=${name}`;

    const response = await bcGet(path);

    if (response.data.length === 0) {
        logAndThrowError(`Customer attribute: ${name} not found`);
    }

    return response.data[0].id;
};

export const upsertCustomerAttributeValue = async (
    attributeId: number,
    cartId: string,
    customerId: number
): Promise<BC_CustomerAttributes> => {
    const path = `/v3/customers/attribute-values`;

    const data = [
        {
            attribute_id: attributeId,
            value: cartId,
            customer_id: customerId,
        },
    ];
    const response = await bcPut(path, data);

    return response.data;
};

export const validateCustomerCredentials = async (
    validatePassword: ValidatePasswordRequest
): Promise<ValidatePasswordResponse> => {
    const response = await bcPost(CUSTOMER_VALIDATE_CREDENTIALS_API, validatePassword);
    return response;
};

export const getCustomersByEmail = async (email: string): Promise<BcCustomer[]> => {
    const path = `/v3/customers?email:in=${email}`;
    const response = await bcGet(path);

    return response.data;
};
