import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { Cart } from '@aligent/orocommerce-resolvers';
import { ShoppingListService } from './shopping-list-service';
import { Transformer } from '@aligent/utils';
import { ShoppingListWithItems } from '../types';
import { ShoppingListToCartTransformer } from '../transformers/shopping-list/shopping-list-to-cart-transformer';

@Injectable()
export class CartService {
    constructor(
        @Inject(forwardRef(() => ShoppingListService)) protected apiClient: ShoppingListService,
        @Inject(forwardRef(() => ShoppingListToCartTransformer))
        protected readonly cartTransformer: Transformer<ShoppingListWithItems, Cart>
    ) {}

    /**
     * The purpose of this method is to return a populated cart with relevant/up-to-date data containing all items etc
     * @param shoppingList ShoppingListWithItems | null
     * @returns Promise<Cart>
     */
    async getCart(shoppingList: ShoppingListWithItems | null): Promise<Cart> {
        shoppingList = shoppingList ?? (await this.apiClient.getShoppingListWithItems());
        return this.cartTransformer.transform({ data: shoppingList! });
    }
}
