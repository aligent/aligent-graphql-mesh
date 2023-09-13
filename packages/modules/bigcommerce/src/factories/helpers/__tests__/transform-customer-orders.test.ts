import { acOrders, bcOrders } from './__data__/transform-customer-orders.data';
import { getTransformedOrders } from '../transform-customer-orders';

describe('transform customer orders from BC to AC', () => {
    it('Returns AC Customer order items transformed', () => {
        const result = getTransformedOrders(
            bcOrders,
            acOrders.page_info?.page_size,
            acOrders.page_info?.current_page
        );

        expect(result).toEqual(acOrders);
    });
});
