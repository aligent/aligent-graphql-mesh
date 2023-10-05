import { getChannelMetafields } from '../graphql';
import { findMetafieldValueByKey } from '../../../../../utils/metafields';
import { AxiosGraphqlError } from '@aligent/utils';

const MAINTENANCE_MODE_NAMESPACE: string = 'maintenance_mode';
const IP_ADDRESSES_KEY: string = 'allowed_ip_addresses';

export const checkMaintenanceMode = async (
    customerImpersonationToken: string,
    context: GraphQLModules.ModuleContext
) => {
    const maintenanceModeConfig = await getChannelMetafields(
        MAINTENANCE_MODE_NAMESPACE,
        customerImpersonationToken
    );

    /* Metafields can't have blank values, so if the metafield value comes back
     * as an empty string from "findMetafieldValueByKey", it means if this metafield
     * isn't available to the "channel.metafields" query and indicates
     * to us the maintenance flag has not been raised.
     *
     * In the rest api at https://developer.bigcommerce.com/docs/rest-management/channels/channel-metafields#get-channel-metafields
     * If a permission for a metafield is "write" then it's not available in the "channel.metafields" query.
     * if a permission for a metafield is "write_and_sf_access" then it is available in the "channel.metafields" query.
     * If using the metafield manager app in the BC admin, this is controlled by the "Available on storefront" checkbox.
     * */
    const allowedIpAddresses = findMetafieldValueByKey(
        maintenanceModeConfig?.edges || [null],
        IP_ADDRESSES_KEY
    );

    /* The maintenance flag hasn't been raised so end the function call */
    if (!allowedIpAddresses) return;

    const splitAllowedIpAddresses = allowedIpAddresses.split(',');

    /* These are the ip addresses coming from the request headers */
    const forwardedIps = context.headers['x-forwarded-for'];

    if (!forwardedIps) return;

    const splitForwardedIps = forwardedIps.split(',');

    /* Works out if an ip address in the request headers matches an ip address
     * in the list of ip address from the "allowed_ip_addresses" metafield */
    const isAllowedAccess = splitAllowedIpAddresses.includes(splitForwardedIps[0]);

    /* If an ip address in the 'allowed_ip_addresses' metafield doesn't match the
     * ip address in the incoming request, throw an error.
     *  */
    if (!isAllowedAccess) {
        throw new AxiosGraphqlError('Maintenance mode is active');
    }
};
