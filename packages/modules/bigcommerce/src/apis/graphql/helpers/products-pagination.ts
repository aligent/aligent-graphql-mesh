import {
    SearchProductsFiltersInput,
    SearchProductsSortInput,
} from '@aligent/bigcommerce-operations';
import { getProductsPaginationQuery } from '../requests/products-pagination';
import { graphqlPaginate } from '../client';

const DEFAULT_PAGINATION_RESPONSE = { startCursor: '', currentPage: 1 };

export const getProductSearchPagination = async (
    variables: {
        filters: SearchProductsFiltersInput;
        sort: SearchProductsSortInput;
    },
    customerImpersonationToken: string,
    pageSize: number,
    requestedPage?: number
): Promise<{
    startCursor: string | null;
    currentPage: number;
}> => {
    /* If there's no currentPage or the currentPage is 1, assume we're only fetching the first page.
     * There's no need to fetch pagination data as the products query will return the first page
     * of products with a "null" start cursor.*/
    if (!requestedPage || requestedPage === 1) {
        return DEFAULT_PAGINATION_RESPONSE;
    }

    const graphqlRequest = {
        headers: {
            Authorization: `Bearer ${customerImpersonationToken}`,
        },
        query: getProductsPaginationQuery,
        variables,
    };

    /* Collect all the product cursors up to the requested page number */
    const responsePages = await graphqlPaginate(
        graphqlRequest,
        'site.search.searchProducts.products.pageInfo',
        pageSize,
        requestedPage
    );

    /* Bunch all the product cursors into a single array */
    const cursors = responsePages.reduce((carry, responsePage) => {
        const productCursors =
            responsePage?.site?.search?.searchProducts.products.edges.map(
                (product: { cursor?: string }) => product?.cursor
            ) || [];

        return [...carry, ...productCursors];
    }, []) as string[] | never[];

    /* Works out the index of where the first page cursor will begin */
    const cursorIndex = pageSize * requestedPage - (pageSize + 1);

    const startCursor = cursors[cursorIndex];

    return {
        startCursor,
        currentPage: requestedPage,
    };
};
