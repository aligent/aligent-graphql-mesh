import { MutationResolvers} from '@aligent/orocommerce-resolvers'; 
import { RequistionListItems } from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient} from '../../apis/rest/shopping-list-api-client'; 
import { RequisitionListService } from '../../services/requisition-list-service'; 
import { ShoppingListWithItemsToRequisitionListTransformer } from '../../transformers/shopping-list/shopping-list-with-items-to-requisition-list-transformer';
import { ShoppingListService } from '../../services';
import { logAndThrowError } from '@aligent/utils';
import { error } from 'console';

export const deleteRequisitionListItemsMutation: MutationResolvers['deleteRequisitionListItems'] = {

    resolve: async (_root, args, context, _info) => {

        console.log(' Resolver Started ')
        console.log(args);

        // 1. Get relevant data from graphql mutation args
        const ids = args.requisitionListItemUids.map(atob).join(',');
        console.log('Decoded IDs: ', ids)

        const clientShoppingList: ShoppingListsClient = context.injector.get(ShoppingListsClient); 
        console.log('Shopping Lists: ', clientShoppingList); 
        
        
        // 2. Send request to delete items from Oro shopping list
        const deleteItemsInShoppingListResult = await clientShoppingList.deleteItemsInShoppingList(ids);
        console.log(deleteItemsInShoppingListResult)

        // 3. Get data from Oro which is needed on graphql response -> we need to get the requisition list 
        const shoppingListSerice: ShoppingListService = context.injector.get(ShoppingListService); 
        const itemsOnList = await shoppingListSerice.getShoppingListWithItems(atob(args.requisitionListUid));
        console.log(itemsOnList)

        // 4. Call transformer to transform data so that it matches `DeleteRequisitionListItemsOutput`
        const shoppingListTransformenr: ShoppingListWithItemsToRequisitionListTransformer = context.injector.get(ShoppingListWithItemsToRequisitionListTransformer); 

        if (!itemsOnList) {
            throw new Error ('no product to delete')
        }
        const transformed = shoppingListTransformenr.transform({
            data: itemsOnList
        })
        
        return {requisition_list: transformed}
    }
}
