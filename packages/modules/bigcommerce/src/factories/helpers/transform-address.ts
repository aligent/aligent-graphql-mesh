import {
    CheckoutBillingAddress,
    CheckoutConsignmentAddress,
} from '@aligent/bigcommerce-operations';
import { BillingCartAddress, Maybe, CartAddressInterface } from '@aligent/bigcommerce-resolvers';
import { BcStorefrontFormFields } from '../../types';
import { getTransformedRegionId } from './transform-regions';

export const getTransformedAddress = (
    bcAddress: CheckoutConsignmentAddress | CheckoutBillingAddress,
    formFields?: BcStorefrontFormFields
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
            region_id: getTransformedRegionId(bcAddress, formFields),
        },
        street: [address1 || null, address2 || null].filter(Boolean),
        telephone: phone,
        uid: '',
    };
};

export const getTransformedBillingAddress = (
    billingAddress?: Maybe<CheckoutBillingAddress>,
    formFields?: BcStorefrontFormFields
): Maybe<BillingCartAddress> => {
    if (!billingAddress) return null;
    return getTransformedAddress(billingAddress, formFields);
};
