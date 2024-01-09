import 'reflect-metadata';

import { getOroMockOrderLineItems } from './__data__/order-line-items-data';
import { OrderLineItemToShoppingListItemTransformer } from '../order-line-item-to-shopping-list-item-transformer';

describe('Order Line Item to Shopping List Item transformation tests', () => {
    const orderLineItem = getOroMockOrderLineItems()[0];
    const transformer = new OrderLineItemToShoppingListItemTransformer();
    const transformedLineItem = transformer.transform({ data: orderLineItem });

    test('Check whether the transformed line item contains expected properties', () => {
        expect(transformedLineItem).toHaveProperty('type');
        expect(transformedLineItem).toHaveProperty('attributes.quantity');
        expect(transformedLineItem).toHaveProperty('relationships.product.data.id');
        expect(transformedLineItem).toHaveProperty('relationships.product.data.type');
        expect(transformedLineItem).toHaveProperty('relationships.unit.data.id');
        expect(transformedLineItem).toHaveProperty('relationships.unit.data.type');
    });

    test('Check whether the transformed line item contains expected data', () => {
        expect(transformedLineItem.type).toStrictEqual('shoppinglistitems');

        expect(transformedLineItem.attributes.quantity).toStrictEqual(
            orderLineItem.attributes.quantity
        );
        expect(transformedLineItem.relationships.product.data).toStrictEqual(
            orderLineItem.relationships.product.data
        );
        expect(transformedLineItem.relationships.unit.data).toStrictEqual(
            orderLineItem.relationships.productUnit.data
        );
    });
});
