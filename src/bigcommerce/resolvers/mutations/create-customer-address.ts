export interface ValidatedInput extends CustomerAddressInput {
    firstname: string,
    lastname: string,
    city: string,
    country_code: CountryCodeEnum,
    street: string[],
    region: {
        region: string
    },
    postcode: string
}

export const isCustomerAddressValid = (input: CustomerAddressInput): boolean => {
   return !!(input.firstname &&
       input.lastname &&
       input.city &&
       input.country_code &&
       input.street &&
       input.region?.region &&
       input.postcode);
}

export const createCustomerAddressResolver: MutationResolvers['createCustomerAddress'] = {
    resolve: (_root, _args, _context, _info) => {
        // TODO
        return null;
    },
};
