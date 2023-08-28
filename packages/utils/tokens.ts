import { logAndThrowError } from './error-handling/error-handling';
import { decode, verify } from 'jsonwebtoken';
import { DecodedCustomerImpersonationToken, MeshToken } from '@aligent/bigcommerce-graphql-module';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;

/* istanbul ignore file */
export const getDecodedCustomerImpersonationToken = (
    customerImpersonationToken: string
): DecodedCustomerImpersonationToken => {
    try {
        return decode(customerImpersonationToken) as DecodedCustomerImpersonationToken;
    } catch (error) {
        return logAndThrowError(error, getDecodedCustomerImpersonationToken.name);
    }
};

/**
 * Attempts to extract "bc_customer_id" for the mesh token or returns null
 * @param meshToken
 */
export const getBcCustomerIdFromMeshToken = (meshToken: string) => {
    try {
        if (meshToken?.toLowerCase().startsWith('bearer')) {
            const splitMeshToken = meshToken.split(' ')[1];
            const decodedMeshToken = verify(splitMeshToken, JWT_PRIVATE_KEY) as MeshToken;
            return decodedMeshToken.bc_customer_id;
        } else {
            throw new Error(`Need to send Bearer token`);
        }
    } catch (error) {
        return logAndThrowError(error, getBcCustomerIdFromMeshToken.name);
    }
};
