import { CountryCodeEnum, CustomerAddress } from '../../../meshrc/.mesh';
import { BcAddressRest } from '../../types';

export const getTransformedCustomerAddresses = (bcAddresses: BcAddressRest[]): CustomerAddress[] => {
    return bcAddresses.map((address) => {
        const {id, first_name, last_name, company, city, address1, state_or_province ,postal_code, country_code, phone} = address
        return {
            id: id,
            firstname: first_name,
            lastname: last_name,
            company,
            city,
            street: [address1],
            region:{
                region: state_or_province, 
                region_code: null, // BC doesnt return this
               region_id: null // BC doesnt return this
            },
            postcode: postal_code,
            country_code: country_code as CountryCodeEnum,
            telephone: phone ,
            default_billing: null, // BC doesnt return this
            default_shipping: null, // BC doesnt return this
        };
    });
};
