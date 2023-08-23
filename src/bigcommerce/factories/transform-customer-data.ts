import { Customer } from '../../meshrc/.mesh';
import { BcAddressRest, BcMutationCustomer } from '../types';
import { getTransformedCustomerAddresses } from './helpers/transform-customer-addresses';
import { BC_Customer } from '@mesh/external/BigCommerceGraphqlApi';
import { getTransformedWishlists } from './helpers/transform-wishlists';

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
        allow_remote_shopping_assistance: false, // Cant see equivalent BC value
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
): Customer => {
    //Assumption: PWA is ok if extra data such as firstname is sent when updating the email.
    //BigCom rest api always provides everything, if needed we'd need to add a step to check the input payload.
    return {
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
    };
};

export const transformCustomerForMutation = (
    customerId: number,
    customer: Customer
): BcMutationCustomer => {
    const bcCustomer: BcMutationCustomer = {
        id: customerId,
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
    //Password is ignored here as that would reset the password. It's a required field to be passed by PWA.
    // if (customer.password) {
    //     bcCustomer.authentication = {
    //         new_password: customer.password,
    //         force_password_reset: false,
    //     };
    // }

    return bcCustomer;
};

export const transformCustomerPasswordChange = (
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
