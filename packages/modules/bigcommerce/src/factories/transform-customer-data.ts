import { isBoolean, snakeCase } from 'lodash';

import { Customer, CustomerInput, CustomerOutput } from '@aligent/bigcommerce-resolvers';

import { getTransformedCustomerAddresses } from './helpers/transform-customer-addresses';
import { Customer as BC_Customer } from '@aligent/bigcommerce-operations';
import { getTransformedWishlists } from './helpers/transform-wishlists';
import {
    BcAddressRest,
    BcMutationCustomer,
    ValidatePasswordRequest,
    BCCustomerFormFields,
} from '../types';

export const transformBcCustomer = (
    bcCustomer: BC_Customer,
    bcAddresses: BcAddressRest[],
    isSubscriber: boolean
): Customer => {
    const { firstName, lastName, email } = bcCustomer;

    return {
        addresses: getTransformedCustomerAddresses(bcAddresses),
        email,
        firstname: firstName,
        lastname: lastName,
        is_subscribed: isSubscriber,
        allow_remote_shopping_assistance: false, // this will be overridden by form fields in customerResolver
        wishlists: getTransformedWishlists(bcCustomer.wishlists),
        wishlist: {
            // Types say wishlist is deprecated, but is required and needs to have visibility
            visibility: 'PUBLIC',
        },
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
            allow_remote_shopping_assistance: false,
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
    if (isBoolean(customer.allow_remote_shopping_assistance)) {
        bcCustomer.form_fields = [
            {
                id: customerId as number,
                name: 'allow_remote_shopping_assistance',
                value: customer.allow_remote_shopping_assistance ? ['Yes'] : [],
            },
        ];
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
const getCustomerPropertyFromFormFieldKey = (key: string): string => {
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
    formFields: BCCustomerFormFields
): { [key: string]: string } => {
    const customerAttributes = formFields.reduce((carry, formField) => {
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
