import {
    acOrderItemInterface,
    bcOrderLineItem,
} from './__data__/transform-rest-order-line-item-data';
import { transformBcOrderLineItem } from '../../tranform-rest-order-line-item';

describe('Transform Order Line Item', () => {
    it('Returns the OrderItemInterface when valid BCOrderLineItem given', () => {
        const bcLineItem = bcOrderLineItem;
        const bcOrderCurrencyCode = 'AUD';

        const expectedAcLineItem = acOrderItemInterface;

        const result = transformBcOrderLineItem(bcLineItem, bcOrderCurrencyCode);

        expect(result).toEqual(expectedAcLineItem);
    });
});
