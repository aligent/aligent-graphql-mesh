import { Transformer, TransformerContext } from '@aligent/utils';
import { ShoppingListWithItems } from '../../types';
import { RequisitionList, RequisitionListItemInterface } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';
import { btoa } from '@aligent/utils';
import { ShoppingListToCartTransformer } from '../../transformers';
import { isNull } from 'lodash';

@Injectable({
    global: true,
})
export class ShoppingListWithItemsToRequisitionListTransformer
    implements Transformer<ShoppingListWithItems, RequisitionList>
{
    constructor(protected shoppingListToCartTransformer: ShoppingListToCartTransformer) {}

    transform(
        context: TransformerContext<ShoppingListWithItems, RequisitionList>
    ): RequisitionList {
        const shoppingList = context.data;

        const items = this.transformItems(shoppingList)
       
        return {
            __typename: 'RequisitionList',
            description: shoppingList.data.attributes.notes,
            items: {
                __typename: 'RequistionListItems',
                items: items,
                total_pages: 0,
            },
            items_count: items.length,
            name: shoppingList.data.attributes.name,
            uid: btoa(shoppingList.data.id),
        };
    }

    transformItems(shoppingListWithItems: ShoppingListWithItems){
        const cart = this.shoppingListToCartTransformer.transform({ data: shoppingListWithItems });
        const items: RequisitionListItemInterface[] = [];
        if (cart.items) {
            for (const item of cart.items) {
                if (isNull(item)) {
                    continue;
                }
                items.push({
                    customizable_options: item.customizable_options,
                    quantity: item.quantity,
                    uid: item.uid,
                    product: item.product,
                });
            }
        }
        return items
    }
}
