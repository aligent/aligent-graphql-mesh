/* istanbul ignore file */
import axios from 'axios';
import { getChannelMetafields } from '../graphql/channel';
import { logAndThrowError, findMetafieldValueByKey } from '@aligent/utils';

const GOOGLE_GEOCODING_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const GOOGLE_GEOCODING_API_KEY_MAPPING = 'googleMapsBackendAPIKey';
const NAMESPACE = 'store_config';

export const coordinatesLookup = async (
    search_term: string,
    countryCode: string,
    customerImpersonationToken: string
) => {
    const bcChannelMetafieldsConfig = await getChannelMetafields(
        NAMESPACE,
        customerImpersonationToken
    );

    if (bcChannelMetafieldsConfig.edges) {
        const apiKeyValue = findMetafieldValueByKey(
            bcChannelMetafieldsConfig.edges,
            GOOGLE_GEOCODING_API_KEY_MAPPING
        );

        if (!apiKeyValue) return logAndThrowError('Coordinates lookup request failed');

        const coordinatesLookupURL = `${GOOGLE_GEOCODING_API_URL}${search_term}${`&components=country:${countryCode}`}&key=${apiKeyValue}`;
        const headers = {
            'Content-Type': 'application/json',
        };

        const response = await axios.get(coordinatesLookupURL, { headers });

        return response.data?.results?.[0]?.geometry?.location;
    }

    return logAndThrowError('Coordinates lookup request failed');
};
