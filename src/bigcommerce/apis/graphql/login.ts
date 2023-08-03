import { logAndThrowError } from '../../../utils/error-handling';
import { GraphQlQuery } from '../../types';
import { bcGraphQlRequest } from './client';

export const bcLogin = async (
    bcGraphqlToken: string,
    email: string,
    password: string
): Promise<number> => {
    const headers = {
        Authorization: `Bearer ${bcGraphqlToken}`,
    };
    const graphqlQuery: GraphQlQuery = {
        query: `mutation login {
                          login(email: "${email}", password: "${password}") {
                            customer {
                              entityId
                              }
                            result
                          }
                        }`,
    };

    const response = await bcGraphQlRequest(graphqlQuery, headers);

    const entityId = response.data?.login.customer.entityId;
    const result = response.data?.login.result;

    if (result !== 'success') {
        logAndThrowError(
            new Error(`Failed to authenticate with BigCommerce: ${JSON.stringify(response)}`)
        );
    }

    return entityId;
};
