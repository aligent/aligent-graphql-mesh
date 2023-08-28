import { CustomerAddressInput } from '@aligent/bigcommerce-resolvers';
import { CustomerAddressUpdateValidated } from '@aligent/bigcommerce-graphql-module';

export const isCustomerAddressValid = (input: CustomerAddressInput): boolean => {
    return !!(
        input &&
        input.firstname &&
        input.lastname &&
        input.city &&
        input.country_code &&
        input.street &&
        input.region?.region &&
        input.postcode
    );
};

export const isCustomerAddressUpdatable = (input: CustomerAddressUpdateValidated): boolean => {
    return !!(input.id && isCustomerAddressValid(input));
};
