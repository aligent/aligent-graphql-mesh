import { Entity, Attributes } from '.';

export interface ContactRequest extends Entity {
    type: 'contact_request';
    id: string;
    attributes: ContactRequestAttributes;
}

export interface ContactRequestAttributes extends Attributes {
    comment: string;
    email: string;
    name: string;
    telephone: string | null;
}
