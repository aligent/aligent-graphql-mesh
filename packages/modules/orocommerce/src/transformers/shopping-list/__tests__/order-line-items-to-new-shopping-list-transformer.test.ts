import 'reflect-metadata';

import { getOroMockOrderLineItems } from './__data__/order-line-items-data';
import { OrderLineItemToShoppingListItemTransformer } from '../order-line-item-to-shopping-list-item-transformer';
import { OrderLineItemsToNewShoppingListTransformer } from '../order-line-items-to-new-shopping-list-transformer';
import {
    ShoppingListItemAttributes,
    ShoppingListRelationships,
    ShoppingListWithItemsIncluded,
} from '../../../types';

describe('Order Line Item to New Shopping List transformation tests', () => {
    const lineItemTransformer = new OrderLineItemToShoppingListItemTransformer();
    const newShoppingListTransformer = new OrderLineItemsToNewShoppingListTransformer(
        lineItemTransformer
    );

    const orderLineItems = getOroMockOrderLineItems();
    const newShoppingList = { default: true, name: 'New Shopping List', notes: null };
    const newShoppingListWithItems = newShoppingListTransformer.transform({
        data: {
            newShoppingList: newShoppingList,
            orderLineItems: orderLineItems,
        },
    });

    test('Check whether the new shopping list contains expected properties', () => {
        expect(newShoppingListWithItems).toHaveProperty('data.id');
        expect(newShoppingListWithItems).toHaveProperty('data.type');
        expect(newShoppingListWithItems).toHaveProperty('data.attributes.name');
        expect(newShoppingListWithItems).toHaveProperty('data.attributes.notes');
        expect(newShoppingListWithItems).toHaveProperty('data.attributes.default');
        expect(newShoppingListWithItems).toHaveProperty('data.relationships.items.data[0].id');
        expect(newShoppingListWithItems).toHaveProperty('data.relationships.items.data[0].type');
        expect(newShoppingListWithItems).toHaveProperty('included[0].id');
        expect(newShoppingListWithItems).toHaveProperty('included[0].type');
        expect(newShoppingListWithItems).toHaveProperty('included[0].attributes.quantity');
        expect(newShoppingListWithItems).toHaveProperty(
            'included[0].relationships.product.data.id'
        );
        expect(newShoppingListWithItems).toHaveProperty(
            'included[0].relationships.product.data.type'
        );
        expect(newShoppingListWithItems).toHaveProperty('included[0].relationships.unit.data.id');
        expect(newShoppingListWithItems).toHaveProperty('included[0].relationships.unit.data.type');
        expect(newShoppingListWithItems).toHaveProperty(
            'included[0].relationships.shoppingList.data.id'
        );
        expect(newShoppingListWithItems).toHaveProperty(
            'included[0].relationships.shoppingList.data.type'
        );
    });

    test('Check whether the new shopping list contains expected data', () => {
        expect(newShoppingList).toStrictEqual(newShoppingListWithItems.data.attributes);

        const shoppingListItems =
            newShoppingListWithItems.included as ShoppingListWithItemsIncluded[];

        for (const index in shoppingListItems) {
            const shoppingListItem = shoppingListItems[index];
            const mockOrderLineItem = orderLineItems[index];

            expect(shoppingListItem.type).toStrictEqual('shoppinglistitems');

            const attributes = shoppingListItem.attributes as ShoppingListItemAttributes;
            expect(attributes.quantity).toStrictEqual(mockOrderLineItem.attributes.quantity);

            const relationships = shoppingListItem.relationships as ShoppingListRelationships;
            expect(relationships.product).toStrictEqual(mockOrderLineItem.relationships.product);
            expect(relationships.unit).toStrictEqual(mockOrderLineItem.relationships.productUnit);
            expect(relationships.shoppingList).toStrictEqual({
                data: {
                    type: newShoppingListWithItems.data.type,
                    id: newShoppingListWithItems.data.id,
                },
            });

            expect(
                newShoppingListWithItems.data.relationships.items.data[index].type
            ).toStrictEqual('shoppinglistitems');
        }
    });
});
