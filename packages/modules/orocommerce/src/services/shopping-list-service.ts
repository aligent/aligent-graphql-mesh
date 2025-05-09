import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ShoppingListsClient } from '../apis/rest/shopping-list-api-client';
import {
    ShoppingList,
    ShoppingListInputAttribute,
    ShoppingListItemInput,
    ShoppingListWithItems,
    ShoppingListWithItemsIncluded,
} from '../types';
import { OroOrderLineItem } from '../types/order-line-item';
import { OrderLineItemsToNewShoppingListTransformer } from '../transformers/shopping-list/order-line-items-to-new-shopping-list-transformer';
import { OrderLineItemToShoppingListItemTransformer } from '../transformers/shopping-list/order-line-item-to-shopping-list-item-transformer';
import { Transformer } from '@aligent/utils';
import { StoreUrl } from '../providers';
import { isProductImage } from '../utils/type-predicates';

@Injectable({
    global: true,
})
export class ShoppingListService {
    constructor(
        @Inject(forwardRef(() => ShoppingListsClient))
        protected readonly apiClient: ShoppingListsClient,

        @Inject(forwardRef(() => OrderLineItemsToNewShoppingListTransformer))
        protected readonly newShoppingListTransformer: Transformer<
            { newShoppingList: ShoppingListInputAttribute; orderLineItems: OroOrderLineItem[] },
            ShoppingListWithItems
        >,

        @Inject(forwardRef(() => OrderLineItemToShoppingListItemTransformer))
        protected readonly shoppingListItemTransformer: Transformer<
            OroOrderLineItem,
            ShoppingListItemInput
        >,
        @Inject(forwardRef(() => StoreUrl)) protected storeUrl: string
    ) {}

    /**
     * Get the user's shopping list. We're assuming that users will always have a maximum of one shopping list
     * @returns Promise<ShoppingList | null>
     */
    async getShoppingList(): Promise<ShoppingList | null> {
        const data = await this.apiClient.getShoppingLists();
        return data[0] ?? null;
    }

    /**
     * Get the user's shopping list with items. We're assuming that users will always have a maximum of one shopping list
     * @returns Promise<ShoppingListWithItems | null>
     */
    async getShoppingListWithItems(id?: string): Promise<ShoppingListWithItems | null> {
        const { data, included } = await this.apiClient.getShoppingListsWithItems(id);
        included?.filter(isProductImage).map((image) => {
            image.attributes.files.map((file) => {
                file.url = this.storeUrl + file.url;
            });
        });
        return data[0] !== undefined
            ? { data: data[0], included: included as ShoppingListWithItemsIncluded[] }
            : null;
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
            const transformedShoppingList = this.newShoppingListTransformer.transform({
                data: {
                    newShoppingList: { name: 'Default Shopping List', default: true, notes: null },
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
            currentShoppingList.id,
            // convert each order line item into a new shopping list line item
            items.map((item) => transformer({ data: item }))
        );

        const updateShoppingList = await this.getShoppingListWithItems();
        // it shouldn't return null because items have been added to this shopping list previously
        return updateShoppingList as ShoppingListWithItems;
    }
}
