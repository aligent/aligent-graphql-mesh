import axios from 'axios';
import {
    logAndThrowErrorsFromRESTApiResponse,
    logAndThrowUnknownError,
    throwAndLogAxiosError,
} from './error-handling';
import { GraphQlQuery } from '../../types';

const BC_GRAPHQL_API = process.env.BC_GRAPHQL_API as string;

const bcGraphQlRequest = async (data: GraphQlQuery, headers: { Authorization: string }) => {
    try {
        const response = await axios.post(BC_GRAPHQL_API, data, { headers });
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throwAndLogAxiosError(error, bcGraphQlRequest.name);
        } else {
            logAndThrowUnknownError(error, bcGraphQlRequest.name);
        }
    }
};

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

    const entityId = response.data.data?.login.customer.entityId;
    const result = response.data.data?.login.result;

    if (result !== 'success') {
        logAndThrowErrorsFromRESTApiResponse(response, bcLogin.name);
    }

    return entityId;
};
