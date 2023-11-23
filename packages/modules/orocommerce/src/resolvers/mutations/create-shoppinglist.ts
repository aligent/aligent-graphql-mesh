import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';
import { CreateShoppingListTransformer } from '../../transformers/shopping-list/create-shopping-list-transformer';

/**
 * If the customer has a shopping list, return it. If not create a new shopping list.
 */
export const createShoppingListMutation: MutationResolvers['createRequisitionList'] = {
    resolve: async (_root, args, context, _info) => {
        const client: ShoppingListsClient = context.injector.get(ShoppingListsClient);

        const name: string = args.input?.name as string;

        const createShoppingListTransformer: CreateShoppingListTransformer = context.injector.get(
            CreateShoppingListTransformer
        );
        return createShoppingListTransformer.transform({
            data: await client.createShoppingList(name),
        });
    },
};
