import { getTransformedAddress } from '../transform-address';
import { BC_CheckoutAddressCheckboxesCustomField } from '../../../../meshrc/.mesh';
import { mockBcCheckout } from '../../../resolvers/mocks/checkout.bc';

const expectAddress = {
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
        region_id: 573,
    },
    street: ['14 Billing Ct'],
    telephone: '00000000000',
    uid: '',
};

describe('transform-address', () => {
    it(`transforms a address`, () => {
        expect(getTransformedAddress(mockBcCheckout.billingAddress)).toEqual(
            expect.objectContaining(expectAddress)
        );
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
                    } as BC_CheckoutAddressCheckboxesCustomField,
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
                    region_id: 573,
                },
                street: [],
                telephone: '',
            })
        );
    });
});
