import { CustomerAddress, CountryCodeEnum } from '@aligent/orocommerce-resolvers';
import { OroCustomerAddress, CustomerAddressValidated } from '../../types';

export const getTransformCustomerAddress = (
    customerAddress: CustomerAddressValidated
): OroCustomerAddress => {
    const {
        postcode,
        city,
        country_code,
        default_billing = false,
        default_shipping = false,
        firstname = null,
        lastname = null,
        street,
        company = null,
        telephone = null,
        region,
    } = customerAddress;
    const transformedCustomerAddress: OroCustomerAddress = {
        type: 'customeruseraddresses',
        attributes: {
            city: city,
            firstName: firstname,
            lastName: lastname,
            organization: company,
            postalCode: postcode,
            street: street[0],
            street2: street[1] || null,
            phone: telephone,
            types: [
                {
                    default: default_billing!,
                    addressType: 'billing',
                },
                {
                    default: default_shipping!,
                    addressType: 'shipping',
                },
            ],
        },
        relationships: {
            country: {
                data: {
                    type: 'countries',
                    id: country_code!,
                },
            },
            customerUser: {
                data: {
                    type: 'customerusers',
                    id: 'mine',
                },
            },
            region: {
                data: {
                    type: 'regions',
                    id: region.region_id ? region.region_id.toString() : `${region.region}`,
                },
            },
        },
    };

    return transformedCustomerAddress;
};

export const transformOroAddress = (response: OroCustomerAddress): CustomerAddress => {
    const attributes = response.attributes;
    return {
        id: parseInt(response.relationships.customerUser.data.id),
        street: [attributes.street, attributes.street || null],
        city: attributes.city,
        company: attributes.organization,
        country_code: response.relationships.country.data.id as CountryCodeEnum,
        firstname: attributes.firstName,
        lastname: attributes.lastName,
        telephone: attributes.phone,
        postcode: attributes.postalCode,
        region: {
            region: null,
            region_id: null,
            region_code: response.relationships.region.data.id,
        },
        default_billing: attributes.types[0].default,
        default_shipping: attributes.types[1].default,
    };
};
