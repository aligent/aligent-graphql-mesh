import { OroCustomerAddress, CustomerAddressValidated } from '../../../../types/customer-address';
import { CustomerAddress } from '@aligent/orocommerce-resolvers';

export const inputAddress: CustomerAddressValidated = {
    firstname: 'Mandy',
    lastname: 'Tatla',
    company: '',
    city: 'Adelaide',
    street: ['212 Pirie St'],
    region: {
        region: null,
        region_code: null,
        region_id: 'AU-SA',
    },
    postcode: '5000',
    country_code: 'AU',
    telephone: '0432471111',
    default_billing: true,
    default_shipping: true,
};

export const outputAddress: CustomerAddress = {
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
    postcode: '5000',
    country_code: 'AU',
    telephone: '0432471111',
    default_billing: true,
    default_shipping: true,
};

export const addresses: OroCustomerAddress = {
    type: 'customeruseraddresses',
    attributes: {
        phone: '0432471111',
        street: '212 Pirie St',
        street2: null,
        city: 'Adelaide',
        postalCode: '5000',
        organization: null,
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
                id: 'mine',
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
};

export const oroAddressesResponse: OroCustomerAddress = {
    type: 'customeruseraddresses',
    id: '123',
    attributes: {
        phone: '0432471111',
        street: '212 Pirie St',
        street2: null,
        city: 'Adelaide',
        postalCode: '5000',
        organization: null,
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
};
