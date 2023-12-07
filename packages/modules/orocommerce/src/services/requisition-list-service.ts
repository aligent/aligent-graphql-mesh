import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ShoppingListsClient } from '../apis/rest/shopping-list-api-client';
import { ShoppingListsWithItems } from '../types';
import { Transformer } from '@aligent/utils';
import { isNull } from 'lodash';
import { RequisitionLists } from '@aligent/orocommerce-resolvers';
import { ShoppingListsToRequisitionListsTransformer } from '../transformers/shopping-list/shopping-lists-to-requisition-lists-transformer';

@Injectable()
export class RequisitionListService {
    constructor(
        @Inject(forwardRef(() => ShoppingListsClient))
        protected readonly apiClient: ShoppingListsClient,

        @Inject(forwardRef(() => ShoppingListsToRequisitionListsTransformer))
        protected readonly shoppingListsToRequisitionListsTransformer: Transformer<
            ShoppingListsWithItems,
            RequisitionLists
        >
    ) {}

    /**
     * Get the user's RequisitionLists.
     * @returns Promise<RequisitionLists | null>
     */
    async getLists(): Promise<RequisitionLists | null> {
        const { data, included } = await this.apiClient.getShoppingListsWithItems();
        if (isNull(data)) {
            return null;
        }

        return this.shoppingListsToRequisitionListsTransformer.transform({
            data: {
                data: data,
                included: included!,
            },
        });
    }
}
