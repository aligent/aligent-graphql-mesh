import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { ShoppingList } from '../../types';

@Injectable()
export class ShoppingListsClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getShoppingLists() {
        return this.apiClient.get<ShoppingList[]>('/shoppinglists');
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
