import {
    ShoppingList,
    ShoppingListInputAttribute,
    ShoppingListItem,
    ShoppingListWithItems,
} from '../../types';
import { OroOrderLineItem } from '../../types/order-line-item';
import { v4 as uuidv4 } from 'uuid';
import { OrderLineItemToShoppingListItemTransformer } from './order-line-item-to-shopping-list-item-transformer';
import { Transformer, TransformerContext } from '@aligent/utils';

export interface OrderLineItemsToNewShoppingListTransformerInput {
    newShoppingList: ShoppingListInputAttribute;
    orderLineItems: OroOrderLineItem[];
}

/**
 * This transformer is meant to convert order line items into a new shopping list with the order line items
 */
export class OrderLineItemsToNewShoppingListTransformer
    implements Transformer<OrderLineItemsToNewShoppingListTransformerInput, ShoppingListWithItems>
{
    constructor(protected lineItemTransformer: OrderLineItemToShoppingListItemTransformer) {}

    transform(
        context: TransformerContext<
            OrderLineItemsToNewShoppingListTransformerInput,
            ShoppingListWithItems
        >
    ): ShoppingListWithItems {
        const included: ShoppingListItem[] = [];
        const shoppingList: ShoppingList = {
            id: '1',
            type: 'shoppinglists',
            attributes: context.data.newShoppingList,
            relationships: {
                items: { data: [] },
            },
        };
        const orderLineItems = context.data.orderLineItems;
        for (const orderLineItem of orderLineItems) {
            const id = uuidv4();
            const type = 'shoppinglistitems';
            shoppingList.relationships.items.data.push({ id, type });

            const shoppinglistLineItem = this.lineItemTransformer.transform({
                data: orderLineItem,
            });
            shoppinglistLineItem.relationships.shoppingList = {
                data: {
                    type: 'shoppinglists',
                    id: shoppingList.id,
                },
            };

            included.push({
                id: id,
                ...shoppinglistLineItem,
            });
        }
        return { data: shoppingList, included: included };
    }
}
