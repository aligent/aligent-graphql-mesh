import { snakeCase } from 'lodash';
import { Customer, CustomerInput, CustomerOutput } from '@aligent/bigcommerce-resolvers';
import { getTransformedCustomerAddresses } from './helpers/transform-customer-addresses';
import {
    BcMutationCustomer,
    ValidatePasswordRequest,
    BcCustomer,
    BcCreateCustomerMutationInput,
} from '../types';

export const transformBcCustomer = (bcCustomer: BcCustomer): Customer => {
    const { addresses, first_name, last_name, email } = bcCustomer;

    return {
        addresses: getTransformedCustomerAddresses(addresses),
        email,
        firstname: first_name,
        lastname: last_name,
        allow_remote_shopping_assistance: null, // This is being forced to show the PWA that BC doesnt have this feature
        wishlist: {
            // Types say wishlist is deprecated, but is required and needs to have visibility
            visibility: 'PUBLIC',
        },
        /* This has a sub-resolver to get wishlist information but have to defined it to tell
         * typescript we're not leaving it out*/
        wishlists: [],
        reviews: {
            // Types require this be here
            items: [],
            page_info: {
                current_page: null,
                page_size: null,
                total_pages: null,
            },
        },
    };
};

export const transformAcCustomerInputToBcCustomerInput = (
    firstname: string,
    lastname: string,
    email: string,
    password: string
): BcCreateCustomerMutationInput => {
    return {
        firstName: firstname,
        lastName: lastname,
        email,
        password,
    };
};

export const transformBcCustomerToAcCustomerForMutation = (
    bcCustomer: BcMutationCustomer,
    isSubscribed?: boolean
): CustomerOutput => {
    return {
        customer: {
            email: bcCustomer.email,
            firstname: bcCustomer.first_name,
            lastname: bcCustomer.last_name,
            is_subscribed: isSubscribed,

            //TODO: Following attributes need to be remove using CodeGen, they are badly generated and required, but should not.
            allow_remote_shopping_assistance: null, // This is being forced to show the PWA that BC doesnt have this feature
            wishlists: [],
            wishlist: {
                visibility: 'PUBLIC',
            },
            reviews: {
                items: [],
                page_info: {
                    current_page: null,
                    page_size: null,
                    total_pages: null,
                },
            },
        },
    };
};

export const transformCustomerForMutation = (
    customer: CustomerInput,
    customerId?: number
): BcMutationCustomer => {
    const bcCustomer: BcMutationCustomer = {
        ...(customerId && {
            id: customerId,
        }),
    };

    if (customer.email) {
        bcCustomer.email = customer.email;
    }
    if (customer.firstname) {
        bcCustomer.first_name = customer.firstname;
    }
    if (customer.lastname) {
        bcCustomer.last_name = customer.lastname;
    }

    return bcCustomer;
};

export const transformAcCustomerPasswordChange = (
    customerId: number,
    newPassword: string
): BcMutationCustomer => {
    const bcCustomer: BcMutationCustomer = {
        id: customerId,
    };
    bcCustomer.authentication = {
        new_password: newPassword,
        force_password_reset: false,
    };

    return bcCustomer;
};

export const transformAcCustomerValidatePassword = (
    email: string,
    password: string,
    channelId: number
): ValidatePasswordRequest => {
    return {
        email: email,
        password: password,
        channel_id: channelId,
    };
};

const formFieldPropertyMapping: { [index: string]: string } = {
    /* Add form field name to property name mapping here*/
    // select_your_industry: 'industry',
};

/**
 * Gets a customer property from a form field "name".
 * @param key
 */
export const getCustomerPropertyFromFormFieldKey = (key: string): string => {
    const keyToSnakeCase = snakeCase(key);

    const mappedKey = formFieldPropertyMapping[keyToSnakeCase];

    if (!mappedKey) return keyToSnakeCase;

    return mappedKey;
};

/**
 * Formats customer formField properties into an object of key value pairs
 *
 * NOTE: for custom properties defined within the store admin to be returned in a
 * resolver response, the schema.graphql file needs to be updated with the new properties
 *
 * @param formFields
 */
export const getCustomerAttributesFromFormFields = (
    formFields: BcCustomer['form_fields']
): { [key: string]: string } => {
    const customerAttributes = (formFields || [])?.reduce((carry, formField) => {
        const { name, value } = formField;

        const propertyName = getCustomerPropertyFromFormFieldKey(name);

        return {
            ...carry,
            [propertyName]: value,
        };
    }, {});

    return customerAttributes;
};

export const getTransformedCreateCustomerData = (
    email: string,
    firstname: string,
    lastname: string,
    password: string
): BcMutationCustomer => {
    const transformedCustomer: BcMutationCustomer = {
        email: email,
        first_name: firstname,
        last_name: lastname,
        authentication: {
            force_password_reset: false,
            new_password: password,
        },
    };

    return transformedCustomer;
};
