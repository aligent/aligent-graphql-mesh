import { Entity, Attributes, Relationships, Resource } from '.';

export interface Order extends Entity {
    type: 'orders';
    attributes: OrderAttributes;
    relationships: OrderRelationships;
}

interface OrderAttributes extends Attributes {
    currency: string;
    identifier: string;
    poNumber: null;
    customerNotes: string;
    shipUntil: null;
    subtotalWithDiscounts: string;
    subtotalValue: string;
    totalValue: string;
    shippingCostAmount: string;
    createdAt: string;
    updatedAt: string;
    disablePromotions: boolean;
    shippingMethod: ShippingMethod;
    paymentStatus: PaymentStatus;
    paymentMethod: PaymentMethod[];
    totalIncludingTax: string;
    totalExcludingTax: string;
    totalTaxAmount: string;
    paymentTerm: null;
    discounts: Discounts[];
    shippingTrackings: ShippingTrackings[];
}

interface Discounts {}

interface ShippingTrackings {}

interface ShippingMethod {
    code: string;
    label: string;
}

interface PaymentStatus {
    code: string;
    label: string;
}

interface PaymentMethod {
    code: string;
    label: string;
}

interface OrderRelationships extends Relationships {
    billingAddress: {
        data: OrderAddress;
    };
    shippingAddress: {
        data: OrderAddress;
    };
}

export interface OrderAddress extends Entity {
    attributes: OrderAddressAttributes;
    relationships: OrderAddressRelationships
}

interface OrderAddressRelationships extends Relationships {
    country: {
        data: Resource
    }
    region: {
        data: Resource
    }
}

interface OrderAddressAttributes extends Attributes {
    phone: string;
    label: string;
    street: string;
    street2: string | null;
    city: string;
    postalCode: string;
    organization: string;
    customRegion: string | null;
    namePrefix: string | null;
    firstName: string;
    middleName: string | null;
    lastName: string;
    nameSuffix: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface Countries extends Entity {
    attributes: CountriesAttributes;
}

interface CountriesAttributes extends Attributes {
    iso3Code: string;
    name: string;
}

export interface CountryRegion extends Entity {
    attributes: RegionAttributes;
}

interface RegionAttributes extends Attributes {
    code: string;
    name: string;
}
