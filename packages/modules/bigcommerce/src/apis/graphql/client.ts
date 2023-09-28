/* istanbul ignore file */

import axios, { AxiosResponse } from 'axios';
import { get } from 'lodash';
import { GraphQlQuery } from '../../types';
import { AxiosGraphqlError, logAndThrowError } from '@aligent/utils';

const BC_GRAPHQL_API = process.env.BC_GRAPHQL_API as string;

/* This is the maximum page size for graphql queries*/
const PAGINATOR_PAGE_SIZE = 50;

// TODO: generic return type
export const bcGraphQlRequest = async (
    data: GraphQlQuery,
    headers: { Authorization: string }
): Promise<AxiosResponse['data']> => {
    try {
        const response = await axios.post(BC_GRAPHQL_API, data, { headers });
        return response.data;
    } catch (error) {
        return logAndThrowError(error, bcGraphQlRequest.name);
    }
};

/**
 * Fetches all the pages for a specific graphql query
 *
 * @param graphqlRequest
 * @param pathToPaginationData - The path to where the pagination pageInfo can be found in a request response
 * @param pageSize
 * @param requestedPage - The page we want to reach
 */
export const graphqlPaginate = async (
    graphqlRequest: {
        headers: { Authorization: string };
        query: string;
        variables: { [key: string]: any };
    },
    pathToPaginationData: string,
    pageSize?: number,
    requestedPage?: number
) => {
    const { headers, query, variables } = graphqlRequest;

    const responses = [];

    for await (const pageInfo of fetchPaginatedGraphQLData(
        { query, variables, headers },
        pathToPaginationData,
        pageSize,
        requestedPage
    )) {
        responses.push(pageInfo);
    }

    return responses;
};

/**
 * The generation function to fetch all pages of a graphql query
 * @param graphqlRequest
 * @param pathToPaginationData - The path to where the pagination pageInfo can be found in a request response
 * @param pageSize
 * @param requestedPage - The page we want to reach. If specified we only request up to this page number
 */
async function* fetchPaginatedGraphQLData(
    graphqlRequest: {
        headers: { Authorization: string };
        query: string;
        variables: { [key: string]: any };
    },
    pathToPaginationData: string,
    pageSize: number = 24,
    requestedPage: number = 0
) {
    const { headers, query, variables } = graphqlRequest;

    /* Since we want to request the maximum page size we can when fetching paginated data, we want
     * calculate how many pages that is from the page size and page information passed to this function.
     *
     * If we're on the PLP which has a pageSize of 24, and we ask for page 3,
     * that works out to be 72 products. Now we have work out how many times 72 goes in to the max
     * paginate page size of 50 we want to query. 72 goes into 50 1.44 times, so when we round up it
     * becomes 2 pages. This means we will make 2 iterations to get all the page information we require
     * and we don't have to iterate past 2
     *  */
    const iterationToStop = Math.ceil((pageSize * requestedPage) / PAGINATOR_PAGE_SIZE) + 1;

    let endCursor = '';
    let page = 1;

    while (endCursor !== null && (!requestedPage || (requestedPage && page < iterationToStop))) {
        const requestQuery = {
            query,
            variables: { ...variables, first: PAGINATOR_PAGE_SIZE, after: endCursor },
        };

        const response = await bcGraphQlRequest(requestQuery, headers);

        const { data, errors } = response;

        if (errors) {
            logAndThrowError(response.errors);
        }

        const pageInfo = get(data, pathToPaginationData);

        if (!pageInfo) {
            throw new AxiosGraphqlError('Could not find pageInfo');
        }

        const newEndCursor = pageInfo.endCursor;

        /* Safeguard against infinite loops */
        if (newEndCursor === endCursor) {
            throw new AxiosGraphqlError(`GraphQL request errors: Duplicate cursors`);
        }

        yield data;

        endCursor = pageInfo.hasNextPage ? newEndCursor : null;
        page++;
    }
}
