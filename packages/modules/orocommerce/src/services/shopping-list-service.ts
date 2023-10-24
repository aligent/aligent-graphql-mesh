import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ShoppingListsClient } from '../apis/rest/shopping-list-api-client';
import { ShoppingList, ShoppingListWithItems } from '../types';
import { OroOrderLineItem } from '../types/order-line-item';
import { OrderLineItemsToNewShoppingListTransformer } from '../transformers/order-line-items/order-line-items-to-new-shopping-list-transformer';
import { OrderLineItemToShoppingListItemTransformer } from '../transformers/order-line-items/order-line-item-to-shopping-list-item-transformer';

@Injectable()
export class ShoppingListService {
    protected shoppingListTransformer: OrderLineItemsToNewShoppingListTransformer;
    protected shoppingListItemTransformer: OrderLineItemToShoppingListItemTransformer;

    constructor(
        @Inject(forwardRef(() => ShoppingListsClient)) protected apiClient: ShoppingListsClient
    ) {
        this.shoppingListItemTransformer = new OrderLineItemToShoppingListItemTransformer();
        this.shoppingListTransformer = new OrderLineItemsToNewShoppingListTransformer(
            this.shoppingListItemTransformer
        );
    }

    /**
     * Get the user's shopping list. We're assuming that currently the user will always have one shopping list
     * @returns Promise<ShoppingList | null>
     */
    async getShoppingList(): Promise<ShoppingList | null> {
        const data = (await this.apiClient.getShoppingLists()).data;
        return data[0] ?? null;
    }

    /**
     * Get the user's shopping list with items. We're assuming that currently the user will always have one shopping list
     * @returns Promise<ShoppingListWithItems | null>
     */
    async getShoppingListWithItems(): Promise<ShoppingListWithItems | null> {
        const data = await this.apiClient.getShoppingListsWithItems();
        return { data: data.data[0], included: data.included! };
    }

    /**
     * Add order line items to the shopping list and return updated shopping list
     * @param items OroOrderLineItem[]
     * @returns Promise<ShoppingListWithItems>
     */
    async addItemsFromOrderLineItems(items: OroOrderLineItem[]): Promise<ShoppingListWithItems> {
        const currentShoppingList = await this.getShoppingList();

        // if the user doesn't have a shopping list, we'll create one
        if (currentShoppingList === null) {
            // transforms the order line items into a new shopping list with items to be persisted via API
            const transformedShoppingList = this.shoppingListTransformer.transform({
                data: {
                    newShoppingList: { name: 'Default Shopping List', default: false },
                    orderLineItems: items,
                },
            });
            // call the api to create a new shopping list with line items from the order
            const createdShoppingList =
                await this.apiClient.createShoppingListWithItems(transformedShoppingList);
            return createdShoppingList;
        }

        const transformer = this.shoppingListItemTransformer.transform;

        await this.apiClient.addItemsToShoppingList(
            currentShoppingList,
            // convert each order line item into a new shopping list line item
            items.map((item) => transformer({ data: item }))
        );

        const updateShoppingList = await this.getShoppingListWithItems();
        // it shouldn't return null because items have been added to this shopping list previously
        return updateShoppingList!;
    }
}
