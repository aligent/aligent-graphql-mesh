import { Transformer, TransformerContext } from '@aligent/utils';
import { OroOrderLineItem } from '../../types/order-line-item';
import { ShoppingListItemtWithoutID } from '../../types';

/**
 * This transformer is meant to convert a order line item into a new shopping list line item
 */
export class ShoppingListItemTransformer
    implements Transformer<OroOrderLineItem, ShoppingListItemtWithoutID>
{
    transform(
        context: TransformerContext<OroOrderLineItem, ShoppingListItemtWithoutID>
    ): ShoppingListItemtWithoutID {
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
