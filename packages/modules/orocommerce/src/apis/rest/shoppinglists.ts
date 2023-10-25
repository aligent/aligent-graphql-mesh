import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { ShoppingList } from '../../types';

@Injectable()
export class ShoppingListsClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getShoppingLists() {
        return this.apiClient.get<ShoppingList[]>('/shoppinglists');
    }

    async postShoppingLists(data: ShoppingList) {
        return this.apiClient.post<{ data: ShoppingList }, { data: ShoppingList }>('/shoppinglists', {
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
}
