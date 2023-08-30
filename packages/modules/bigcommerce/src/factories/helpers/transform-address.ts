import {
    CheckoutBillingAddress,
    CheckoutConsignmentAddress,
} from '@aligent/bigcommerce-operations';
import { BillingCartAddress, Maybe, CartAddressInterface } from '@aligent/bigcommerce-resolvers';

export const getTransformedAddress = (
    bcAddress: CheckoutConsignmentAddress | CheckoutBillingAddress
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
            region_id: 573, // @todo BC checkout doesn't return the region_id
        },
        street: [address1 || null, address2 || null].filter(Boolean),
        telephone: phone,
        uid: '',
    };
};

export const getTransformedBillingAddress = (
    billingAddress?: Maybe<CheckoutBillingAddress>
): Maybe<BillingCartAddress> => {
    if (!billingAddress) return null;
    return getTransformedAddress(billingAddress);
};
