import { InjectionToken, Provider, Scope } from 'graphql-modules';
import { BigCommerceModuleConfig } from '../index';
import { getSdk, Sdk } from '@aligent/bigcommerce-operations';
import axios from 'axios';
import { getAxiosRequester } from './axios-requester';
import { logAndThrowError } from '@aligent/utils';

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
                const client = axios.create({
                    baseURL: config.graphqlEndpoint,
                    headers: {
                        accept: 'application/json',
                    },
                    timeout: 10000,
                    timeoutErrorMessage: 'BigCommerce GraphQL request timed out',
                    signal: AbortSignal.timeout(10000),
                });

                const requester = getAxiosRequester(client, logAndThrowError);
                return getSdk(requester);
            },
            deps: [ModuleConfig],
            global: true,
        },
    ];
};
