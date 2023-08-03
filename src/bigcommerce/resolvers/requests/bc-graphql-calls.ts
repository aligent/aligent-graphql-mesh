import axios, { AxiosResponse } from 'axios';
import { logAndThrowError } from '../error-handling';
import { BcCategory, BcCategoryTree, BcProduct, GraphQlQuery } from '../../types';
import { getProductBySkuQuery } from './graphql/get-product-by-sku';
import { getRouteQuery } from './graphql/route';
import { getCategoryTreeQuery } from './graphql/category-tree';
import { getCategoryQuery } from './graphql/category';
import { channelMetafieldsByNamespaceQuery } from './graphql/channel-metafields-by-namespace-query';
import { BC_Channel, BC_Customer, BC_MetafieldConnection } from '../../../meshrc/.mesh';
import { checkout } from './graphql/checkout';

const BC_GRAPHQL_API = process.env.BC_GRAPHQL_API as string;
const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

/* istanbul ignore file */
// TODO: generic return type
const bcGraphQlRequest = async (
    data: GraphQlQuery,
    headers: { Authorization: string }
): Promise<AxiosResponse['data']> => {
    return axios
        .post(BC_GRAPHQL_API, data, { headers })
        .then((resp) => resp.data)
        .catch(logAndThrowError);
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

    const entityId = response.data?.login.customer.entityId;
    const result = response.data?.login.result;

    if (result !== 'success') {
        logAndThrowError(
            new Error(`Failed to authenticate with BigCommerce: ${JSON.stringify(response)}`)
        );
    }

    return entityId;
};

export const getBcProductGraphql = async (
    sku: string,
    customerImpersonationToken: string
): Promise<BcProduct> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };
    const productBySkuQuery = getProductBySkuQuery(sku);

    const response = await bcGraphQlRequest(productBySkuQuery, headers);

    if (response.data.errors) {
        logAndThrowError(
            new Error(
                `Failed to fetch products from BigCommerce: ${JSON.stringify(response.data.errors)}`
            )
        );
    }

    return response.data.site.product;
};

export const getBcCustomer = async (
    customerImpersonationToken: string,
    bcCustomerId: number
): Promise<BC_Customer> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
        'x-bc-customer-id': bcCustomerId,
    };
    const getCustomer = {
        query: `query customer {
            customer{
            entityId
            email
          }
        }`,
    };

    const response = await bcGraphQlRequest(getCustomer, headers);

    if (response.data.errors) {
        logAndThrowError(
            new Error(
                `Failed to fetch customers from BigCommerce: ${JSON.stringify(
                    response.data.errors
                )}`
            )
        );
    }

    return response.data.customer;
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

export const getChannelMetafields = async (namespace: string): Promise<BC_MetafieldConnection> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
    };
    const query = channelMetafieldsByNamespaceQuery(namespace);

    const response = await bcGraphQlRequest(query, headers);

    if (response.data.errors) {
        logAndThrowError(
            new Error(
                `Failed to fetch channel metafields from BigCommerce: ${JSON.stringify(
                    response.data.errors
                )}`
            )
        );
    }
    //response.data looks like: {"channel":{"entityId":1,"metafields":{"edges":[{"node":{"id":"TWV0YWZpZWxkczoxODk=","key":"category_url_suffix","value":".html"}},{"node":{"id":"TWV0YWZpZWxkczoxOTA=","key":"grid_per_page","value":"24"}}]}}}
    const channelData: BC_Channel = response.data.channel;

    return channelData.metafields;
};

export const getCart = async (entityId: string) => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
    };

    const checkoutQuery = {
        query: checkout,
        variables: {
            entityId,
        },
    };

    const response = await bcGraphQlRequest(checkoutQuery, headers);

    return response.data.site.checkout;
};
