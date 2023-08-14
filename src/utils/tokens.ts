import { logAndThrowError } from './error-handling';
import { decode, verify } from 'jsonwebtoken';
import { DecodedCustomerImpersonationToken, MeshToken } from '../bigcommerce/types';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;

/* istanbul ignore file */
export const getDecodedCustomerImpersonationToken = (
    customerImpersonationToken: string
): DecodedCustomerImpersonationToken => {
    try {
        return decode(customerImpersonationToken) as DecodedCustomerImpersonationToken;
    } catch (error) {
        return logAndThrowError(
            new Error(`customerImpersonationToken could not be decoded ${error}`)
        );
    }
};

export const getDecodedMeshToken = (meshToken: string): MeshToken => {
    try {
        if (meshToken.toLowerCase().startsWith('bearer')) {
            const splitMeshToken = meshToken.split(' ')[1];
            return verify(splitMeshToken, JWT_PRIVATE_KEY) as MeshToken;
        }
        return verify(meshToken, JWT_PRIVATE_KEY) as MeshToken;
    } catch (error) {
        throw new Error(`mesh-token could not be decoded ${error}`);
    }
};

/**
 * Attempts to extract "bc_customer_id" for the mesh token or returns null
 * @param meshToken
 */
export const getBcCustomerIdFromMeshToken = (meshToken: string): number | null => {
    try {
        const decodedMeshToken = verify(meshToken, JWT_PRIVATE_KEY) as MeshToken;

        if (!decodedMeshToken?.bc_customer_id) return null;

        return decodedMeshToken.bc_customer_id;
    } catch {
        console.error('"bc_customer_id" could not found in the mesh-token');
        return null;
    }
};
