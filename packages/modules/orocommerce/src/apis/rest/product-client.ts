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
import { logAndThrowError, GraphqlError } from '@aligent/utils';
import { lowerCase } from 'lodash';
import { getIdFromCategoryUid } from '../../utils';

@Injectable()
export class ProductsClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    // TODO: Add caching of product attributes in the Redis, because they won’t change often (and if they do there will be a deploy); OTF-128
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
            ...(!aggregations && { include: 'product,product.images,category,inventoryStatus' }),
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
            throw new GraphqlError('input', `More than 1 product found with the same url: ${url}`);

        return response;
    }
}

export class ProductsSearchArgsBuilder {
    /* This filter is used to specify the search query.
     * The simple query consists of a field, followed by an operator, followed by one or more values surrounded by parentheses.
     * The list of fields that can be used in the search query:
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
                            // TODO: Add filter products by child master catalog categories to productsearch api (OTF-133)
                            // It should filter by the specified category and its child categories
                            searchQueriesArray.push(`category = ${categoryId}`);
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
            return logAndThrowError(error, this.buildSearchQuery.name);
        }
    }

    /* This filter should contain comma delimited definitions of aggregations.
     * The definition of each aggregation can be "fieldName aggregatingFunction" or "fieldName aggregatingFunction resultName".
     * The list of fields for which the aggregated data can be requested:
     * id, sku, skuUppercase, name, shortDescription, productType, isVariant, newArrival, inventoryStatus, minimalPrice, minimalPrice_{unit}, orderedAt, product, productFamily, category.
     * Also, any filterable product attribute can be used. */
    static buildAggregations(productAttributes?: ConfigurableProductAttribute[]): string {
        if (!productAttributes) {
            return '';
        }

        try {
            //add aggregations by brand and price
            const aggregationsArray = [
                'brand count brand+count',
                'minimalPrice min price+min',
                'minimalPrice max price+max',
            ];

            //add aggregations by product attributes
            productAttributes.forEach((attribute) => {
                aggregationsArray.push(`${attribute.meta.id} count ${attribute.meta.label}+count`);
            });

            return aggregationsArray.join(',');
        } catch (error) {
            return logAndThrowError(error, this.buildAggregations.name);
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

        try {
            // Result sorting. Comma-separated fields, e.g. 'field1,-field2'.
            const sortArray: string[] = [];
            Object.entries(sort).map((sortOption) => {
                const [key, value] = sortOption;
                /* Find sort values through a mapping where the args don't directly translate to Oro commerce sort options */
                const sortValueFromMapping = sortKeyMapping[key] ?? key;
                sortArray.push(
                    value === 'DESC' ? '-' + sortValueFromMapping : sortValueFromMapping
                );
            });

            return sortArray.join(',');
        } catch (error) {
            return logAndThrowError(error, this.buildSort.name);
        }
    }
}
