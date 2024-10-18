import { DocumentNode, Kind } from 'graphql';
import * as xray from 'aws-xray-sdk';
import axios, { AxiosRequestConfig } from 'axios';
import { print } from 'graphql';
import { ExecutionContext, Inject, Injectable, forwardRef } from 'graphql-modules';
import { ModuleConfig } from '..';
import { BigCommerceModuleConfig, retrieveCustomerImpersonationTokenFromCache } from '../';
import { getSdk } from '@aligent/bigcommerce-operations';
import { logAndThrowError } from '@aligent/utils';

/* eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-unsafe-declaration-merging --
 * This interface tells typescript that the class BigCommerceGraphQlClient will have all the methods
 * and properties of the object returned by getSdk.
 *
 * Technically this is unsafe because Typescript won't check that we actually initialise those properties, but
 * it's the only way I could find to get Typescript to understand the shape of the class with the SDK methods
 * dynamically added to it.
 */
export interface BigCommerceGraphQlClient extends ReturnType<typeof getSdk> {}

/**
 * Class for making BigCommerce GraphQL requests
 *
 * This abstracts the axios and xray specific implementation details, and also
 * automatically injects the customerImpersonationToken from the request context
 *
 * @example
 * import { BigCommerceGraphQlClient } from '../../clients/big-commerce-graphql-client';
 *
 * const bigCommerce = context.injector.get(BigCommerceGraphQlClient);
 * const response = await bigCommerce.getBrands(variables);
 */
@Injectable({ global: true })
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class BigCommerceGraphQlClient {
    @ExecutionContext() private context: ExecutionContext;

    constructor(@Inject(forwardRef(() => ModuleConfig)) private config: BigCommerceModuleConfig) {
        const timeout = {
            milliseconds: 10_000,
            message: 'BigCommerce GraphQL request timed out',
        };
        // The connection timeout should be slightly longer to
        // allow servers to respond with a timeout failure before
        // we directly cancel a connection
        const connectionTimeout = timeout.milliseconds + 50;

        const client = axios.create({
            baseURL: config.graphqlEndpoint,
            headers: {
                accept: 'application/json',
            },
            timeout: timeout.milliseconds,
            timeoutErrorMessage: timeout.message,
        });

        const requester = async <R, V>(
            doc: DocumentNode,
            variables: V,
            options?: AxiosRequestConfig
        ): Promise<R> => {
            const operationName =
                doc.definitions.find((d) => d.kind === Kind.OPERATION_DEFINITION)?.name?.value ||
                'Unknown Operation';

            try {
                const customerImpersonationToken =
                    await retrieveCustomerImpersonationTokenFromCache(this.context);
                const authHeaders = { Authorization: `Bearer ${customerImpersonationToken}` };

                const data = {
                    query: print(doc),
                    variables,
                };

                const requestOptions = {
                    signal: AbortSignal.timeout(connectionTimeout),
                    ...options,
                    headers: {
                        ...options?.headers,
                        ...authHeaders,
                    },
                };

                const response = await xray.captureAsyncFunc(
                    'BigCommerceGraphQl',
                    async (segment) => {
                        // Add query annotation to axios request
                        segment?.addAnnotation('query', data.query);
                        const response = await client.post<R>('', data, requestOptions);
                        segment?.close();
                        return response;
                    }
                );

                return response.data;
            } catch (error: unknown) {
                return logAndThrowError(error, operationName);
            }
        };

        const sdk = getSdk(requester);
        Object.assign(this, sdk);
    }
}
