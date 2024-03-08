import { bcGraphQlRequest } from './client';
import { getBrands } from './requests';
import { transformBrands } from '../../factories/helpers/transform-metafields';
import { Brand, QueryBrandsArgs } from '@aligent/bigcommerce-resolvers';

export const getAllBrands = async (
    variables: QueryBrandsArgs,
    customerImpersonationToken: string
): Promise<Brand[]> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const brandQuery = {
        query: getBrands,
        variables,
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
                        ...variables,
                        after: endCursor,
                    },
                },
                headers
            );
        }

        const brandEdges = response.data.site.brands;

        const transformedBrands = transformBrands(brandEdges);

        brandArrayAggregator.push(...transformedBrands);
    }

    return brandArrayAggregator;
};
