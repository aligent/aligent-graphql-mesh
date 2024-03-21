import { InjectionToken, Provider, Scope } from 'graphql-modules';
import { getTransformers } from '../transformers';
import { getServices } from '../services';
import { getClients } from '../apis';
import { ModuleConfig } from '../index';
import { ModuleConfig as BigcommerceModuleConfig } from '@aligent/bigcommerce-graphql-module';

export const ModuleConfigToken = new InjectionToken<ModuleConfig>(
    'Configuration for the authentication GraphQL Module'
);

export const getProviders = (config: ModuleConfig): Array<Provider> => {
    return [
        {
            provide: ModuleConfigToken,
            useValue: config,
            scope: Scope.Singleton,
        },
        {
            provide: BigcommerceModuleConfig,
            useValue: config,
            scope: Scope.Singleton,
        },
        ...getTransformers(),
        ...getClients(),
        ...getServices(),
    ];
};
