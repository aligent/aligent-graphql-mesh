import { acOrders, bcOrders } from './__data__/customer-orders.data';
import { getTransformedOrders } from '../transform-customer-orders';

describe('transform customer orders from BC to AC', () => {
    it('Returns AC Customer order items transformed', () => {
        const acOrderExpected = acOrders;
        const transformedOrders = getTransformedOrders(
            bcOrders,
            20,
            acOrderExpected.page_info?.current_page
        );

        expect(transformedOrders).toEqual(acOrderExpected);
    });
});
