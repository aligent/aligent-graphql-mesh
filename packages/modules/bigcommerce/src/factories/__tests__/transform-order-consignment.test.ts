import { acOrderAddress, bcConsignment } from './__data__/order-consignment-data';
import { getTransformedShippingAddress } from '../transform-order-consignment';

describe('Order Consignment BC to AC Transformation', () => {
    test('Transform BC Consignment to AC Shipping OrderAddress ', () => {
        const acShippingAddressExpected = acOrderAddress;

        const transformedAcShippingAddress = getTransformedShippingAddress(bcConsignment);

        expect(transformedAcShippingAddress).toEqual(acShippingAddressExpected);
    });
});
