import { Provider, Scope } from 'graphql-modules';
import { Auth, CartService, CheckoutService, ShoppingListService } from './';
import { CheckoutsClient, CheckoutSourcesClient, ShoppingListsClient } from '../apis/rest';
import { ModuleConfig } from '../providers';
import {
    OrderLineItemToShoppingListItemTransformer,
    OrderLineItemsToNewShoppingListTransformer,
    ShoppingListToCartTransformer,
    ShoppingListToRequisitionListTransformer,
} from '../transformers';
import { RequisitionListService } from './requisition-list-service';

export * from './auth';
export * from './checkouts';
export * from './cart-service';
export * from './shopping-list-service';

export const getOroServices = (): Array<Provider> => {
    return [
        {
            useClass: Auth,
            provide: Auth,
            deps: [ModuleConfig],
            scope: Scope.Operation,
        },
        {
            useClass: CartService,
            provide: CartService,
            deps: [ShoppingListsClient, ShoppingListToCartTransformer],
            scope: Scope.Operation,
        },
        {
            useClass: CheckoutService,
            provide: CheckoutService,
            deps: [CheckoutSourcesClient, CheckoutsClient],
            scope: Scope.Operation,
        },
        {
            useClass: ShoppingListService,
            provide: ShoppingListService,
            deps: [
                ShoppingListsClient,
                OrderLineItemsToNewShoppingListTransformer,
                OrderLineItemToShoppingListItemTransformer,
            ],
            scope: Scope.Operation,
        },
        {
            useClass: RequisitionListService,
            provide: RequisitionListService,
            deps: [ShoppingListsClient, ShoppingListToRequisitionListTransformer],
            scope: Scope.Operation,
        },
    ];
};
