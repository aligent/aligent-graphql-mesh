import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { Cart, CurrencyEnum } from '@aligent/orocommerce-resolvers';
import { ShoppingListService } from './shopping-list-service';
import { ShoppingListItem, ShoppingListWithItems } from '../types';

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

@Injectable()
export class CartDetailsService {
    constructor(
        @Inject(forwardRef(() => ShoppingListService)) protected apiClient: ShoppingListService
    ) {}

    /**
     * The purpose of this method is to return a populated cart with relevant/up-to-date data containing all items etc
     * @param shoppingList ShoppingListWithItems | null
     * @returns Promise<Cart>
     */
    async getCart(shoppingList: ShoppingListWithItems | null): Promise<Cart> {
        shoppingList = shoppingList ?? (await this.apiClient.getShoppingListWithItems());
        const enrichedCart = { ...UNDEFINED_CART };
        enrichedCart.id = shoppingList!.data.id;
        enrichedCart.total_quantity = shoppingList!.included.length ?? 0;
        //TODO: split items into a sub-resolver?
        enrichedCart.items = shoppingList!.included.map((item: ShoppingListItem) => {
            //TODO: this needs to be enriched to add missing data where possible
            return {
                id: item.id,
                uid: btoa(item.id),
                quantity: item.attributes.quantity,
                product: {
                    custom_attributes: [],
                    price_range: {
                        minimum_price: {
                            final_price: {
                                currency: item.attributes.currency as CurrencyEnum,
                                value: Number(item.attributes.value),
                            },
                            regular_price: {
                                currency: item.attributes.currency as CurrencyEnum,
                                value: Number(item.attributes.value),
                            },
                        },
                    },
                    review_count: 0,
                    reviews: { items: [], page_info: {} },
                    rating_summary: 0,
                    staged: false,
                    uid: btoa(item.id),
                },
                // had to add this because was getting this error
                // Abstract type \"CartItemInterface\" must resolve to an Object type at runtime for field \"Cart.items\
                // Either the \"CartItemInterface\" type should provide a \"resolveType\" function or each possible type should provide an \"isTypeOf\" function."
                __typename: 'ConfigurableCartItem',
            };
        });
        enrichedCart.prices = {
            grand_total: {
                currency: shoppingList!.data.attributes.currency as CurrencyEnum,
                value: Number(shoppingList!.data.attributes.total),
            },
        };
        return Promise.resolve(enrichedCart);
    }
}
