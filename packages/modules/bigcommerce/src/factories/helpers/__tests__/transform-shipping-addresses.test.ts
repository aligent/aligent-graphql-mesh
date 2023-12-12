import { mockBcCheckout } from '../../../resolvers/mocks/checkout.bc';
import { MockedStorefrontFormFields } from '../../../resolvers/mocks/storefront-form-fields';
import { transformedCountries } from '../../../resolvers/queries/__tests__/__data__/countries-transformed-data';
import { getTransformedShippingAddresses } from '../transform-shipping-addresses';

const expectResult = [
    {
        firstname: 'John',
        lastname: 'Doe',
        company: 'Aligent',
        city: 'Adelaide',
        country: {
            code: 'AU',
            label: 'AU',
        },
        postcode: '5000',
        region: {
            code: 'SA',
            label: 'South Australia',
            region_id: 212,
        },
        street: ['14 Shipping Ct'],
        telephone: '0000000000',
        uid: 'NjRjMzIzNjU4ZTI3OQ==',
        available_shipping_methods: [
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
        ],
        selected_shipping_method: {
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
        customer_notes: 'This is my order',
        deliveryInstructions: {
            authorityToLeave: true,
            instructions: 'Leave at the rear door',
        },
    },
];

const customerMessage = 'This is my order';

describe('transform-shipping-address', () => {
    it(`transforms shipping addresses`, () => {
        expect(
            getTransformedShippingAddresses(
                mockBcCheckout.shippingConsignments,
                customerMessage,
                MockedStorefrontFormFields,
                transformedCountries
            )
        ).toEqual(expect.objectContaining(expectResult));
    });

    it(`returns an empty array if there's no shippingConsignments`, () => {
        expect(getTransformedShippingAddresses(null)).toEqual([]);
    });
});
