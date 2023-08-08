import { CustomerAddress } from '../../../meshrc/.mesh';
import { BcAddress } from '../../types';

export const getTransformedCustomerAddresses = (bcAddresses: BcAddress[]): CustomerAddress[] => {
    return bcAddresses.map((address) => {
        return {
            id: address.id,
            firstname: address.first_name,
            lastname: address.last_name,
            company: address.company,
            city: address.city,

        };
    });
};
