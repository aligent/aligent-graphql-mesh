import { bcGraphQlRequest } from './client';
import {
    BC_Channel,
    BC_MetafieldConnection,
    BC_SocialMediaLink,
} from '@mesh/external/BigCommerceGraphqlApi';
import { channelMetafieldsByNamespaceQuery } from './requests/channel-metafields-by-namespace-query';
import { channelSocialLinks } from './requests/channel-social-links';
import { logAndThrowError } from '../../../utils/error-handling';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;
const headers = {
    Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
};

/* istanbul ignore file */
export const getChannelMetafields = async (namespace: string): Promise<BC_MetafieldConnection> => {
    const query = channelMetafieldsByNamespaceQuery(namespace);

    const response = await bcGraphQlRequest(query, headers);

    if (response.data.errors) {
        logAndThrowError(
            `Failed to fetch channel metafields from BigCommerce: ${JSON.stringify(
                response.data.errors
            )}`
        );
    }
    //response.data looks like: {"channel":{"entityId":1,"metafields":{"edges":[{"node":{"id":"TWV0YWZpZWxkczoxODk=","key":"category_url_suffix","value":".html"}},{"node":{"id":"TWV0YWZpZWxkczoxOTA=","key":"grid_per_page","value":"24"}}]}}}
    const channelData: BC_Channel = response.data.channel;

    return channelData.metafields;
};

export const getSocialLinks = async (): Promise<BC_SocialMediaLink[]> => {
    const socialLinkQuery = {
        query: channelSocialLinks,
    };

    const response = await bcGraphQlRequest(socialLinkQuery, headers);
    return response.data.site.settings.socialMediaLinks;
};
