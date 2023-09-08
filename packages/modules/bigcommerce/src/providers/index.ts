import { InjectionToken, Provider, Scope } from 'graphql-modules';
import { BigCommerceModuleConfig } from '@aligent/bigcommerce-graphql-module';
import { Sdk, getSdk } from '@aligent/bigcommerce-operations';
import { GraphQLClient } from 'graphql-request';

export const ModuleConfig = new InjectionToken<BigCommerceModuleConfig>(
    'Configuration for the BigCommerce GraphQL Module'
);
export const BigCommerceSdk = new InjectionToken<Sdk>('');

export const getProviders = (config: BigCommerceModuleConfig): Array<Provider> => {
    return [
        {
            provide: ModuleConfig,
            useValue: config,
            scope: Scope.Singleton,
            global: true,
        },
        {
            provide: BigCommerceSdk,
            useFactory: (config: BigCommerceModuleConfig) => {
                return getSdk(new GraphQLClient(config.graphqlEndpoint));
            },
            deps: [ModuleConfig],
            global: true,
        },
    ];
};
