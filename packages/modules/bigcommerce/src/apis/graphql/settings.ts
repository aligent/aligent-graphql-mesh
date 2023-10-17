import { bcGraphQlRequest } from './client';
import { Sdk, TaxDisplaySettings } from '@aligent/bigcommerce-operations';
import { taxSettings } from './requests';
import { logAndThrowError } from '@aligent/utils';
import { BigCommerceModuleConfig } from '../../index';

/**
 * Gets the PDP and PLP including or excluding price display configuration.
 *
 * These settings are configurable in the Admin
 * Admin > Settings > Tax > Tax Rules > Tax rates and zones > {zone} Edit settings >
 * [Display prices inclusive of tax, Display prices exclusive of tax]
 */
export const getTaxSettings = async (
    customerImpersonationToken: string
): Promise<TaxDisplaySettings | null> => {
    /* @todo If possible get the taxSettings from the mesh cache instead of performing a query */
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };
    try {
        const taxSettingsQuery = {
            query: taxSettings,
        };
        const response = await bcGraphQlRequest(taxSettingsQuery, headers);

        if (response.errors) {
            return logAndThrowError(response.error);
        }

        return response.data.site.settings.tax;
    } catch (error) {
        return logAndThrowError(error);
    }
};

export const getCdnUrl = async (
    sdk: Sdk,
    config: BigCommerceModuleConfig,
    customerImpersonationToken: string
) => {
    try {
        const response = await sdk.cdnUrl(
            {},
            {
                Authorization: `Bearer ${customerImpersonationToken}`,
            }
        );

        const originUrl = response.site.settings?.url.cdnUrl;
        return `https://${originUrl}/s-${config.storeHash}`;
    } catch (error) {
        return logAndThrowError(error);
    }
};
