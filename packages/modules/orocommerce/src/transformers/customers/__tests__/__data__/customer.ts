import { CustomerUser } from '../../../../types/customer-user';
import { OroCustomerAddress } from '../../../../types/customer-address';
import { CustomerAddress } from '@aligent/orocommerce-resolvers';

export const oroCustomer: CustomerUser = {
    type: 'customerusers',
    id: '54',
    attributes: {
        email: 'mandy.tatla@aligent.com.au',
        firstName: 'Mandy',
        lastName: 'Tatla',
        password: '2234',
    },
    relationships: {
        userRoles: {
            data: [
                {
                    type: 'customeruserroles',
                    id: '1',
                },
                {
                    type: 'customeruserroles',
                    id: '2',
                },
            ],
        },
        customer: {
            data: {
                type: 'customers',
                id: '53',
            },
        },
        addresses: {
            data: [
                {
                    type: 'customeruseraddresses',
                    id: '151',
                },
            ],
        },
    },
};

export const oroAddresses: OroCustomerAddress[] = [
    {
        type: 'customeruseraddresses',
        id: '123',
        attributes: {
            phone: '0432471111',
            street: '212 Pirie St',
            street2: null,
            city: 'Adelaide',
            postalCode: '5001',
            organization: null,
            customRegion: null,
            namePrefix: null,
            firstName: 'Mandy',
            lastName: 'Tatla',
            types: [
                {
                    default: true,
                    addressType: 'billing',
                },
                {
                    default: true,
                    addressType: 'shipping',
                },
            ],
        },
        relationships: {
            customerUser: {
                data: {
                    type: 'customerusers',
                    id: '54',
                },
            },
            country: {
                data: {
                    type: 'countries',
                    id: 'AU',
                },
            },
            region: {
                data: {
                    type: 'regions',
                    id: 'AU-SA',
                },
            },
        },
    },
];

export const outputAddress: CustomerAddress[] = [
    {
        id: 123,
        firstname: 'Mandy',
        lastname: 'Tatla',
        company: null,
        city: 'Adelaide',
        street: ['212 Pirie St', null],
        region: {
            region: null,
            region_code: 'AU-SA',
            region_id: null,
        },
        postcode: '5001',
        country_code: 'AU',
        telephone: '0432471111',
        default_billing: true,
        default_shipping: true,
    },
];

export const customer = {
    addresses: outputAddress,
    email: 'mandy.tatla@aligent.com.au',
    firstname: 'Mandy',
    lastname: 'Tatla',
    is_subscribed: null,
    allow_remote_shopping_assistance: false,
};
