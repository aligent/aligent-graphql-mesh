import { BcAddress, CustomerAddressValidated } from '../types';
import { CountryCodeEnum, CustomerAddress, Region } from '@aligent/bigcommerce-resolvers';
import { checkIfDefaultAddress } from './helpers/transform-customer-addresses';

const DEFAULT_BILLING_NAME = 'Default Billing';
const DEFAULT_SHIPPING_NAME = 'Default Shipping';

export const transformCustomerAddress = (
    customerAddress: CustomerAddressValidated,
    state: Region | null,
    customerId: number,
    addressId?: number //optional for update address
): BcAddress => {
    const billingValue = customerAddress.default_billing ? ['Yes'] : [];
    const shippingValue = customerAddress.default_shipping ? ['Yes'] : [];

    // This array should only have one entry
    const formFields = [
        {
            name: DEFAULT_BILLING_NAME,
            value: billingValue,
        },
        {
            name: DEFAULT_SHIPPING_NAME,
            value: shippingValue,
        },
        {
            name: 'region',
            value: state?.name || '',
        },
        {
            name: 'region_id',
            value: state?.id || '',
        },
        {
            name: 'region_code',
            value: state?.code || '',
        },
    ];

    const bcAddress: BcAddress = {
        customer_id: customerId,
        first_name: customerAddress.firstname,
        last_name: customerAddress.lastname,
        city: customerAddress.city,
        country_code: customerAddress.country_code,
        state_or_province: state?.name,
        postal_code: customerAddress.postcode,
        address1: customerAddress.street[0],
        address2: customerAddress.street[1] || '',
        ...(customerAddress.telephone && { phone: customerAddress.telephone }),
        ...(customerAddress.company && { company: customerAddress.company }),
        form_fields: formFields,
    };

    if (addressId) {
        bcAddress.id = addressId;
    }

    return bcAddress;
};
export const transformBcAddress = (address: BcAddress): CustomerAddress => {
    return {
        id: address.id,
        street: [address.address1, address.address2 || null],
        city: address.city,
        company: address.company,
        country_code: address.country_code as CountryCodeEnum,
        firstname: address.first_name,
        lastname: address.last_name,
        telephone: address.phone,
        postcode: address.postal_code,
        region: {
            region:
                address.state_or_province ||
                (address.form_fields.find((field) => field.name === 'region')?.value as string),
            region_id: address.form_fields.find((field) => field.name === 'region_id')?.value as
                | number
                | null,
            region_code: address.form_fields.find((field) => field.name === 'region_code')
                ?.value as string,
        },
        default_billing: checkIfDefaultAddress(address.form_fields, DEFAULT_BILLING_NAME),
        default_shipping: checkIfDefaultAddress(address.form_fields, DEFAULT_SHIPPING_NAME),
    };
};
