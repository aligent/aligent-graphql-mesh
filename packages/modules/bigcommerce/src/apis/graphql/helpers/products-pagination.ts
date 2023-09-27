import { SearchProductsFiltersInput } from '@aligent/bigcommerce-operations';
import { getProductsPaginationQuery } from '../requests/products-pagination';
import { fetchAllGraphqlPages } from './pagination';

const DEFAULT_PAGINATION_RESPONSE = { startCursor: '', currentPage: 1 };

export const getProductSearchPagination = async (
    variables: {
        filters: SearchProductsFiltersInput;
    },
    customerImpersonationToken: string,
    pageSize: number,
    requestedPage?: number
): Promise<{
    startCursor: string | null;
    currentPage: number;
}> => {
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

    const responsePages = await fetchAllGraphqlPages(
        graphqlRequest,
        'site.search.searchProducts.products.pageInfo',
        requestedPage
    );

    const cursors = responsePages.reduce((carry, responsePage) => {
        const productCursors =
            responsePage?.site?.search?.searchProducts.products.edges.map(
                (product: { cursor?: string }) => product?.cursor
            ) || [];

        return [...carry, ...productCursors];
    }, []) as string[] | never[];

    const cursorIndex = pageSize * requestedPage - (pageSize + 1);

    const startCursor = cursors[cursorIndex];

    return {
        startCursor,
        currentPage: requestedPage,
    };
};
