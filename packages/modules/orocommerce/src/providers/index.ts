import { InjectionToken, Provider, Scope } from 'graphql-modules';
import { OroCommerceModuleConfig } from '../index';
import { ApiClient } from '../apis/rest/client';
import { CustomerClient } from '../apis/rest/customer';
import { CountryClient } from '../apis/rest/country-client';
import { CountryTransformer } from '../transformers/country/country-transformer';
import { ShoppingListsClient } from '../apis/rest/shoppinglists';
import { Auth } from '../services/auth';
import { CurrencyClient } from '../apis/rest/currency';
import { KeyMessagesClient } from '../apis/rest/key-messages-api-client';
import { StoreLocationClient } from '../apis/rest/store-location-api-client';
import { CmsBlockClient } from '../apis/rest/cms-blocks-api-client';
import { CategoriesClient } from '../apis/rest/category-client';
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
            useClass: CountryClient,
            provide: CountryClient,
            deps: [ApiClient],
            scope: Scope.Operation,
        },
        {
            useClass: CurrencyClient,
            provide: CurrencyClient,
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
            useClass: CountryTransformer,
            provide: CountryTransformer,
            scope: Scope.Operation,
        },
        {
            useClass: ShoppingListsClient,
            provide: ShoppingListsClient,
            deps: [ApiClient],
            scope: Scope.Operation,
        },
        {
            useClass: StoreLocationClient,
            provide: StoreLocationClient,
            deps: [ApiClient],
            scope: Scope.Operation,
        },
        {
            useClass: CmsBlockClient,
            provide: CmsBlockClient,
            deps: [ApiClient],
            scope: Scope.Operation,
        },
        {
            useClass: CategoriesClient,
            provide: CategoriesClient,
            deps: [ApiClient],
            scope: Scope.Operation,
        },
        ...getOroTransformers(),
    ];
};
