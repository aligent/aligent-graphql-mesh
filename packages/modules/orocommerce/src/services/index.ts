import { Provider, Scope } from 'graphql-modules';
import { CartService } from './cart-service';
import { ShoppingListsClient } from '../apis/rest';
import { ShoppingListService } from './shopping-list-service';
import { Auth } from './auth';
import { ModuleConfig } from '../providers';

export * from './auth';
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
            deps: [ShoppingListsClient],
            scope: Scope.Operation,
        },
        {
            useClass: ShoppingListService,
            provide: ShoppingListService,
            deps: [ShoppingListsClient],
            scope: Scope.Operation,
        },
    ];
};
