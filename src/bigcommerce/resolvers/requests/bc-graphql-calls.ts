import axios from 'axios';
import {
    logAndThrowErrorsFromGraphQlResponse,
    logAndThrowErrorsFromRESTApiResponse,
    logAndThrowUnknownError,
    throwAndLogAxiosError,
} from '../error-handling';
import { BcCategory, BcCategoryTree, GraphQlQuery } from '../../types';
import { getProductBySkuQuery } from './graphql/get-product-by-sku';
import { getRouteQuery } from './graphql/route';
import { getCategoryTreeQuery } from './graphql/category-tree';
import { getCategoryQuery } from './graphql/category';
import { BC_ProductConnection, BC_SiteproductsArgs } from '../../../meshrc/.mesh';

const BC_GRAPHQL_API = process.env.BC_GRAPHQL_API as string;
const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

const bcGraphQlRequest = async (data: GraphQlQuery, headers: { Authorization: string }) => {
    try {
        const response = await axios.post(BC_GRAPHQL_API, data, { headers });
        return response.data;
    } catch (error) {
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

export const getBcProductsGraphql = async (
    filters: BC_SiteproductsArgs
): Promise<BC_ProductConnection> => {
    const { ids } = filters;

    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
    };

    const productsQuery = {
        query: getProductBySkuQuery,
        variables: {
            ids,
        },
    };

    const response = await bcGraphQlRequest(productsQuery, headers);

    if (response.data.errors) {
        logAndThrowErrorsFromGraphQlResponse(response.data.errors, getBcProductsGraphql.name);
    }

    return response.data.site.products;
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

export const getCategories = async (
    rootEntityId: number
): Promise<{ category: BcCategory; categoryTree: BcCategoryTree[] }> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
    };

    const categoryTreeQuery = {
        query: getCategoryTreeQuery,
        variables: {
            /* "2" is the root Category used in AC. If we receive 2 then treat
                this as if were getting megamenu data.
            */
            rootEntityId: rootEntityId === 2 ? null : rootEntityId,
        },
    };

    const categoryQuery = {
        query: getCategoryQuery,
        variables: {
            entityId: rootEntityId,
        },
    };

    const [categoryTreeResponse, categoryResponse] = await Promise.all([
        bcGraphQlRequest(categoryTreeQuery, headers),
        bcGraphQlRequest(categoryQuery, headers),
    ]);

    return {
        categoryTree: categoryTreeResponse.data.site.categoryTree,
        category: categoryResponse.data.site.category,
    };
};
