import { Attributes, Entity } from '.';

export interface OroStoreLocation extends Entity {
    type: 'orostorelocation';
    attributes: OroStoreLocationAttrs;
}

export interface OroStoreLocationAttrs extends Attributes {
    name: string;
    street: string;
    city: string;
    postcode: string;
    phone: string;
    latitude: number;
    longitude: number;
    pickup_location_code: string;
    /** Distance to the store in KM */
    distance: number;
    email: string | null;
    contact_name: string | null;
    country_id: string | null;
    description: string | null;
    fax: string | null;
    region: string | null;
    region_id: number | null;
}
