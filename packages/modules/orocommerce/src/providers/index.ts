import { InjectionToken, Provider, Scope } from 'graphql-modules';
import { OroCommerceModuleConfig } from '@aligent/orocommerce-graphql-module';
import { ApiClient } from '../apis/rest/client';
import { CustomerClient } from '../apis/rest/customer';
import { ShoppingListsClient } from '../apis/rest/shoppinglists';
import { Auth } from '../services/auth';
import { KeyMessagesClient } from '../apis/rest/key-messages-api-client';
import { CmsBlocksClient } from '../apis/rest/cms-blocks-api-client';
import { getOroTransformers } from '../transformers';

export const ModuleConfig = new InjectionToken<OroCommerceModuleConfig>(
    'Configuration for the OroCommerce GraphQL Module'
);

export const StoreUrl = new InjectionToken<string>('URL for the OroCommerce Storefront');

export const getProviders = (config: OroCommerceModuleConfig): Array<Provider> => {
    return [
        {
            provide: ModuleConfig,
            useValue: config,
            scope: Scope.Singleton,
        },
        {
            provide: StoreUrl,
            useValue: config.storeUrl,
            scope: Scope.Singleton,
        },
        {
            useClass: Auth,
            provide: Auth,
            deps: [ModuleConfig],
            scope: Scope.Operation,
        },
        {
            useClass: ApiClient,
            provide: ApiClient,
            scope: Scope.Operation,
        },
        {
            useClass: CustomerClient,
            provide: CustomerClient,
            deps: [ApiClient],
            scope: Scope.Operation,
        },
        {
            useClass: KeyMessagesClient,
            provide: KeyMessagesClient,
            deps: [ApiClient],
            scope: Scope.Operation,
        },
        {
            useClass: ShoppingListsClient,
            provide: ShoppingListsClient,
            deps: [ApiClient],
            scope: Scope.Operation,
        },
        {
            useClass: CmsBlocksClient,
            provide: CmsBlocksClient,
            deps: [ApiClient],
            scope: Scope.Operation,
        },
        ...getOroTransformers(),
    ];
};
