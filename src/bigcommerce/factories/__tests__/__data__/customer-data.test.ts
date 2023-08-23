import { Customer } from '@mesh';
import { BcMutationCustomer } from '../../../types';

// @ts-expect-error: ignore bad non-nullable fields
export const acCustomerWithName: Customer = {
    firstname: 'example',
    lastname: 'customer',
};

// @ts-expect-error: ignore bad non-nullable fields
export const acCustomerWithEmail: Customer = {
    email: 'customer@example.com',
};

export const acCustomerEmailWithMandatoryFields: Customer = {
    email: 'customer@example.com',
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

export const acCustomerNameWithMandatoryFields: Customer = {
    firstname: 'example',
    lastname: 'customer',
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

export const bcMutationCustomerWithName: BcMutationCustomer = {
    id: 1,
    first_name: 'example',
    last_name: 'customer',
};

export const bcMutationCustomerWithEmail: BcMutationCustomer = {
    id: 1,
    email: 'customer@example.com',
};
