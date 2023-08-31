import { mockBcCheckout } from '../../../resolvers/mocks/checkout.bc';
import {
    getTransformedAvailableShippingMethods,
    getTransformedSelectedShippingOption,
} from '../transform-available-shipping-methods';

const expectResult = [
    {
        amount: {
            currency: 'AUD',
            value: 0,
        },
        available: true,
        base_amount: null,
        carrier_code: 'shipping_pickupinstore',
        carrier_title: 'Pickup In Store',
        error_message: '',
        method_code: '1e9ff660b3d44d196a85b40dcb307e2e',
        method_title: 'Pickup In Store',
        price_excl_tax: {
            currency: 'AUD',
            value: 0,
        },
        price_incl_tax: {
            currency: 'AUD',
            value: 0,
        },
    },
];

describe('transform-available-shipping-methods', () => {
    it(`transforms available shipping methods`, () => {
        expect(
            getTransformedAvailableShippingMethods(
                mockBcCheckout.shippingConsignments[0].availableShippingOptions
            )
        ).toEqual(expect.objectContaining(expectResult));
    });

    it(`returns "null" if there's no availableShippingOptions`, () => {
        expect(getTransformedAvailableShippingMethods(null)).toEqual(expect.objectContaining(null));
    });

    it(`returns "null" if there's no selectedShippingOption`, () => {
        expect(getTransformedSelectedShippingOption(null)).toEqual(expect.objectContaining(null));
    });
});
