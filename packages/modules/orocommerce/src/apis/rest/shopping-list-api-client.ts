import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import {
    ShoppingList,
    ShoppingListInputAttribute,
    ShoppingListItem,
    ShoppingListItemtWithoutID,
    ShoppingListWithItems,
} from '../../types';

@Injectable()
export class ShoppingListsClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getShoppingLists() {
        return this.apiClient.get<ShoppingList[]>('/shoppinglists');
    }

    async getShoppingListsWithItems() {
        const params = {
            include: 'items',
        };
        return this.apiClient.get<ShoppingList[], ShoppingListItem[]>('/shoppinglists', { params });
    }

    async postShoppingLists(data: ShoppingList) {
        return this.apiClient.post<ShoppingList, { data: ShoppingList }>('/shoppinglists', {
            data,
        });
    }

    async createDefaultShoppingList() {
        return this.postShoppingLists({
            type: 'shoppinglists',
            id: '1',
            attributes: {
                name: 'default',
                default: true,
            } as ShoppingListInputAttribute,
        });
    }

    async createShoppingListWithItems(data: ShoppingListWithItems): Promise<ShoppingListWithItems> {
        return this.apiClient.post<ShoppingListWithItems, ShoppingListWithItems>(
            '/shoppinglists',
            data
        );
    }

    async addItemsToShoppingList(
        shoppingList: ShoppingList,
        items: ShoppingListItemtWithoutID[]
    ): Promise<ShoppingListItem[]> {
        const url = `/shoppinglists/${shoppingList.id}/items`;
        return this.apiClient.post<ShoppingListItem[], { data: ShoppingListItemtWithoutID[] }>(
            url,
            {
                data: items,
            }
        );
    }
}
