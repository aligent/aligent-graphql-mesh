import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';

/**
 * If the customer has a shopping list, return it. If not create a new shopping list.
 */
export const createEmptyCartMutation: MutationResolvers['createEmptyCart'] = {
    resolve: async (_root, _args, context, _info) => {
        const client: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        const shoppinglists = await client.getShoppingLists();

        if (shoppinglists.length === 0) {
            return (await client.createDefaultShoppingList()).id;
        } else {
            return shoppinglists[0].id;
        }
    },
};
