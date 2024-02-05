import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { Cart } from '@aligent/orocommerce-resolvers';
import { ShoppingListService } from './shopping-list-service';
import { Transformer } from '@aligent/utils';
import { ShoppingListWithItems } from '../types';
import { ShoppingListToCartTransformer } from '../transformers/shopping-list/shopping-list-to-cart-transformer';

const UNDEFINED_CART: Cart = {
    id: '',
    items: [],
    total_quantity: 0,
    available_gift_wrappings: [],
    gift_receipt_included: false,
    is_virtual: false,
    printed_card_included: false,
    shipping_addresses: [],
};

@Injectable({
    global: true,
})
export class CartService {
    constructor(
        @Inject(forwardRef(() => ShoppingListService)) protected apiClient: ShoppingListService,
        @Inject(forwardRef(() => ShoppingListToCartTransformer))
        protected readonly cartTransformer: Transformer<ShoppingListWithItems, Cart>
    ) {}

    /**
     * The purpose of this method is to return a populated cart with relevant/up-to-date data containing all items etc
     * @param shoppingListOrId ShoppingListWithItems | string
     * @returns Promise<Cart>
     */
    async getCart(shoppingListOrId: ShoppingListWithItems | string): Promise<Cart> {
        if (typeof shoppingListOrId === 'string') {
            const shoppingListWithItems =
                await this.apiClient.getShoppingListWithItems(shoppingListOrId);

            if (!shoppingListWithItems) {
                return UNDEFINED_CART;
            }

            return this.cartTransformer.transform({ data: shoppingListWithItems });
        }

        return this.cartTransformer.transform({ data: shoppingListOrId });
    }
}
