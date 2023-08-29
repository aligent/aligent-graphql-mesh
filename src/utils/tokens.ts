import { logAndThrowError } from './error-handling/error-handling';
import { decode, sign, verify } from 'jsonwebtoken';
import { DecodedCustomerImpersonationToken, MeshToken } from '../bigcommerce/types';
import { v4 as uuidv4 } from 'uuid';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;
const BC_CLIENT_ID = process.env.BC_CLIENT_ID as string;
const BC_CLIENT_SECRET = process.env.BC_CLIENT_SECRET as string;
const STORE_HASH = process.env.STORE_HASH as string;

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
 * Attempts to extract "bc_customer_id" for the mesh token or throws an error
 * @param meshToken
 */
export const getBcCustomerIdFromMeshToken = (meshToken: string): number => {
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

/**
 * Creates a JWT that enables a BC user to stay logged in when redirecting
 * @param {number} customerId - The BC customers Id is needed to keep this user signed in on checkout
 * @param {string} redirectTo - The url to redirect to, e.g. /cart.php?action=loadInCheckout&id=cart-id&token=jwt
 */
export const createCustomerLoginToken = (customerId: number, redirectTo: string) => {
    const dateCreated = Math.round(new Date().getTime() / 1000) - 5;
    const payload = {
        iss: BC_CLIENT_ID,
        iat: dateCreated,
        jti: uuidv4(),
        operation: 'customer_login',
        store_hash: STORE_HASH,
        customer_id: customerId,
        redirect_to: redirectTo,
    };

    return sign(payload, BC_CLIENT_SECRET);
};

export const generateMeshToken = (entityId: number): string => {
    const payload = {
        bc_customer_id: entityId,
    };

    return sign(payload, JWT_PRIVATE_KEY, { expiresIn: '1d' });
};
