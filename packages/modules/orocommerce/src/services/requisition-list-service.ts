import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ShoppingListsClient } from '../apis/rest/shopping-list-api-client';
import { ShoppingListWithItems } from '../types';
import { Transformer } from '@aligent/utils';
import { isNull } from 'lodash';
import { ShoppingListWithItemsToRequisitionListTransformer } from '../transformers/shopping-list/shopping-list-with-items-to-requisition-list-transformer';
import { RequisitionList, RequisitionLists } from '@aligent/orocommerce-resolvers';

@Injectable()
export class RequisitionListService {
    constructor(
        @Inject(forwardRef(() => ShoppingListsClient))
        protected readonly apiClient: ShoppingListsClient,

        @Inject(forwardRef(() => ShoppingListWithItemsToRequisitionListTransformer))
        protected readonly shoppingListWithItemsToRequisitionListTransformer: Transformer<
            ShoppingListWithItems,
            RequisitionList
        >
    ) {}

    /**
     * Get the user's shopping list. We're assuming that users will always have a maximum of one shopping list
     * @returns Promise<ShoppingList | null>
     */
    async getLists(): Promise<RequisitionLists | null> {
        const { data, included } = await this.apiClient.getShoppingListsWithItems();
        if (isNull(data)) {
            return null;
        }

        const requisitionLists = data.map((shoppingList) =>
            this.shoppingListWithItemsToRequisitionListTransformer.transform({
                data: {
                    data: shoppingList,
                    included: included!,
                },
            })
        );

        return {
            items: requisitionLists,
            total_count: requisitionLists.length,
        };
    }
}
