import { Transformer, TransformerContext } from '@aligent/utils';
import { CustomerAddress, CountryCodeEnum } from '@aligent/orocommerce-resolvers';
import { OroCustomerAddress, CustomerAddressValidated } from '../../types';

export class createCustomerAddressTransformer
    implements Transformer<CustomerAddressValidated, OroCustomerAddress>
{
    public transform(
        context: TransformerContext<CustomerAddressValidated, OroCustomerAddress>
    ): OroCustomerAddress {
        const {
            postcode,
            city,
            country_code,
            default_billing,
            default_shipping,
            firstname,
            lastname,
            street,
            company,
            telephone,
            region,
        } = context.data;

        return {
            type: 'customeruseraddresses',
            attributes: {
                city: city,
                firstName: firstname,
                lastName: lastname,
                organization: company || null,
                postalCode: postcode,
                street: street[0],
                street2: street[1] || null,
                phone: telephone || null,
                types: [
                    {
                        default: default_billing || false,
                        addressType: 'billing',
                    },
                    {
                        default: default_shipping || false,
                        addressType: 'shipping',
                    },
                ],
            },
            relationships: {
                country: {
                    data: {
                        type: 'countries',
                        id: country_code,
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
    }
}

export class createCustomerOroAddressTransformer
    implements Transformer<OroCustomerAddress, CustomerAddress>
{
    public transform(
        context: TransformerContext<OroCustomerAddress, CustomerAddress>
    ): CustomerAddress {
        const customerAddress = context.data;
        const attributes = context.data.attributes;

        return {
            id: customerAddress.id ? parseInt(customerAddress.id) : null,
            street: [attributes.street, attributes.street2 || null],
            city: attributes.city,
            company: attributes.organization,
            country_code: customerAddress.relationships.country.data.id as CountryCodeEnum,
            firstname: attributes.firstName,
            lastname: attributes.lastName,
            telephone: attributes.phone,
            postcode: attributes.postalCode,
            region: {
                region: null,
                region_id: null,
                region_code: customerAddress.relationships.region.data.id,
            },
            default_billing: attributes.types[0].default,
            default_shipping: attributes.types[1].default,
        };
    }
}
