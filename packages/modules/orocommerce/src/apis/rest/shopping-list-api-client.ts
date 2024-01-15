import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import {
    ShoppingList,
    ShoppingListInputAttribute,
    ShoppingListItem,
    ShoppingListItemInput,
    ShoppingListsWithItems,
    ShoppingListWithItems,
} from '../../types';

@Injectable()
export class ShoppingListsClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getShoppingLists(): Promise<ShoppingList[]> {
        return (await this.apiClient.get<ShoppingList[]>('/shoppinglists')).data;
    }

    async getShoppingListsWithItems(id?: string): Promise<ShoppingListsWithItems> {
        const params: Record<string, string> = {
            include: 'items.product.images,items.product.category',
        };
        if (id) {
            params['filter[id]'] = id;
        }
        return this.apiClient.get<ShoppingList[], ShoppingListWithItems['included']>(
            '/shoppinglists',
            { params }
        );
    }

    async getShoppingListItems(): Promise<ShoppingList[]> {
        return (await this.apiClient.get<ShoppingList[]>('/shoppinglists')).data;
    }

    async postShoppingLists(data: ShoppingList): Promise<ShoppingList> {
        const res = await this.apiClient.post<{ data: ShoppingList }, { data: ShoppingList }>(
            '/shoppinglists',
            {
                data,
            }
        );
        return res.data;
    }

    async updateShoppingLists(data: ShoppingList): Promise<ShoppingList> {
        const res = await this.apiClient.patch<{ data: ShoppingList }, { data: ShoppingList }>(
            `/shoppinglists/${data.id}`,
            {
                data,
            }
        );
        return res.data;
    }

    async createDefaultShoppingList(): Promise<ShoppingList> {
        const attrs: ShoppingListInputAttribute = {
            name: 'default',
            default: true,
            notes: null,
        };
        return this.postShoppingLists({
            type: 'shoppinglists',
            id: '1',
            attributes: attrs,
            relationships: { items: { data: [] } },
        });
    }

    async createShoppingListWithItems(data: ShoppingListWithItems): Promise<ShoppingListWithItems> {
        return this.apiClient.post<ShoppingListWithItems, ShoppingListWithItems>(
            '/shoppinglists',
            data
        );
    }

    async addItemsToShoppingList(
        shoppingListId: string,
        items: ShoppingListItemInput[]
    ): Promise<ShoppingListItem[]> {
        const url = `/shoppinglists/${shoppingListId}/items`;
        const res = await this.apiClient.post<
            { data: ShoppingListItem[] },
            { data: ShoppingListItemInput[] }
        >(url, {
            data: items,
        });
        return res.data;
    }

    async updateItemInShoppingList(updateItem: ShoppingListItem): Promise<ShoppingListItem> {
        const url = `/shoppinglistitems/${updateItem.id}`;
        const res = await this.apiClient.patch<
            { data: ShoppingListItem },
            { data: ShoppingListItem }
        >(url, {
            data: updateItem,
        });
        return res.data;
    }

    async deleteItemInShoppingList(cartItemId: string) {
        const response = await this.apiClient.delete(`/shoppinglistitems/${cartItemId}`);
        return response;
    }

    async deleteShoppingList(shoppingListId: string): Promise<boolean> {
        const response = await this.apiClient.delete(`/shoppinglists/${shoppingListId}`);
        return response;
    }
}
