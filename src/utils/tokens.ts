import { logAndThrowError } from '../bigcommerce/resolvers/error-handling';
import { JwtPayload, decode, verify } from 'jsonwebtoken';
import { DecodedCustomerImpersonationToken, MeshToken } from '../bigcommerce/types';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;

export const getDecodedCustomerImpersonationToken = (
    customerImpersonationToken: string
): DecodedCustomerImpersonationToken => {
    try {
        return decode(
            customerImpersonationToken
        ) as JwtPayload as DecodedCustomerImpersonationToken;
    } catch (error) {
        return logAndThrowError(`customerImpersonationToken could not be decoded ${error}`);
    }
};

export const getDecodedMeshToken = (meshToken: string): MeshToken => {
    try {
        return verify(meshToken, JWT_PRIVATE_KEY) as JwtPayload as unknown as MeshToken;
    } catch (error) {
        return logAndThrowError(`mesh-token could not be decoded ${error}`);
    }
};
