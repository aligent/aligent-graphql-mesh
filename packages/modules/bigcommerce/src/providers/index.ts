import { InjectionToken, Provider, Scope } from 'graphql-modules';
import { BigCommerceModuleConfig, getServices } from '../index';
import { Get, Paths } from 'type-fest';
import { BigCommerceGraphQlClient } from '../clients';

export const ModuleConfig = new InjectionToken<BigCommerceModuleConfig>(
    'Configuration for the BigCommerce GraphQL Module'
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
        BigCommerceGraphQlClient,
        ...getServices(),
    ];
};
