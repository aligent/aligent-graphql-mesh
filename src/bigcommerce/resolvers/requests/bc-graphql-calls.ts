import axios, { AxiosResponse } from 'axios';
import { logAndThrowError } from '../error-handling';
import { BcCategory, BcCategoryTree, BcProduct, GraphQlQuery } from '../../types';
import { getProductBySkuQuery } from './graphql/get-product-by-sku';
import { getRouteQuery } from './graphql/route';
import { getCategoryTreeQuery } from './graphql/category-tree';
import { getCategoryQuery } from './graphql/category';
import { channelMetafieldsByNamespaceQuery} from './graphql/channel-metafields-by-namespace-query';
import { BC_Channel, BC_MetafieldConnection } from '../../../meshrc/.mesh';

const BC_GRAPHQL_API = process.env.BC_GRAPHQL_API as string;
const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

// TODO: generic return type
const bcGraphQlRequest = async (data: GraphQlQuery, headers: { Authorization: string }): Promise<AxiosResponse['data']> => {
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
    const result = response.data.data?.login.result;

    if (result !== 'success') {
        logAndThrowError(
            new Error(`Failed to authenticate with BigCommerce: ${JSON.stringify(response)}`)
        );
    }

    const entityId = response.data.data?.login.customer.entityId;
    return entityId;
};

export const getBcProductGraphql = async (sku: string): Promise<BcProduct> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
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
        logAndThrowError(new Error(
            `Failed to fetch channel metafields from BigCommerce: ${JSON.stringify(response.data.errors)}`
        ));
    }
    //response.data looks like: {"channel":{"entityId":1,"metafields":{"edges":[{"node":{"id":"TWV0YWZpZWxkczoxODk=","key":"category_url_suffix","value":".html"}},{"node":{"id":"TWV0YWZpZWxkczoxOTA=","key":"grid_per_page","value":"24"}}]}}}
    const channelData: BC_Channel = response.data.channel;

    return channelData.metafields;
};
