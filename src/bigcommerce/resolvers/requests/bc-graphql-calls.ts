import axios from 'axios';
import {
    logAndThrowErrorsFromGraphQlResponse,
    logAndThrowErrorsFromRESTApiResponse,
    logAndThrowUnknownError,
    throwAndLogAxiosError,
} from '../error-handling';
import { BcProduct, GraphQlQuery } from '../../types';
import { getProductBySkuQuery } from './graphql/get-product-by-sku';
import { getRouteQuery } from './graphql/route';

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

export const getBcProductGraphql = async (sku: string): Promise<BcProduct> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
    };
    const productBySkuQuery = getProductBySkuQuery(sku);

    const response = await bcGraphQlRequest(productBySkuQuery, headers);

    if (response.data.errors) {
        logAndThrowErrorsFromGraphQlResponse(response.data.errors, getBcProductGraphql.name);
    }

    return response.data.site.product;
};

export const getRoute = async (url: string) => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
    };

    const routeQuery = {
        query: getRouteQuery,
        variables: {
            path: url,
        },
    };

    const response = await bcGraphQlRequest(routeQuery, headers);
    return response.data.site.route.node;
};
