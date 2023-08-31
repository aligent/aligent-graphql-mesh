import { CountryCodeEnum } from '@aligent/bigcommerce-resolvers';

export const acCustomerAddress = {
    firstname: 'Adam',
    lastname: 'Hall',
    city: 'Adelaide',
    street: ['Level 1', '212 pirie st'],
    region: {
        region_id: 212,
    },
    postcode: '5000',
    country_code: 'AU' as CountryCodeEnum,
    telephone: '0400000000',
    company: 'Aligent',
    default_billing: true,
    default_shipping: true,
};

export const customerAddressWithUpdateId = {
    id: 1,
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
