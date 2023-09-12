import { InjectionToken, Provider, Scope } from 'graphql-modules';
import { OroCommerceModuleConfig } from '@aligent/orocommerce-graphql-module';
import { ApiClient } from '../apis/rest/client';
import { CustomerClient } from '../apis/rest/customer';
import { Auth } from '../services/auth';

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
            useFactory: (config: OroCommerceModuleConfig) => {
                return config.storeUrl;
            },
            deps: [ModuleConfig],
            scope: Scope.Singleton,
        },
        {
            useClass: ApiClient,
            provide: ApiClient,
            deps: [StoreUrl, Auth],
            scope: Scope.Operation,
        },
        {
            useClass: CustomerClient,
            provide: CustomerClient,
            deps: [ApiClient],
            scope: Scope.Operation,
        },
    ];
};
