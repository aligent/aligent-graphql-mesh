import { InjectionToken, Provider, Scope } from 'graphql-modules';
import { BigCommerceModuleConfig } from '@aligent/bigcommerce-graphql-module';

export const ModuleConfig = new InjectionToken<BigCommerceModuleConfig>(
    'Configuration for the BigCommerce GraphQL Module'
);

export const getProviders = (config: BigCommerceModuleConfig): Array<Provider> => {
    return [
        {
            provide: ModuleConfig,
            useValue: config,
            scope: Scope.Singleton,
        },
    ];
};
