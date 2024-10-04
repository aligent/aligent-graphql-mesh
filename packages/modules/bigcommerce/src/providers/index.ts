import { InjectionToken, Provider, Scope } from 'graphql-modules';
import { BigCommerceModuleConfig } from '../index';
import { getSdk } from '@aligent/bigcommerce-operations';
import { logAndThrowError, requesterFactory } from '@aligent/utils';
import { Get, Paths } from 'type-fest';

export const ModuleConfig = new InjectionToken<BigCommerceModuleConfig>(
    'Configuration for the BigCommerce GraphQL Module'
);

/**
 * Generates a BigCommerce GraphQl SDK based on operations
 * and configuration defined in this module
 */
const sdkFactory = (config: BigCommerceModuleConfig) =>
    getSdk(
        requesterFactory({
            name: 'bcGraphQlRequest',
            graphqlEndpoint: config.graphqlEndpoint,
            timeout: {
                milliseconds: 10_000,
                message: 'BigCommerce GraphQL request timed out',
            },
            onError: logAndThrowError,
        })
    );

/**
 * Types for the injectable BigCommerce GraphQl SDK
 *
 * Available calls, variables, and return types are derived from
 * GraphQl operations defined in this module
 */
export type BcSdk = ReturnType<typeof sdkFactory>;

/**
 * Injection token for the BigCommerce GraphQl SDK
 *
 * Available calls, variables, and return types are derived from
 * GraphQl operations defined in this module
 *
 * @example
 * import { BigCommerceSdk } from '../../providers';
 *
 * const bcSdk = context.injector.get(BigCommerceSdk);
 * response = await bcSdk.getBrands(variables, headers);
 */
export const BigCommerceSdk = new InjectionToken<BcSdk>(
    'Sdk for making GraphQL calls to BigCommerce'
);

/**
 * Utility type to assist with getting a deeply nested type by path
 *
 * Limited path autocompletion is provided and the return type is
 * always non-nullable
 *
 * @example
 * type BcBrandNode = GetProperty<GetBrandsQuery, 'site.brands.edges.0.node'>
 * =>
 * // type BcBrandNode = {
 * //  __typename?: "Brand";
 * //  id: string;
 * //  ...
 * // }
 */
export type GetProperty<T, Path extends Paths<T>> = NonNullable<Get<T, `${Path}`>>;

/**
 * Dependency injection setup for GraphQl Modules
 * See documentation for more details:
 * https://the-guild.dev/graphql/modules/docs/di/providers
 */
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
            useFactory: sdkFactory,
            deps: [ModuleConfig],
            global: true,
        },
    ];
};
