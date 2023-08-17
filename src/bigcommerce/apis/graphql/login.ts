import { logAndThrowError } from '../../../utils/error-handling/error-handling';
import { GraphQlQuery } from '../../types';
import { bcGraphQlRequest } from './client';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

export const bcLogin = async (email: string, password: string): Promise<number> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
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
        return logAndThrowError(`Failed to authenticate with BigCommerce`);
    }

    return entityId;
};
