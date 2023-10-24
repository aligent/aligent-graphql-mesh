import { CustomerAddressInput, CountryCodeEnum, CustomerAddressRegionInput } from '@aligent/orocommerce-resolvers';

export interface CustomerAddressValidated extends CustomerAddressInput {
    firstname: string;
    lastname: string;
    city: string;
    country_code: CountryCodeEnum;
    street: string[];
    region: CustomerAddressRegionInput
    postcode: string;
}

export interface OroCustomerAddress {
    type: 'customeruseraddresses';
    attributes: CustomerAddressesAttributes;
    relationships: CustomerAddressesRelationships;
    id?: string;
}

interface CustomerAddressesAttributes {
    city: string;
    firstName: string | null;
    lastName: string | null;
    organization: string | null;
    postalCode: string;
    street: string;
    street2: string | null;
    phone: string | null;
    types: { default: boolean; addressType: string }[];
}

interface CustomerAddressesRelationships {
    country: { data: { type: string; id: string } };
    customerUser: { data: { type: string; id: string } };
    region: { data: { type: string; id: string } };
}
