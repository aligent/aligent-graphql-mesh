import { Transformer, TransformerContext } from '../../../../../utils/transformers';
import { OroOrderLineItem } from '../../types/order-line-item';
import { ShoppingListItemInputWithoutID } from '../../types/shopping-list-input';

/**
 * This transformer is meant to convert a order line item into a new shopping list line item
 */
export class OrderLineItemToShoppingListItemTransformer
    implements Transformer<OroOrderLineItem, ShoppingListItemInputWithoutID>
{
    transform(
        context: TransformerContext<OroOrderLineItem, ShoppingListItemInputWithoutID>
    ): ShoppingListItemInputWithoutID {
        const orderLineItem = context.data;
        return {
            type: 'shoppinglistitems',
            attributes: {
                quantity: orderLineItem.attributes.quantity,
            },
            relationships: {
                product: {
                    data: {
                        type: orderLineItem.relationships.product.data.type,
                        id: orderLineItem.relationships.product.data.id,
                    },
                },
                unit: {
                    data: {
                        type: orderLineItem.relationships.productUnit.data.type,
                        id: orderLineItem.relationships.productUnit.data.id,
                    },
                },
            },
        };
    }
}
