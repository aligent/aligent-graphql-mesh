import { bcGraphQlRequest } from '../client';
import { AxiosGraphqlError, logAndThrowError } from '@aligent/utils';
import { get } from 'lodash';

export const fetchAllGraphqlPages = async (
    graphqlRequest: {
        headers: { Authorization: string };
        query: string;
        variables: { [key: string]: any };
    },
    pathPaginationData: string,
    requestedPage?: number
) => {
    const { headers, query, variables } = graphqlRequest;

    const responses = [];

    for await (const pageInfo of fetchPaginatedGraphQLData(
        { query, variables, headers },
        pathPaginationData,
        requestedPage
    )) {
        responses.push(pageInfo);
    }

    return responses;
};

async function* fetchPaginatedGraphQLData(
    graphqlRequest: {
        headers: { Authorization: string };
        query: string;
        variables: { [key: string]: any };
    },
    pathPaginationData: string,
    requestedPage?: number
) {
    const { headers, query, variables } = graphqlRequest;

    let hasNextPage = true;
    let currentEndCursor = null;
    let page = 1;

    while (
        (requestedPage && page <= requestedPage + 1 && hasNextPage) ||
        (!requestedPage && hasNextPage)
    ) {
        const requestQuery = {
            query,
            variables: { ...variables, first: 50, after: currentEndCursor },
        };

        const response = await bcGraphQlRequest(requestQuery, headers);

        const { data, errors } = response;

        if (errors) {
            logAndThrowError(response.errors);
        }

        const pageInfo = get(data, pathPaginationData);

        if (!pageInfo) {
            throw new AxiosGraphqlError('Could not find pageInfo');
        }

        const newEndCursor = pageInfo.endCursor;

        /* Safeguard against infinite loops */
        if (newEndCursor === currentEndCursor) {
            throw new AxiosGraphqlError(`GraphQL request errors: Duplicate cursors`);
        }

        yield data;

        hasNextPage = pageInfo.hasNextPage;
        currentEndCursor = newEndCursor;
        page++;
    }
}
