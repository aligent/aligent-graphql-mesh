import { BCConsignment, BCShipping } from '../types';
import { CountryCodeEnum, OrderAddress } from '@aligent/bigcommerce-resolvers';

export const getTransformedShippingAddress = (consignment: BCConsignment): OrderAddress => {
    //assumption: pwa currently only supports single shipping address
    const {
        city,
        company,
        country_iso2,
        first_name,
        last_name,
        zip,
        street_1,
        street_2,
        phone,
        state,
    }: BCShipping = consignment.shipping[0];

    return {
        city: city,
        company: company,
        country_code: country_iso2 as CountryCodeEnum,
        firstname: first_name,
        lastname: last_name,
        postcode: zip,
        street: [street_1 + ' ' + street_2],
        telephone: phone,
        region: state,
    };
};
