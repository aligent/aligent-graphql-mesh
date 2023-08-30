import { acOrders, bcOrders } from './__data__/transform-customer-orders.data';
import { getTransformedOrders } from '../transform-customer-orders';

describe('transform customer orders from BC to AC', () => {
    it('Returns AC Customer order items transformed', () => {
        const result = getTransformedOrders(bcOrders);

        expect(result).toEqual(acOrders);
    });
});
