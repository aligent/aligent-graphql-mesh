import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';
import { AddProductsToRequisitionListArgsTransformerChain } from '../../transformers/shopping-list/add-products-to-requisition-list-args-transformer';
import { ShoppingListsToRequisitionListsTransformer } from '../../transformers/shopping-list/shopping-lists-to-requisition-lists-transformer';

export const addProductsToRequisitionLisResolver: MutationResolvers['addProductsToRequisitionList'] =
    {
        resolve: async (_root, args, context, _info) => {
            const { requisitionListItems, requisitionListUid } = args;

            const addProductsToRequisitionListArgsTransformerChain: AddProductsToRequisitionListArgsTransformerChain =
                context.injector.get(AddProductsToRequisitionListArgsTransformerChain);

            const transformedItemsForShoppingList =
                addProductsToRequisitionListArgsTransformerChain.transform({
                    data: requisitionListItems,
                });

            const clientShoppingList: ShoppingListsClient =
                context.injector.get(ShoppingListsClient);

            await clientShoppingList.addItemsToShoppingList(
                requisitionListUid,
                transformedItemsForShoppingList
            );

            const shoppingListsWithItems =
                await clientShoppingList.getShoppingListsWithItems(requisitionListUid);

            const shoppingListWithItemsToRequisitionListTransformer: ShoppingListsToRequisitionListsTransformer =
                context.injector.get(ShoppingListsToRequisitionListsTransformer);

            const transformedRequisitionLists =
                shoppingListWithItemsToRequisitionListTransformer.transform({
                    data: shoppingListsWithItems,
                });

            return {
                requisition_list: transformedRequisitionLists.items
                    ? transformedRequisitionLists.items[0]
                    : null,
            };
        },
    };
