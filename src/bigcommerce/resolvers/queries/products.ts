import { Products, QueryResolvers } from '@mesh';
import {
    getTransformedProductData,
    getTransformedProductsData,
} from '../../factories/transform-products-data';
import { getBcProductByPathGraphql } from '../../apis/graphql/pdp-product';
import { getBcProductsGraphql } from '../../apis/graphql/product';

import { atob, getIncludesTax, getPathFromUrlKey } from '../../../utils';
import { getBcAvailableProductFilters } from '../../apis/graphql/available-product-search-filters';
import { getTransformedProductArgs } from '../../factories/helpers/transform-product-search-arguments';
import { getTaxSettings } from '../../apis/graphql/settings';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';

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

            /* These base filters will help the "getBcAvailableProductFilters" get the available filters for search and
             * category pages
             * */
            const availableProductFiltersVariables = {
                ...(categoryEntityId && { categoryEntityId: Number(categoryEntityId) }),
                ...(searchTerm && { searchTerm: searchTerm }),
            };

            const availableBcProductFilters = await getBcAvailableProductFilters(
                availableProductFiltersVariables
            );
            const transformedFilterArguments = getTransformedProductArgs(
                args,
                availableBcProductFilters
            );

            const bcProducts = await getBcProductsGraphql(
                {
                    includeTax: getIncludesTax(taxSettings?.plp),
                    filters: transformedFilterArguments,
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
