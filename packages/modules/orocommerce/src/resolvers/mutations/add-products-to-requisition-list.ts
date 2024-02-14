import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';
import { AddProductsToRequisitionListArgsTransformerChain } from '../../transformers/shopping-list/add-products-to-requisition-list-args-transformer';
import { RequisitionListService } from '../../services/requisition-list-service';

export const addProductsToRequisitionLisResolver: MutationResolvers['addProductsToRequisitionList'] =
    {
        resolve: async (_root, args, context, _info) => {
            const { requisitionListItems, requisitionListUid } = args;
            const decodedRequisitionListId = atob(requisitionListUid);

            const addProductsToRequisitionListArgsTransformerChain: AddProductsToRequisitionListArgsTransformerChain =
                context.injector.get(AddProductsToRequisitionListArgsTransformerChain);

            const transformedItemsForShoppingList =
                addProductsToRequisitionListArgsTransformerChain.transform({
                    data: requisitionListItems,
                });

            const clientShoppingList: ShoppingListsClient =
                context.injector.get(ShoppingListsClient);

            await clientShoppingList.addItemsToShoppingList(
                decodedRequisitionListId,
                transformedItemsForShoppingList
            );

            const requisitionListService: RequisitionListService =
                context.injector.get(RequisitionListService);

            const requisitionLists = await requisitionListService.getList(decodedRequisitionListId);

            return {
                requisition_list: requisitionLists?.items ? requisitionLists.items[0] : null,
            };
        },
    };
