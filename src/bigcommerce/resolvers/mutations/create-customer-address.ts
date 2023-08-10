import { CountryCodeEnum, CustomerAddressInput, MutationResolvers } from '@mesh';
import { logAndThrowError } from '../../../utils/error-handling';
import { getDecodedMeshToken } from '../../../utils/tokens';
import { createCustomerAddress } from '../../apis/rest/customer';
import {
    transformCustomerAddress,
    transformBcAddress,
} from '../../factories/transform-customer-address-data';

export interface ValidatedInput extends CustomerAddressInput {
    firstname: string;
    lastname: string;
    city: string;
    country_code: CountryCodeEnum;
    street: string[];
    region: {
        region: string;
    };
    postcode: string;
}

export const isCustomerAddressValid = (input: CustomerAddressInput): boolean => {
    return !!(
        input.firstname &&
        input.lastname &&
        input.city &&
        input.country_code &&
        input.street &&
        input.region?.region &&
        input.postcode
    );
};

export const createCustomerAddressResolver: MutationResolvers['createCustomerAddress'] = {
    resolve: async (_root, { input }, context, _info) => {
        if (!context.headers['mesh-token']) {
            return logAndThrowError(new Error('mesh-token header is required for this mutation.'));
        }

        const { bc_customer_id: customerId } = getDecodedMeshToken(context.headers['mesh-token']);

        if (!isCustomerAddressValid(input)) {
            return logAndThrowError(
                new Error(
                    'ValidationError: Failed to validate CustomerAddressInput, Required field is missing'
                )
            );
        }

        const customerAddressInput = input as ValidatedInput;
        const address = transformCustomerAddress(customerAddressInput, customerId);
        const response = await createCustomerAddress(address);

        return transformBcAddress(response);
    },
};
