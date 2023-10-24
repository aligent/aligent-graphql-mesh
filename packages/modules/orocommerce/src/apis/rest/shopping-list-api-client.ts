import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { ShoppingList, ShoppingListItem, ShoppingListWithItems } from '../../types';
import {
    ShoppingListItemInputWithoutID,
    ShoppingListWithItemsInput,
} from '../../types/shopping-list-input';

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
            },
        });
    }

    async createShoppingListWithItems(data: ShoppingListWithItemsInput) {
        return this.apiClient.post<ShoppingListWithItems, ShoppingListWithItemsInput>(
            '/shoppinglists',
            data
        );
    }

    async addItemsToShoppingList(
        shoppingList: ShoppingList,
        items: ShoppingListItemInputWithoutID[]
    ): Promise<ShoppingListItem[]> {
        const url = `/shoppinglists/${shoppingList.id}/items`;
        return this.apiClient.post<ShoppingListItem[], { data: ShoppingListItemInputWithoutID[] }>(
            url,
            {
                data: items,
            }
        );
    }
}
