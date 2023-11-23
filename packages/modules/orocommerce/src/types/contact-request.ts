import { Entity, Attributes } from '.';

export interface ContactRequest extends Entity {
    type: 'contactrequests';
    id: string;
    attributes: ContactRequestAttributes;
}

export interface ContactRequestAttributes extends Attributes {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phone: string | null;
    comment: string;
}
