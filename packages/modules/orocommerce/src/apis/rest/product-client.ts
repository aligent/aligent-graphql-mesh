import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import {
    Product,
    ConfigurableProductAttribute,
    ProductSearch,
    ProductIncludeTypes,
    ProductSearchMeta,
} from '../../types';
import {
    QueryProductsArgs,
    ProductAttributeSortInput,
    FilterTypeInput,
} from '@aligent/orocommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { lowerCase } from 'lodash';
import { getIdFromCategoryUid } from '../../utils';

@Injectable()
export class ProductsClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getProductAttributes() {
        const path = `/tf_product_attributes`;
        const response = await this.apiClient.get<ConfigurableProductAttribute[]>(path);
        return response.data;
    }

    // search products by keywords, category
    async searchProducts(
        searchQuery: string,
        aggregations: string,
        pageSize: number,
        currentPage: number,
        sort: string
    ): Promise<{
        data: ProductSearch[];
        included?: ProductIncludeTypes[];
        meta?: ProductSearchMeta;
    }> {
        const path = `/productsearch`;
        const params = {
            ...(searchQuery && { 'filter[searchQuery]': searchQuery }),
            ...(aggregations && { 'filter[aggregations]': aggregations }),
            include: 'product,product.images,category,inventoryStatus',
            'page[number]': currentPage,
            'page[size]': pageSize,
            sort,
        };
        const headers = { 'X-Include': 'totalCount' };
        const response = await this.apiClient.get<ProductSearch[], ProductIncludeTypes[]>(path, {
            params,
            headers,
        });
        return response;
    }

    async getProductBySlug(
        url: string
    ): Promise<{ data: Product[]; included?: ProductIncludeTypes[] }> {
        const path = `/products`;
        const params = {
            'filter[slug]': url,
        };
        const response = await this.apiClient.get<Product[], ProductIncludeTypes[]>(path, {
            params,
        });

        if (response.data.length > 1)
            throw new Error(`More than 1 product found with the same url: ${url}`);

        return response;
    }
}

export class ProductsSearchArgsBuilder {
    /* The list of fields that can be used in the search query:
     * allText, id, sku, skuUppercase, name, shortDescription, productType, isVariant, newArrival, inventoryStatus, minimalPrice, minimalPrice_{unit}, orderedAt, product, productFamily, category.
     * Also, any filterable product attribute can be used. */
    static buildSearchQuery(args?: QueryProductsArgs): string {
        if (!args) {
            return '';
        }

        try {
            const searchQueriesArray = [];

            // transform search by keywords to oro productsearch format acceptable
            const searchTerm = lowerCase(args?.search || '');
            if (searchTerm) {
                // The values of all text fields does "fuzzy" match the specified value.
                searchQueriesArray.push(`allText ~ ${searchTerm}`);
            }

            const filters = args?.filter;

            if (filters) {
                for (const [key, value] of Object.entries(filters)) {
                    const { eq: eqValue, in: inArray, to, from } = value as FilterTypeInput;

                    if (key === 'category_uid' && eqValue) {
                        //transform filter by category to oro productsearch format acceptable
                        const categoryId = getIdFromCategoryUid(eqValue);
                        if (categoryId) {
                            searchQueriesArray.push(`category >= ${categoryId}`);
                        }
                        continue;
                    }

                    if (eqValue) {
                        searchQueriesArray.push(`${key} = ${eqValue}`);
                        continue;
                    }

                    if (inArray && inArray.length > 0) {
                        searchQueriesArray.push(`${key} in ${inArray.join(', ')}`);
                        continue;
                    }

                    if (from) {
                        searchQueriesArray.push(`${key} >= ${from}`);
                    }

                    if (to) {
                        searchQueriesArray.push(`${key} <= ${to}`);
                    }
                }
            }

            return searchQueriesArray.join(' and ');
        } catch (error) {
            return logAndThrowError(error);
        }
    }

    /* The list of fields for which the aggregated data can be requested:
     * id, sku, skuUppercase, name, shortDescription, productType, isVariant, newArrival, inventoryStatus, minimalPrice, minimalPrice_{unit}, orderedAt, product, productFamily, category.
     * Also, any filterable product attribute can be used. */
    static buildAggregations(productAttributes?: ConfigurableProductAttribute[]): string {
        if (!productAttributes) {
            return '';
        }

        try {
            const aggregationsArray = [];

            //add aggregation by brand
            aggregationsArray.push('brand count');

            //add aggregation by price
            aggregationsArray.push('minimalPrice min', 'minimalPrice max');

            //add aggregations by product attributes
            productAttributes.forEach((attribute) => {
                aggregationsArray.push(`${attribute.id} count`);
            });

            return aggregationsArray.join(',');
        } catch (error) {
            return logAndThrowError(error);
        }
    }

    /* The list of fields that can be used in the sort filter:
     * relevance, id, sku, skuUppercase, name, productType, isVariant, newArrival, inventoryStatus, minimalPrice, orderedAt.
     * Also, any sortable product attribute can be used. */
    static buildSort(sort?: ProductAttributeSortInput | null): string {
        if (!sort || Object.keys(sort).length === 0) {
            return 'relevance';
        }

        /* A mapping how we want sort args property names translated to names the products
         * rest GET can work with.
         *  */
        const sortKeyMapping: { [index: string]: string } = {
            position: 'sku',
            price: 'minimalPrice',
        };

        /* We can only sort by one option so grab the first key/value pair option from the sort object */
        const [key, value] = Object.entries(sort)[0];

        const sortValueFromMapping = sortKeyMapping[key];

        /* Find sort values through a mapping where the args don't directly translate to Oro commerce sort options */
        return sortValueFromMapping ? sortKeyMapping[key] : key;
    }
}
