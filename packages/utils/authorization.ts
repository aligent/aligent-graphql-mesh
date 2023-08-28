import { getBcCustomerIdFromMeshToken } from './tokens';

/**
 * Returns the BcCustomerId stored in the authorization header if it exists.
 * An authorization header should be passed to api requests if the user is logged
 * in.
 * @param context
 */
export const getBcCustomerId = (context: GraphQLModules.Context): number | null => {
    const hasAuthHeader = !!context.headers?.authorization;

    return hasAuthHeader ? getBcCustomerIdFromMeshToken(context.headers.authorization) : null;
};
