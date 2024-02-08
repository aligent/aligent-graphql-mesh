import { Transformer, TransformerContext } from '@aligent/utils';
import { ShoppingListWithItems } from '../../types';
import { btoa } from '@aligent/utils';
import { ShoppingListToCartTransformer } from '../../transformers';
import { isNull } from 'lodash';
import { Injectable } from 'graphql-modules';
import { RequisitionList } from '@aligent/orocommerce-resolvers';

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

        const items = this.transformItems(shoppingList);

        return {
            description: shoppingList.data.attributes.notes,
            items: {
                items: items,
                page_info: {
                    current_page: 0,
                    page_size: 0,
                    total_pages: 0,
                },
                total_pages: 0,
            },
            items_count: items.length,
            name: shoppingList.data.attributes.name,
            uid: btoa(shoppingList.data.id),
        };
    }

    transformItems(shoppingListWithItems: ShoppingListWithItems) {
        const cart = this.shoppingListToCartTransformer.transform({ data: shoppingListWithItems });
        const items = [];
        if (cart.items) {
            for (const item of cart.items) {
                if (isNull(item)) {
                    continue;
                }
                items.push({
                    __typename: item.product.__typename
                        ? this.getTypeName(item.product.__typename)
                        : 'SimpleRequisitionListItem',
                    customizable_options: item.customizable_options,
                    quantity: item.quantity,
                    uid: item.uid,
                    product: item.product,
                });
            }
        }
        return items;
    }

    // This isnt an ideal solution and only covers two use cases
    // If we ever need other product and requisition list types this needs to be updated
    getTypeName(typeName: string): 'ConfigurableRequisitionListItem' | 'SimpleRequisitionListItem' {
        if (typeName === 'SimpleProduct') {
            return 'SimpleRequisitionListItem';
        } else {
            return 'ConfigurableRequisitionListItem';
        }
    }
}
