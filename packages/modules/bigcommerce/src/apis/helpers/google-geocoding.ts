import axios from 'axios';

const GOOGLE_GEOCODING_API_KEY = process.env.GOOGLE_GEOCODING_API_KEY as string;
const GOOGLE_GEOCODING_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

export const coordinatesLookup = async (search_term: string, countryCode: string) => {
    const coordinatesLookupURL = `${GOOGLE_GEOCODING_API_URL}${search_term}${`&components=country:${countryCode}`}&key=${GOOGLE_GEOCODING_API_KEY}`;
    const headers = {
        'Content-Type': 'application/json',
    };

    const response = await axios.get(coordinatesLookupURL, { headers });

    return response.data?.results?.[0]?.geometry?.location;
};
