import {
    BcAddress,
    BcAddressRest,
    BcCustomer,
    BCCustomerFormFields,
    BcMutationCustomer,
    ValidatePasswordRequest,
    ValidatePasswordResponse,
} from '../../types';
import { bcDelete, bcGet, bcPost, bcPut } from './client';
import { logAndThrowError } from '@aligent/utils';
import { CustomerAttributes } from '@aligent/bigcommerce-operations';
import { CustomerInput } from '@aligent/bigcommerce-resolvers';
import { getDataFromMeshCache } from '../../utils/mesh-cache';

const CUSTOMERS_API = `/v3/customers`;
const CUSTOMER_ADDRESS_API = `/v3/customers/addresses`;
const CUSTOMER_VALIDATE_CREDENTIALS_API = `/v3/customers/validate-credentials`;
const CUSTOMER_FORM_FIELDS_API = `/v3/customers/form-field-values`;
const CACHE_KEY__CUSTOMER_ATTRIBUTES = 'customer_attributes';
const CACHE_TTL__CUSTOMER_ATTRIBUTES = process.env.CACHE_TTL__CUSTOMER_ATTRIBUTES;

/* istanbul ignore file */
export const createCustomer = async (customerInput: CustomerInput): Promise<BcCustomer> => {
    const data = [customerInput];

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

/**
 * Requests for customer attributes
 */
export const getCustomerAttributes = async (): Promise<{ [key: string]: number }> => {
    const path = `/v3/customers/attributes`;

    const response = (await bcGet(path)) as { data: { [key: string]: number }[] };

    if (response.data.length === 0) {
        logAndThrowError(`Customer attributes not found`);
    }

    const formattedCustomerAttributes: { [key: string]: number } = response.data.reduce(
        (carry, attribute) => {
            const { id, name } = attribute;
            return { ...carry, [name]: id };
        },
        {}
    );

    return formattedCustomerAttributes;
};

export const retrieveCustomerAttributesFromCache = async (
    context: GraphQLModules.ModuleContext
): Promise<{ [key: string]: number }> => {
    const query = () => getCustomerAttributes();

    const cacheKey = `${CACHE_KEY__CUSTOMER_ATTRIBUTES}`;

    return getDataFromMeshCache(context, cacheKey, query, { ttl: CACHE_TTL__CUSTOMER_ATTRIBUTES });
};

export const upsertCustomerAttributeValue = async (
    attributeId: number,
    cartId: string,
    customerId: number
): Promise<CustomerAttributes> => {
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

export const getCustomerFormFields = async (
    bcCustomerId: number
): Promise<BCCustomerFormFields> => {
    const path = `${CUSTOMER_FORM_FIELDS_API}?customer_id=${bcCustomerId}`;

    const response = await bcGet(path);
    return response.data;
};
