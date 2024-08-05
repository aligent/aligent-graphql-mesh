import { DocumentNode } from 'graphql';
import * as xray from 'aws-xray-sdk';

import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { print } from 'graphql';

const validDocDefOps = ['mutation', 'query', 'subscription'];

export function getAxiosRequester(
    client: AxiosInstance,
    onError: (error: unknown, label: string) => never
) {
    const requester = async <R, V>(
        doc: DocumentNode,
        variables: V,
        options?: AxiosRequestConfig
    ): Promise<R> => {
        // Valid document should contain *single* query or mutation unless it's has a fragment
        if (
            doc.definitions.filter(
                (d) => d.kind === 'OperationDefinition' && validDocDefOps.includes(d.operation)
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
            return onError(error, getAxiosRequester.name);
        }
    };

    return requester;
}
