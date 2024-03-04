import { bcGraphQlRequest } from './client';
import { getBrands } from './requests';
import { Brand } from '@aligent/bigcommerce-resolvers';

type BrandNode = {
    node: Brand;
};

export const getBcBrands = async (
    brandImageWidth: number,
    customerImpersonationToken: string
): Promise<Brand[]> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const brandQuery = {
        query: getBrands,
        variables: {
            brandImageWidth,
        },
    };

    const brandArrayAggregator = [];
    let response;

    // Loop through the brand pages collecting the items from each individual page
    while (!response || response.data.site.brands.pageInfo.hasNextPage) {
        if (!response) {
            response = await bcGraphQlRequest(brandQuery, headers);
        } else {
            const {
                brands: {
                    pageInfo: { endCursor },
                },
            } = response.data.site;
            response = await bcGraphQlRequest(
                {
                    ...brandQuery,
                    variables: {
                        brandImageWidth,
                        after: endCursor,
                    },
                },
                headers
            );
        }

        const brandEdges: BrandNode[] = response.data.site.brands.edges;

        brandArrayAggregator.push(...brandEdges.map((brand) => brand.node));
    }

    return brandArrayAggregator;
};
