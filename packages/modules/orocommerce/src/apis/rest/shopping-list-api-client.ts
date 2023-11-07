import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import {
    ShoppingList,
    ShoppingListInputAttribute,
    ShoppingListItem,
    ShoppingListItemInput,
    ShoppingListWithItems,
} from '../../types';

@Injectable()
export class ShoppingListsClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getShoppingLists(): Promise<ShoppingList[]> {
        return (await this.apiClient.get<ShoppingList[]>('/shoppinglists')).data;
    }

    async getShoppingListsWithItems(): Promise<{
        data: ShoppingList[];
        included?: ShoppingListItem[];
    }> {
        const params = {
            include: 'items',
        };
        return this.apiClient.get<ShoppingList[], ShoppingListItem[]>('/shoppinglists', { params });
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

    async createDefaultShoppingList(): Promise<ShoppingList> {
        const attrs: ShoppingListInputAttribute = {
            name: 'default',
            default: true,
            notes: null
        }
        return this.postShoppingLists({
            type: 'shoppinglists',
            id: '1',
            attributes: attrs,
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
        items: ShoppingListItemInput[]
    ): Promise<ShoppingListItem[]> {
        const url = `/shoppinglists/${shoppingList.id}/items`;
        const res = await this.apiClient.post<
            { data: ShoppingListItem[] },
            { data: ShoppingListItemInput[] }
        >(url, {
            data: items,
        });
        return res.data;
    }
}
