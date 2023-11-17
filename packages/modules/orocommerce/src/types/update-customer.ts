import { Attributes, Entity } from '.';

export interface UpdateCustomer extends Entity {
    type: 'customerusers';
    id: string;
    attributes: UpdateCustomerAttribute;
}
export interface UpdateCustomerAttribute extends Attributes {
    email?: string;
    firstName?: string;
    lastName?: string;
}
