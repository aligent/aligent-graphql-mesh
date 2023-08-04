import { BC_MetafieldConnection, BC_Channel } from '../../../meshrc/.mesh';
import { logAndThrowError } from '../../../utils/error-handling';
import { bcGraphQlRequest } from './client';
import { channelMetafieldsByNamespaceQuery } from './requests/channel-metafields-by-namespace-query';
/* istanbul ignore file */
const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

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
