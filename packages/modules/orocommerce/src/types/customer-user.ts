import { Entity, Attributes } from '.';

export interface CustomerUser extends Entity {
    type: 'customerusers';
    id: string;
    attributes: CustomerUserAttributes;
}

interface CustomerUserAttributes extends Attributes {
   email: string,
   firstName: string,
   lastName: string,
   password: string
}



