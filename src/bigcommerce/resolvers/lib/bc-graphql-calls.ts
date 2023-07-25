import axios from 'axios';
import {
    logAndThrowErrorsFromGraphQlResponse,
    logAndThrowErrorsFromRESTApiResponse,
    logAndThrowUnknownError,
    throwAndLogAxiosError,
} from './error-handling';
import { BcProduct, GraphQlQuery } from '../../types';
import { getProductBySkuQuery } from './graphql-requests';

const BC_GRAPHQL_API = process.env.BC_GRAPHQL_API as string;
const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

const bcGraphQlRequest = async (data: GraphQlQuery, headers: { Authorization: string }) => {
    try {
        const response = await axios.post(BC_GRAPHQL_API, data, { headers });
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throwAndLogAxiosError(error, bcGraphQlRequest.name);
        } else {
            logAndThrowUnknownError(bcGraphQlRequest.name);
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

export const getBcProduct = async (sku: string): Promise<BcProduct> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
    };
    const productBySkuQuery = getProductBySkuQuery(sku);

    const response = await bcGraphQlRequest(productBySkuQuery, headers);
    console.log(JSON.stringify(response))

    if (response.data.errors) {
        logAndThrowErrorsFromGraphQlResponse(response.data.errors, getBcProduct.name);
    }

    return response.data.site.product;
};
