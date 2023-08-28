import { CountryCodeEnum, CustomerAddress } from '@aligent/bigcommerce-resolvers';
import { BcAddressRest, FormField } from '../../types';

export const getTransformedCustomerAddresses = (
    bcAddresses: BcAddressRest[]
): CustomerAddress[] => {
    return bcAddresses.map((address) => {
        const {
            id,
            first_name,
            last_name,
            company,
            city,
            address1,
            state_or_province,
            postal_code,
            country_code,
            phone,
        } = address;

        return {
            id: id,
            firstname: first_name,
            lastname: last_name,
            company,
            city,
            street: [address1],
            region: {
                region: state_or_province,
                region_code: null, // BC doesnt return this
                region_id: null, // BC doesnt return this
            },
            postcode: postal_code,
            country_code: country_code as CountryCodeEnum,
            telephone: phone,
            default_billing: checkIfDefaultAddress(address.form_fields, 'Default Billing'),
            default_shipping: checkIfDefaultAddress(address.form_fields, 'Default Shipping'),
        };
    });
};

// In BC there are optional checkboxes that have been added to custom addresses for these options
export const checkIfDefaultAddress = (formFields: FormField[], fieldName: string): boolean => {
    const isDefaultBilling = formFields.find((field) => field.name === fieldName);
    if (!isDefaultBilling) return false;
    if (isDefaultBilling.value.includes('Yes')) return true;
    return false;
};
