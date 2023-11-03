import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { Cart } from '@aligent/orocommerce-resolvers';
import { ShoppingListService } from './shopping-list-service';
import { Transformer } from '@aligent/utils';
import { ShoppingListWithItems } from '../types';
import { ShoppingListToCartTransformer } from '../transformers/shopping-list/shopping-list-to-cart-transformer';

@Injectable()
export class CartService {
    protected readonly transformer: Transformer<ShoppingListWithItems, Cart>;

    constructor(
        @Inject(forwardRef(() => ShoppingListService)) protected apiClient: ShoppingListService
    ) {
        this.transformer = new ShoppingListToCartTransformer();
    }

    /**
     * The purpose of this method is to return a populated cart with relevant/up-to-date data containing all items etc
     * @param shoppingList ShoppingListWithItems | null
     * @returns Promise<Cart>
     */
    async getCart(shoppingList: ShoppingListWithItems | null): Promise<Cart> {
        shoppingList = shoppingList ?? (await this.apiClient.getShoppingListWithItems());
        return this.transformer.transform({ data: shoppingList! });
    }
}
