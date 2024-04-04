import { Product, SiteRouteArgs } from '@aligent/bigcommerce-operations';
import { graphqlPaginate } from './client';
import { getPdpProductQuery } from './requests/pdp-product';

export const getBcProductByPathGraphql = async (
    variables: SiteRouteArgs & { includeTax?: boolean; namespace?: string | null },
    customerImpersonationToken: string,
    pageSize?: number,
    requestedPage?: number
): Promise<Product> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const productQuery = {
        headers,
        query: getPdpProductQuery,
        variables: {
            ...variables,
            namespace: variables.namespace || 'custom_attributes', //namespace is a required arg for querying product metafields
        },
    };

    const responsePages = await graphqlPaginate(
        productQuery,
        'site.route.node.variants.pageInfo',
        pageSize,
        requestedPage
    );

    const productWithCombinedVariants: Product = responsePages.reduce((carry, responsePage) => {
        const product = responsePage.site.route.node;
        return {
            ...product,
            variants: {
                edges: [
                    ...(carry?.edges || []),
                    ...(responsePage?.site?.route?.node?.variants?.edges || []),
                ],
            },
        };
    }, {});

    return productWithCombinedVariants;
};
