import { CartAddressInput, CountryCodeEnum, CustomerAddress, InputMaybe } from '@aligent/bigcommerce-resolvers';
import { BcAddressRest, DefaultBillingOrShippingField, FormField } from '../../types';

export const getTransformedCustomerAddresses = (
    bcAddresses?: BcAddressRest[]
): CustomerAddress[] => {
    if (!bcAddresses) return [];

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
            form_fields,
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
                region_code:
                    (form_fields.find((field) => field.name === 'region_code')?.value as string) ||
                    '',
                region_id:
                    (form_fields.find((field) => field.name === 'region_id')?.value as number) ||
                    null,
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
export const checkIfDefaultAddress = (
    formFields: FormField[],
    fieldName: DefaultBillingOrShippingField['name']
): boolean => {
    const isDefaultBilling = formFields.find(
        (field): field is DefaultBillingOrShippingField => field.name === fieldName
    );

    if (isDefaultBilling?.value[0] === 'Yes') return true;
    return false;
};

export const customerAddressToCartAddress = (
    address?: CustomerAddress | null
): InputMaybe<CartAddressInput> | undefined => {
    if (!address) {
        return;
    }

    return {
        ...address,
        city: address.city || '',
        country_code: address.country_code || '',
        firstname: address.firstname || '',
        lastname: address.lastname || '',
        street: address.street || [''],
        region: address.region?.region_code || '',
        region_id: address.region?.region_id,
    };
};
