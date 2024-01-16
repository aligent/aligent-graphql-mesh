import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { ShoppingListService } from '../../services';
import { ShoppingListToCartTransformer } from '../../transformers';
import { UNDEFINED_CART } from '../../transformers/shopping-list/constants';

export const customerCartResolver: QueryResolvers['customerCart'] = {
    resolve: async (_root, _args, context, _info) => {
        const shoppingListService: ShoppingListService = context.injector.get(ShoppingListService);
        const shoppingListWithItems = await shoppingListService.getShoppingListWithItems();

        const shoppingListTransformer: ShoppingListToCartTransformer = context.injector.get(
            ShoppingListToCartTransformer
        );

        if (!shoppingListWithItems) {
            return UNDEFINED_CART;
        } else {
            return shoppingListTransformer.transform({
                data: shoppingListWithItems,
            });
        }
    },
};
