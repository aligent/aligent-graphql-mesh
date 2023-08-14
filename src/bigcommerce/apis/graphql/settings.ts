import { bcGraphQlRequest } from './client';
import { BC_TaxDisplaySettings } from '@mesh/external/BigCommerceGraphqlApi';
import { taxSettings } from './requests/tax-settings';
import { logAndThrowError } from '../../../utils/error-handling';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;
const headers = {
    Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
};

/**
 * Gets the PDP and PLP including or excluding price display configuration.
 *
 * These settings are configurable in the Admin
 * Admin > Settings > Tax > Tax Rules > Tax rates and zones > {zone} Edit settings >
 * [Display prices inclusive of tax, Display prices exclusive of tax]
 */
export const getTaxSettings = async (): Promise<BC_TaxDisplaySettings | null> => {
    /* @todo If possible get the taxSettings from the mesh cache instead of performing a query */

    try {
        const taxSettingsQuery = {
            query: taxSettings,
        };
        const response = await bcGraphQlRequest(taxSettingsQuery, headers);

        if (response.errors) {
            new Error(
                `Failed to fetch tax settings from BigCommerce: ${JSON.stringify(response.errors)}`
            );
        }

        return response.data.site.settings.tax;
    } catch (e) {
        logAndThrowError(e as Error);
        return null;
    }
};
