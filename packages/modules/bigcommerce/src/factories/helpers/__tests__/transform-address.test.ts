import { getTransformedBillingAddress, getTransformedAddress } from '../transform-address';
import { CheckoutAddressCheckboxesCustomField } from '@aligent/bigcommerce-operations';
import { mockBcCheckout } from '../../../resolvers/mocks/checkout.bc';
import { transformedCountries } from '../../__tests__/__data__/countries-transformed-data';

const expectShippingAddress = {
    firstname: 'John',
    lastname: 'Doe',
    company: 'Aligent',
    city: 'Adelaide',
    country: { code: 'AU', label: 'AU' },
    postcode: '5000',
    region: { code: 'SA', label: 'South Australia', region_id: 212 },
    street: ['14 Shipping Ct'],
    telephone: '0000000000',
    uid: '',
};

const expectedBillingAddress = {
    firstname: 'John',
    lastname: 'Doe',
    company: 'Aligent',
    city: 'Gold Coast',
    country: {
        code: 'AU',
        label: 'AU',
    },
    postcode: '4220',
    region: {
        code: 'QLD',
        label: 'Queensland',
        region_id: 211,
    },
    street: ['14 Billing Ct'],
    telephone: '00000000000',
    uid: '',
};

describe('transform-address', () => {
    it(`transforms a address`, () => {
        expect(
            getTransformedAddress(
                mockBcCheckout.shippingConsignments[0].address,
                transformedCountries
            )
        ).toEqual(expect.objectContaining(expectShippingAddress));
    });

    it(`transforms a billing address`, () => {
        expect(
            getTransformedBillingAddress(mockBcCheckout.billingAddress, transformedCountries)
        ).toEqual(expect.objectContaining(expectedBillingAddress));
    });

    it(`sets default values when address information doesn't exist`, () => {
        expect(
            getTransformedAddress({
                stateOrProvinceCode: '',
                stateOrProvince: '',
                postalCode: '',
                phone: '',
                lastName: '',
                firstName: '',
                email: '',
                customFields: [
                    {
                        valueEntityIds: [0],
                        entityId: 29,
                    } as CheckoutAddressCheckboxesCustomField,
                ],
                countryCode: '',
                company: '',
                city: '',
                address2: null,
                address1: null,
            })
        ).toEqual(
            expect.objectContaining({
                firstname: '',
                lastname: '',
                company: '',
                city: '',
                country: {
                    code: '',
                    label: '',
                },
                postcode: '',
                region: {
                    code: '',
                    label: '',
                    region_id: null,
                },
                street: [],
                telephone: '',
            })
        );
    });
});
