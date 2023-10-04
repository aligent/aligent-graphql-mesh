import { Products, QueryResolvers } from '@aligent/bigcommerce-resolvers';
import {
    getTransformedProductData,
    getTransformedProductsData,
} from '../../factories/transform-products-data';
import { getBcProductByPathGraphql } from '../../apis/graphql';
import { getBcProductSearchGraphql } from '../../apis/graphql';

import { getBcAvailableProductFilters } from '../../apis/graphql';
import { getTransformedProductArgs } from '../../factories/helpers/transform-product-search-arguments';
import { getTaxSettings } from '../../apis/graphql';
import { logAndThrowError, atob, getIncludesTax, getPathFromUrlKey } from '@aligent/utils';

export const productsResolver: QueryResolvers['products'] = {
    resolve: async (_root, args, context, _info): Promise<Products | null> => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
        const taxSettings = await getTaxSettings(customerImpersonationToken);

        try {
            const url_key = getPathFromUrlKey(args.filter?.url_key?.eq || null);

            // The PDP passes an "url_key" arg, so if we see this then get product information from Big Commerces "site.route.product" query
            // as it's the only query that accepts a "path". "path" is based on the "url_key" but with a "/" in the front of it.
            if (url_key) {
                const bcProduct = await getBcProductByPathGraphql(
                    {
                        includeTax: getIncludesTax(taxSettings?.pdp),
                        path: url_key,
                    },
                    customerImpersonationToken
                );

                if (!bcProduct) return null;
                return { items: [getTransformedProductData(bcProduct)] };
            }

            const categoryEntityId = atob(args?.filter?.category_uid?.eq || '');
            const searchTerm = args?.search || '';
            const pageSize = args?.pageSize || 24;

            /* These base filters will help the "getBcAvailableProductFilters" get the available filters for search and
             * category pages
             * */
            const availableProductFiltersVariables = {
                ...(categoryEntityId && { categoryEntityId: Number(categoryEntityId) }),
                ...(searchTerm && { searchTerm: searchTerm }),
            };

            const availableBcProductFilters = await getBcAvailableProductFilters(
                availableProductFiltersVariables,
                customerImpersonationToken
            );
            const transformedFilterArguments = getTransformedProductArgs(
                args,
                availableBcProductFilters
            );

            const bcProducts = await getBcProductSearchGraphql(
                {
                    includeTax: getIncludesTax(taxSettings?.plp),
                    filters: transformedFilterArguments,
                    pageSize,
                },
                customerImpersonationToken
            );

            if (!bcProducts) return null;

            return getTransformedProductsData(bcProducts);
        } catch (error) {
            return logAndThrowError(error);
        }
    },
};
