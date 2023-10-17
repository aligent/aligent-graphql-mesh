import { GraphqlError } from '@aligent/utils';
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

    if (!entityId || result !== 'success') {
        throw new GraphqlError(
            'authentication',
            `The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.`
        );
    }

    return entityId;
};
