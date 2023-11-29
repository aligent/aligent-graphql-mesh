import { mockBcCheckout } from '../../../resolvers/mocks/checkout.bc';
import { MockedStorefrontFormFields } from '../../../resolvers/mocks/storefront-form-fields';
import { getTransformedDeliveryInstructions } from '../transform-delivery-instructions';

const expectedDeliveryInstructions = {
    authorityToLeave: true,
    instructions: 'Leave at the rear door',
};

describe('transform-delivery-instructions', () => {
    it('Transforms a BC Checkout shipping consignment address custom field values to AC delivery instructions', () => {
        expect(
            getTransformedDeliveryInstructions(
                mockBcCheckout.shippingConsignments[0].address,
                MockedStorefrontFormFields
            )
        ).toEqual(expectedDeliveryInstructions);
    });
});
