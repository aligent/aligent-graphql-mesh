import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ShoppingListsClient } from '../apis/rest/shopping-list-api-client';
import { ShoppingListWithItems, ShoppingListsWithItems } from '../types';
import { Transformer } from '@aligent/utils';
import { RequisitionList, RequisitionLists } from '@aligent/orocommerce-resolvers';
import { ShoppingListsToRequisitionListsTransformer } from '../transformers/shopping-list/shopping-lists-to-requisition-lists-transformer';
import { ShoppingListService } from './shopping-list-service';
import { ShoppingListToRequisitionListTransformer } from '../transformers/shopping-list/shopping-list-to-requisition-list-transformer';

const UNDEFINED_REQUISITION_LIST: RequisitionList = {
    description: '',
    items: null,
    items_count: 0,
    name: '',
    uid: '',
};

@Injectable({
    global: true,
})
export class RequisitionListService {
    constructor(
        @Inject(forwardRef(() => ShoppingListService))
        protected shoppingListService: ShoppingListService,

        @Inject(forwardRef(() => ShoppingListsClient))
        protected readonly shoppingListsClient: ShoppingListsClient,

        @Inject(forwardRef(() => ShoppingListsToRequisitionListsTransformer))
        protected readonly shoppingListsToRequisitionListsTransformer: Transformer<
            ShoppingListsWithItems,
            RequisitionLists
        >,

        @Inject(forwardRef(() => ShoppingListToRequisitionListTransformer))
        protected readonly requisitionListTransformer: Transformer<
            ShoppingListWithItems,
            RequisitionList
        >
    ) {}

    /**
     * Get the user's RequisitionLists.
     * @returns Promise<RequisitionLists | null>
     */
    async getLists(): Promise<RequisitionLists | null> {
        const shoppingListsWithItems = await this.shoppingListsClient.getShoppingListsWithItems();

        return this.shoppingListsToRequisitionListsTransformer.transform({
            data: shoppingListsWithItems,
        });
    }

    /**
     * The purpose of this method is to return a populated requisition list with relevant/up-to-date data containing all items etc
     * @param shoppingListOrId ShoppingListWithItems | string
     * @returns Promise<RequisitionList>
     */
    async getList(shoppingListOrId: ShoppingListWithItems | string): Promise<RequisitionList> {
        if (typeof shoppingListOrId === 'string') {
            const shoppingListWithItems =
                await this.shoppingListService.getShoppingListWithItems(shoppingListOrId);

            if (!shoppingListWithItems) {
                return UNDEFINED_REQUISITION_LIST;
            }

            return this.requisitionListTransformer.transform({ data: shoppingListWithItems });
        }

        return this.requisitionListTransformer.transform({ data: shoppingListOrId });
    }
}
