import {
    CheckoutBillingAddress,
    CheckoutConsignmentAddress,
} from '@aligent/bigcommerce-operations';
import {
    BillingCartAddress,
    Maybe,
    CartAddressInterface,
    Country as AcCountry,
} from '@aligent/bigcommerce-resolvers';
import { getTransformedRegionId } from './transform-regions';
import { isTruthy } from '@aligent/utils';

export const getTransformedAddress = (
    bcAddress: CheckoutConsignmentAddress | CheckoutBillingAddress,
    countries?: AcCountry[]
): CartAddressInterface => {
    const {
        stateOrProvinceCode,
        stateOrProvince,
        postalCode,
        phone,
        lastName,
        firstName,
        countryCode,
        company,
        city,
        address2,
        address1,
    } = bcAddress;

    return {
        firstname: firstName || '',
        lastname: lastName || '',
        company: company,
        city: city || '',
        country: {
            code: countryCode || '',
            label: countryCode || '', // Only "countryCode" comes from the bc checkout query
        },
        postcode: postalCode,
        region: {
            code: stateOrProvinceCode,
            label: stateOrProvince,
            region_id: getTransformedRegionId(bcAddress, countries),
        },
        street: [address1 || null, address2 || null].filter(isTruthy),
        telephone: phone,
        uid: '',
    };
};

export const getTransformedBillingAddress = (
    billingAddress?: Maybe<CheckoutBillingAddress>,
    countries?: AcCountry[]
): Maybe<BillingCartAddress> => {
    if (!billingAddress) return null;
    return getTransformedAddress(billingAddress, countries);
};
