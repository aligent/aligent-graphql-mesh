import { Customer, CustomerInput, CustomerOutput } from '@aligent/bigcommerce-resolvers';
import { BCOrder, BcAddressRest, BcMutationCustomer, ValidatePasswordRequest } from '../types';
import { getTransformedCustomerAddresses } from './helpers/transform-customer-addresses';
import { Customer as BC_Customer} from '@aligent/bigcommerce-operations';
import { getTransformedWishlists } from './helpers/transform-wishlists';
import { getTransformedOrders } from './helpers/transform-customer-orders';

export const transformBcCustomer = (
    bcCustomer: BC_Customer,
    bcAddresses: BcAddressRest[],
    isSubscriber: boolean,
    bcOrders: BCOrder[]
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
        orders: {
            items: getTransformedOrders(bcOrders),
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
    customerId: number,
    customer: CustomerInput
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
