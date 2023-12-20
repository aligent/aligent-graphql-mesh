import { Transformer, TransformerContext } from '@aligent/utils';
import { ShoppingListWithItems } from '../../types';
import { RequisitionList, RequisitionListItemInterface } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';
import { btoa } from '@aligent/utils';
import { ShoppingListToCartTransformer } from '../../transformers';
import { isNull } from 'lodash';
@Injectable()
export class ShoppingListWithItemsToRequisitionListTransformer
    implements Transformer<ShoppingListWithItems, RequisitionList>
{
    constructor(protected shoppingListToCartTransformer: ShoppingListToCartTransformer) {}

    transform(
        context: TransformerContext<ShoppingListWithItems, RequisitionList>
    ): RequisitionList {
        const shoppingList = context.data;

        const cart = this.shoppingListToCartTransformer.transform({ data: shoppingList });
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
}
