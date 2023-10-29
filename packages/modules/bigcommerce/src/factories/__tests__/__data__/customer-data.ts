import { Customer, CustomerOutput } from '@aligent/bigcommerce-resolvers';
import { BcMutationCustomer, ValidatePasswordRequest } from '../../../types';
import {
    bcWishListItems,
    transformedWishlistItemsTwo,
} from '../../helpers/__tests__/__data__/transform-customer-wishlist-data';

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
        allow_remote_shopping_assistance: null,
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
        allow_remote_shopping_assistance: null,
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

export const bcCreateCustomerInputData: BcMutationCustomer = {
    email: 'example@example.com',
    first_name: 'example',
    last_name: 'customer',
    authentication: {
        force_password_reset: false,
        new_password: 'password',
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

export const bcMutationCustomerWithRemoteAssistanceSetToTrue: BcMutationCustomer = {
    id: 1,
    form_fields: [
        {
            id: 1,
            name: 'allow_remote_shopping_assistance',
            value: ['Yes'],
        },
    ],
};

export const bcMutationCustomerWithRemoteAssistanceSetToFalse: BcMutationCustomer = {
    id: 1,
    form_fields: [
        {
            id: 1,
            name: 'allow_remote_shopping_assistance',
            value: [],
        },
    ],
};

export const bcCustomer = {
    attributes: { attribute: { entityId: 1, name: 'name' } },
    addressCount: 1,
    attributeCount: 3,
    company: '',
    customerGroupId: 4,
    email: 'jack.mesh@aligent.com.au',
    entityId: 18,
    firstName: 'jack',
    lastName: 'mesh',
    notes: '',
    phone: '0432471111',
    taxExemptCategory: '',
    storeCredit: [{ currencyCode: 'AUD', value: 0 }],
    wishlists: {
        edges: [
            {
                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                node: {
                    entityId: 5,
                    isPublic: true,
                    items: bcWishListItems,
                    name: 'sample-list',
                    token: 'bf1ed4dc-1724-48a6-92a3-bef2c1dd5868',
                },
            },
        ],
        pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
        },
    },
};

export const bcAddresses = [
    {
        id: 46,
        address1: '212 pirie st',
        address2: '',
        address_type: 'residential',
        city: 'Adelaide',
        company: '',
        country: 'Australia',
        country_code: 'AU',
        customer_id: 18,
        first_name: 'jack',
        last_name: 'mesh',
        phone: '0432471111',
        postal_code: '5000',
        state_or_province: 'South Australia',
        form_fields: [
            {
                name: 'Authority To Leave',
                value: ['Yes - Allow my order to be delivered without requiring a signature'],
            },
            { name: 'Default Billing', value: ['Yes'] },
        ],
    },
];

export const acCustomer = {
    addresses: [
        {
            id: 46,
            firstname: 'jack',
            lastname: 'mesh',
            company: '',
            city: 'Adelaide',
            street: ['212 pirie st'],
            region: { region: 'South Australia', region_code: '', region_id: null },
            postcode: '5000',
            country_code: 'AU',
            telephone: '0432471111',
            default_billing: true,
            default_shipping: false,
        },
    ],
    email: 'jack.mesh@aligent.com.au',
    firstname: 'jack',
    lastname: 'mesh',
    is_subscribed: true,
    allow_remote_shopping_assistance: false,
    wishlists: transformedWishlistItemsTwo,
    wishlist: { visibility: 'PUBLIC' },
    reviews: { items: [], page_info: { current_page: null, page_size: null, total_pages: null } },
};
