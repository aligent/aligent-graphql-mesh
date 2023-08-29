import { logAndThrowError } from '../../../utils/error-handling';
import { bcGraphQlRequest } from './client';
import { loginMutation } from './requests/login';

export const bcLogin = async (
    email: string,
    password: string,
    customerImpersonationToken: string
): Promise<number> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const graphqlQuery = {
        query: loginMutation,
        variables: {
            email,
            password,
        },
    };

    const response = await bcGraphQlRequest(graphqlQuery, headers);

    const entityId = response.data?.login.customer.entityId;
    const result = response.data?.login.result;

    if (result !== 'success') {
        return logAndThrowError(`Failed to authenticate with BigCommerce`);
    }

    return entityId;
};
