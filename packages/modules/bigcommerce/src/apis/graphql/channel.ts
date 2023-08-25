import { bcGraphQlRequest } from './client';
import {
    BC_Channel,
    BC_MetafieldConnection,
    BC_SocialMediaLink,
} from '@mesh/external/BigCommerceGraphqlApi';
import { channelMetafieldsByNamespaceQuery } from './requests/channel-metafields-by-namespace-query';
import { channelSocialLinks } from './requests/channel-social-links';
import { logAndThrowError } from '@aligent/utils';

/* istanbul ignore file */
export const getChannelMetafields = async (
    namespace: string,
    customerImpersonationToken: string
): Promise<BC_MetafieldConnection> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };
    const query = channelMetafieldsByNamespaceQuery(namespace);

    const response = await bcGraphQlRequest(query, headers);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }
    //response.data looks like: {"channel":{"entityId":1,"metafields":{"edges":[{"node":{"id":"TWV0YWZpZWxkczoxODk=","key":"category_url_suffix","value":".html"}},{"node":{"id":"TWV0YWZpZWxkczoxOTA=","key":"grid_per_page","value":"24"}}]}}}
    const channelData: BC_Channel = response.data.channel;

    return channelData.metafields;
};

export const getSocialLinks = async (
    customerImpersonationToken: string
): Promise<BC_SocialMediaLink[]> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };
    const socialLinkQuery = {
        query: channelSocialLinks,
    };

    const response = await bcGraphQlRequest(socialLinkQuery, headers);
    return response.data.site.settings.socialMediaLinks;
};
