import { Transformer, TransformerContext, ChainTransformer } from '@aligent/utils';
import { DeleteRequisitionListOutput, RequisitionList } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';

import { ShoppingListWithItemsToRequisitionListTransformer } from './shopping-list-with-items-to-requisition-list-transformer';
import { ShoppingListWithItems } from '../../types';
import { isNull } from 'lodash';
@Injectable()
export class DeleteShoppingListOutputTransformerChain extends ChainTransformer<
    { status: boolean; shopping_list_with_items: ShoppingListWithItems | null },
    DeleteRequisitionListOutput
> {}

@Injectable()
export class DeleteShoppingListOutputTransformer
    implements
        Transformer<
            { status: boolean; shopping_list_with_items: ShoppingListWithItems | null },
            DeleteRequisitionListOutput
        >
{
    constructor(
        protected shoppingListWithItemsToRequisitionListTransformer: ShoppingListWithItemsToRequisitionListTransformer
    ) {}
    transform(
        context: TransformerContext<
            { status: boolean; shopping_list_with_items: ShoppingListWithItems | null },
            DeleteRequisitionListOutput
        >
    ): DeleteRequisitionListOutput {
        const requisitionListItems: RequisitionList[] = [];
        if (!isNull(context.data.shopping_list_with_items)) {
            const requisitionList =
                this.shoppingListWithItemsToRequisitionListTransformer.transform({
                    data: context.data.shopping_list_with_items,
                });
            requisitionListItems.push(requisitionList);
        }
        return {
            status: context.data.status,

            requisition_lists: {
                items: requisitionListItems,
                page_info: {},
                total_count: 0,
            },
        };
    }
}
