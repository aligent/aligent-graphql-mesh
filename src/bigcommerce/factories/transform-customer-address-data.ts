import {BcAddress} from "../types";
import {CountryCodeEnum, CustomerAddress} from "../../meshrc/.mesh";
import {ValidatedInput} from "../resolvers/mutations/create-customer-address";

export const transformCustomerAddress = (customerAddress: ValidatedInput, customerId: number): BcAddress => {
    const formFields = [];

    if (customerAddress.default_billing) {
        formFields.push({
            name: "Default Billing",
            value: [
                customerAddress.default_billing ? "Yes" : ""
            ]
        })
    }

    if (customerAddress.default_shipping) {
        formFields.push({
            name: "Default Shipping",
            value: [
                customerAddress.default_shipping ? "Yes" : ""
            ]
        })
    }

    return {
        customer_id: customerId,
        first_name: customerAddress.firstname,
        last_name: customerAddress.lastname,
        city: customerAddress.city,
        country_code: customerAddress.country_code,
        state_or_province: customerAddress.region.region,
        postal_code: customerAddress.postcode,
        address1: customerAddress.street[0],
        address2: customerAddress.street[1] || "",
        ...customerAddress.telephone && { phone: customerAddress.telephone },
        ...customerAddress.company && { company: customerAddress.company },
        form_fields: formFields
    };
}
export const transformBcAddress = (address: BcAddress): CustomerAddress => {
    const defaultBilling = address.form_fields?.find(({ name }) => {
        return name === 'Default Billing';
    });

    const defaultShipping = address.form_fields?.find(({ name }) => {
        return name === 'Default Shipping';
    });

    return {
        id: address.id,
        street: [
            address.address1,
            address.address2 || null
        ],
        city: address.city,
        company: address.company,
        country_code: address.country_code as CountryCodeEnum,
        firstname: address.first_name,
        lastname: address.last_name,
        telephone: address.phone,
        postcode: address.postal_code,
        region: {
            region: address.state_or_province
        },
        default_billing: Boolean(defaultBilling),
        default_shipping: Boolean(defaultShipping)
    }
}
