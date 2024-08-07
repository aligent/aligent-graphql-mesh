import { DocumentNode } from 'graphql';
import * as xray from 'aws-xray-sdk';
import axios, { AxiosRequestConfig } from 'axios';
import { print } from 'graphql';

type ErrorHandler = (error: unknown, label: string) => never;

// Only including mutations and queries as we have not
// tested subscriptions and can't guarantee support for them
const validDocumentTypes = ['mutation', 'query'];

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
    onError: ErrorHandler;
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
        // Valid document should contain *single* query or mutation unless it's has a fragment
        if (
            doc.definitions.filter(
                (d) => d.kind === 'OperationDefinition' && validDocumentTypes.includes(d.operation)
            ).length !== 1
        ) {
            throw new Error('DocumentNode must contain a single query or mutation');
        }

        const definition = doc.definitions[0];

        // Valid document should contain *OperationDefinition*
        if (definition.kind !== 'OperationDefinition') {
            throw new Error('DocumentNode must contain a single query or mutation');
        }

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
