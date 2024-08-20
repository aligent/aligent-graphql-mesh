import { DocumentNode } from 'graphql';
import * as xray from 'aws-xray-sdk';
import axios, { AxiosRequestConfig } from 'axios';
import { print } from 'graphql';

/**
 * Factory to generate requester for passing to codegen getSDK functions
 *
 * This abstracts the axios specific implementation details, requiring
 * consumers to pass in only generic configuration options. It also allows
 * the consumer to choose a different getSDK function to the one packaged with
 * this module.
 */
export const requesterFactory = (config: {
    graphqlEndpoint: string;
    timeout: { seconds: number; message: string };
    onError: (error: unknown, label: string) => never;
}) => {
    const client = axios.create({
        baseURL: config.graphqlEndpoint,
        headers: {
            accept: 'application/json',
        },
        timeout: config.timeout.seconds,
        timeoutErrorMessage: config.timeout.message,
        signal: AbortSignal.timeout(config.timeout.seconds),
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
            const response = await xray.captureAsyncFunc('bcGraphQlRequest', async (segment) => {
                // Add query annotation to axios request
                segment?.addAnnotation('query', data.query);
                const response = await client.post<R>('', data, options);
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
