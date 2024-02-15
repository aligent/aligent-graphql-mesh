import { Transformer, TransformerContext } from '@aligent/utils';
import { ShoppingList } from '../../types';
import { RequisitionList } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';
import { btoa } from '@aligent/utils';

@Injectable({
    global: true,
})
export class ShoppingListToRequisitionListTransformer
    implements Transformer<ShoppingList, RequisitionList>
{
    transform(context: TransformerContext<ShoppingList, RequisitionList>): RequisitionList {
        const shoppingList = context.data;

        return {
            description: shoppingList.attributes.notes,
            items: {
                items: [],
                page_info: {
                    current_page: 0,
                    page_size: 0,
                    total_pages: 0,
                },
                total_pages: 0,
            },
            items_count: 0,
            name: shoppingList.attributes.name,
            uid: btoa(shoppingList.id),
        };
    }
}
