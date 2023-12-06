import { Transformer, TransformerContext, ChainTransformer } from '@aligent/utils';
import { DeleteRequisitionListOutput, RequisitionList } from '@aligent/orocommerce-resolvers';
import { Injectable } from 'graphql-modules';

import { ShoppingListWithItemsToRequisitionListTransformer } from './shopping-list-with-items-to-requisition-list-transformer';
import { ShoppingListWithItems } from '../../types';
import { isNull } from 'lodash';
import { ShoppingListToCartTransformer } from '../../transformers/shopping-list/shopping-list-to-cart-transformer';
@Injectable()
export class DeleteShoppingListOutputTransformerChain extends ChainTransformer<
    { status: boolean; shopping_lists_with_items: ShoppingListWithItems[] | null },
    DeleteRequisitionListOutput
> {}

@Injectable()
export class DeleteShoppingListOutputTransformer
    implements
        Transformer<
            { status: boolean; shopping_lists_with_items: ShoppingListWithItems[] | null },
            DeleteRequisitionListOutput
        >
{
    transform(
        context: TransformerContext<
            { status: boolean; shopping_lists_with_items: ShoppingListWithItems[] | null },
            DeleteRequisitionListOutput
        >
    ): DeleteRequisitionListOutput {
        const requisitionListItems: RequisitionList[] = [];
        if (!isNull(context.data.shopping_lists_with_items)) {
            for (const shopping_list of context.data.shopping_lists_with_items) {
                const shoppingListToCartTransformer = new ShoppingListToCartTransformer();
                const shoppingListWithItemsToRequisitionListTransformer =
                    new ShoppingListWithItemsToRequisitionListTransformer(
                        shoppingListToCartTransformer
                    );

                const requisitionList = shoppingListWithItemsToRequisitionListTransformer.transform(
                    {
                        data: shopping_list,
                    }
                );
                requisitionListItems.push(requisitionList);
            }
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
