import { Entity, Resource, Relationships, Attributes } from '.';

export interface Country extends Entity {
    type: 'countries';
    id: string;
    attributes: CountryAttributes;
    relationships?: CountryRelationships;
}

export interface CountryAttributes extends Attributes {
    iso3Code: string;
    name: string;
}

export interface CountryRelationships extends Relationships {
    regions: {
        data?: Array<Resource>;
    };
}

export interface Region extends Entity {
    type: 'regions';
    id: string;
    attributes: RegionAttributes;
}

export interface RegionAttributes extends Attributes {
    code: string;
    name: string;
}
