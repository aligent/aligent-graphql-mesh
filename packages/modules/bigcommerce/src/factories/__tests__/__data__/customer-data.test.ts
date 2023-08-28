import { Customer, CustomerOutput } from '@aligent/bigcommerce-resolvers';
import { BcMutationCustomer, ValidatePasswordRequest } from '../../../types';

// @ts-expect-error: ignore bad non-nullable fields
export const acCustomerWithName: Customer = {
    firstname: 'example',
    lastname: 'customer',
};

// @ts-expect-error: ignore bad non-nullable fields
export const acCustomerWithEmail: Customer = {
    email: 'customer@example.com',
};

export const acCustomerOutputWithEmail: CustomerOutput = {
    customer: {
        email: 'customer@example.com',
        is_subscribed: false,
        //Mandatory fields required by customer type
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

export const acCustomerOutputWithName: CustomerOutput = {
    customer: {
        firstname: 'example',
        lastname: 'customer',
        is_subscribed: false,

        //Mandatory fields required by customer type
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

export const bcMutationCustomerWithName: BcMutationCustomer = {
    id: 1,
    first_name: 'example',
    last_name: 'customer',
};

export const bcMutationCustomerWithEmail: BcMutationCustomer = {
    id: 1,
    email: 'customer@example.com',
};

export const bcCustomerForPasswordChange: BcMutationCustomer = {
    id: 1,
    authentication: {
        force_password_reset: false,
        new_password: 'Password1',
    },
};

export const bcValidatePasswordRequest: ValidatePasswordRequest = {
    email: 'example@example.com',
    password: 'Password1',
    channel_id: 1,
};
