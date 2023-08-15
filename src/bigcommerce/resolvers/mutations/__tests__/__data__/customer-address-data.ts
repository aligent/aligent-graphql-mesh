import { CountryCodeEnum } from '@mesh';

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
    ],
};

export const customerAddress = {
    firstname: 'Adam',
    lastname: 'Hall',
    city: 'Adelaide',
    street: ['Level 1', '212 pirie st'],
    region: {
        region: 'South Australia',
    },
    postcode: '5000',
    country_code: 'AU' as CountryCodeEnum,
    telephone: '0400000000',
    company: 'Aligent',
    default_billing: true,
    default_shipping: true,
};

export const customerAddressMissingRequiredFields = {
    city: 'Adelaide',
    street: ['Level 1', '212 pirie st'],
    region: {
        region: 'South Australia',
    },
    postcode: '5000',
    country_code: 'AU' as CountryCodeEnum,
    telephone: '0400000000',
    company: 'Aligent',
    default_billing: true,
    default_shipping: true,
};
