import { CountryCodeEnum } from '@aligent/bigcommerce-resolvers';

export const bcAddress = {
    customer_id: 123,
    first_name: 'Adam',
    last_name: 'Hall',
    city: 'Adelaide',
    country_code: 'AU',
    address1: 'Level 1',
    address2: '212 pirie st',
    state_or_province: 'South Australia',
    postal_code: '5000',
    phone: '0400000000',
    company: 'Aligent',
    form_fields: [
        {
            name: 'Default Billing',
            value: ['Yes'],
        },
        {
            name: 'Default Shipping',
            value: ['Yes'],
        },
        {
            name: 'region',
            value: 'South Australia',
        },
        {
            name: 'region_id',
            value: 212,
        },
        {
            name: 'region_code',
            value: 'SA',
        },
    ],
};

export const acState = {
    code: 'SA',
    name: 'South Australia',
    id: 212,
};

export const bcAddressUpdated = {
    id: 5,
    customer_id: 123,
    first_name: 'Adam',
    last_name: 'Hall',
    city: 'Adelaide',
    country_code: 'AU',
    address1: 'Level 1',
    address2: '212 pirie st',
    state_or_province: 'South Australia',
    postal_code: '5000',
    phone: '0400000000',
    company: 'Aligent',
    form_fields: [
        {
            name: 'Default Billing',
            value: ['Yes'],
        },
        {
            name: 'Default Shipping',
            value: ['Yes'],
        },
        {
            name: 'region',
            value: 'South Australia',
        },
        {
            name: 'region_id',
            value: 212,
        },
        {
            name: 'region_code',
            value: 'SA',
        },
    ],
};

export const acCustomerAddressInput = {
    firstname: 'Adam',
    lastname: 'Hall',
    city: 'Adelaide',
    street: ['Level 1', '212 pirie st'],
    region: {
        region: 'South Australia',
        region_id: 212,
        region_code: 'SA',
    },
    postcode: '5000',
    country_code: 'AU' as CountryCodeEnum,
    telephone: '0400000000',
    company: 'Aligent',
    default_billing: true,
    default_shipping: true,
};

export const acCustomerAddressOutput = {
    firstname: 'Adam',
    lastname: 'Hall',
    city: 'Adelaide',
    street: ['Level 1', '212 pirie st'],
    region: {
        region: 'South Australia',
        region_id: 212,
        region_code: 'SA',
    },
    postcode: '5000',
    country_code: 'AU' as CountryCodeEnum,
    telephone: '0400000000',
    company: 'Aligent',
    default_billing: true,
    default_shipping: true,
};

export const customerAddressBillingShippingFalse = {
    firstname: 'Adam',
    lastname: 'Hall',
    city: 'Adelaide',
    street: ['Level 1', '212 pirie st'],
    region: {
        region: 'South Australia',
        region_id: 212,
        region_code: 'SA',
    },
    postcode: '5000',
    country_code: 'AU' as CountryCodeEnum,
    telephone: '0400000000',
    company: 'Aligent',
    default_billing: false,
    default_shipping: false,
};

export const customerAddressBillingFalse = {
    firstname: 'Adam',
    lastname: 'Hall',
    city: 'Adelaide',
    street: ['Level 1', '212 pirie st'],
    region: {
        region: 'South Australia',
        region_id: 212,
        region_code: 'SA',
    },
    postcode: '5000',
    country_code: 'AU' as CountryCodeEnum,
    telephone: '0400000000',
    company: 'Aligent',
    default_billing: false,
    default_shipping: true,
};

export const bcAddressUpdatedShippingBillingFalse = {
    id: 5,
    customer_id: 123,
    first_name: 'Adam',
    last_name: 'Hall',
    city: 'Adelaide',
    country_code: 'AU',
    address1: 'Level 1',
    address2: '212 pirie st',
    state_or_province: 'South Australia',
    postal_code: '5000',
    phone: '0400000000',
    company: 'Aligent',
    form_fields: [
        {
            name: 'Default Billing',
            value: [],
        },
        {
            name: 'Default Shipping',
            value: [],
        },
        {
            name: 'region',
            value: 'South Australia',
        },
        {
            name: 'region_id',
            value: 212,
        },
        {
            name: 'region_code',
            value: 'SA',
        },
    ],
};
