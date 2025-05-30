import { DocumentNode } from 'graphql';
import * as xray from 'aws-xray-sdk';
import axios, { AxiosRequestConfig } from 'axios';
import { print } from 'graphql';

/**
 * Factory to generate requester for passing to codegen getSDK functions
 *
 * This abstracts the axios and xray specific implementation details, requiring
 * consumers to pass in only generic configuration options.
 *
 * The return type matches that required for SDK code generated by the codegen
 * generic-sdk plugin, but it can also be used as a standalone GraphQL client
 *
 * @example
 * // Usage with generated BigCommerce SDK
 * const sdkFactory = (config: BigCommerceModuleConfig) =>
 *  getSdk(
 *      requesterFactory({
 *          name: 'bcGraphQlRequest',
 *          graphqlEndpoint: config.graphqlEndpoint,
 *          timeout: {
 *              milliseconds: 10_000,
 *              message: 'BigCommerce GraphQL request timed out',
 *          },
 *          onError: logAndThrowError,
 *      })
 *  );
 */
export const requesterFactory = (config: {
    name: string;
    graphqlEndpoint: string;
    timeout: { milliseconds: number; message: string };
    onError: (error: unknown, label: string) => never;
}) => {
    // The connection timeout should be slightly longer to
    // allow servers to respond with a timeout failure before
    // we directly cancel a connection
    const connectionTimeout = config.timeout.milliseconds + 50;

    const client = axios.create({
        baseURL: config.graphqlEndpoint,
        headers: {
            accept: 'application/json',
        },
        timeout: config.timeout.milliseconds,
        timeoutErrorMessage: config.timeout.message,
    });

    const requester = async <R, V>(
        doc: DocumentNode,
        variables: V,
        options?: AxiosRequestConfig
    ): Promise<R> => {
        const data = {
            query: print(doc),
            variables,
        };

        try {
            const response = await xray.captureAsyncFunc(config.name, async (segment) => {
                // Add query annotation to axios request
                segment?.addAnnotation('query', data.query);
                const response = await client.post<R>('', data, {
                    signal: AbortSignal.timeout(connectionTimeout),
                    ...options,
                });
                segment?.close();
                return response;
            });

            return response.data;
        } catch (error: unknown) {
            return config.onError(error, requesterFactory.name);
        }
    };

    return requester;
};
