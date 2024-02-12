import { Transformer, TransformerContext } from '@aligent/utils';
import { ShoppingListsWithItems } from '../../types';
import { RequisitionLists } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';
import { ShoppingListWithItemsToRequisitionListTransformer } from './shopping-list-with-items-to-requisition-list-transformer';

@Injectable({
    global: true,
})
export class ShoppingListsToRequisitionListsTransformer
    implements Transformer<ShoppingListsWithItems, RequisitionLists>
{
    constructor(
        protected requisitionListTransformer: ShoppingListWithItemsToRequisitionListTransformer
    ) {}

    transform(
        context: TransformerContext<ShoppingListsWithItems, RequisitionLists>
    ): RequisitionLists {
        const { data, included } = context.data;

        const requisitionLists = data.map((shoppingList) =>
            this.requisitionListTransformer.transform({
                data: {
                    data: shoppingList,
                    included: included,
                },
            })
        );

        return {
            items: requisitionLists,
            total_count: requisitionLists.length,
            // This will be implemented in OTF-190 with filtering
            page_info: {
                current_page: 0,
                page_size: 0,
                total_pages: 0,
            },
        };
    }
}
