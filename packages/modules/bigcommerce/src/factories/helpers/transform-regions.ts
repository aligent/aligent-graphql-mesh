import {
    CheckoutBillingAddress,
    CheckoutConsignmentAddress,
} from '@aligent/bigcommerce-operations';
import { Country as AcCountry } from '@aligent/bigcommerce-resolvers';

export const getTransformedRegionId = (
    address: CheckoutConsignmentAddress | CheckoutBillingAddress,
    countries?: AcCountry[]
) => {
    let region_id = null;

    if (!address || !countries) return region_id;

    for (let i = 0; i < countries.length; i++) {
        if (countries[i].two_letter_abbreviation === address.countryCode) {
            countries[i].available_regions?.forEach((region) => {
                if (region?.code === address.stateOrProvinceCode) {
                    region_id = region?.id;
                }
            });
            break;
        }
    }

    return region_id;
};
