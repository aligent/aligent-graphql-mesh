import { ProductAttributeSortInput } from '@aligent/bigcommerce-resolvers';
import { Maybe, ProductEdge } from '@aligent/bigcommerce-operations';

/**
 * Transforms sort arguments coming from graphql to a structure rest GET request will understand
 *
 * @param sort
 * @param sortKeyMapping - sort property name mapping
 * const sortKeyMapping: { [index: string]: string } = {
 *        position: 'sku',
 *        relevance: '',
 *    };
 */
export const transformGQLSortArgsToRestSortArgs = (
    sort?: ProductAttributeSortInput | null,
    sortKeyMapping: { [key: string]: string } = {}
): { sort: string; direction: string } => {
    if (!sort || Object.keys(sort).length === 0) {
        return { sort: '', direction: '' };
    }

    /* We can only sort by one option so grab the first key/value pair option from the sort object */
    const [key, value] = Object.entries(sort)[0];

    const direction = value !== 'DESC' ? 'asc' : 'desc';

    const sortValueFromMapping = sortKeyMapping[key];

    /* Find sort values through a mapping where the args don't directly translate to Big commerce sort options */
    const sortValue =
        sortValueFromMapping || sortValueFromMapping === '' ? sortKeyMapping[key] : key;

    return {
        sort: sortValue,
        direction,
    };
};

/**
 * Sort product objects based on an array of identifiers and object property
 *
 * @param orderedIdentifiers
 * @param sortByProp
 */
const sortByIdentifier = (
    orderedIdentifiers: Array<string | number>,
    sortByProp: 'sku' | 'entityId'
) => {
    return (productA: Maybe<ProductEdge>, productB: Maybe<ProductEdge>): number => {
        const productIdA = productA?.node?.[sortByProp] || 0;
        const productIdB = productB?.node?.[sortByProp] || 0;

        const indexA = orderedIdentifiers.indexOf(productIdA);
        const indexB = orderedIdentifiers.indexOf(productIdB);

        return indexA - indexB;
    };
};

/**
 * Sorts products returned from the "Products" graphql query and according either
 * to either the rest Products id order or the order of the args.filter.sku
 *
 * @param productsToSort
 * @param identifiers
 * @param sortDirection
 */
export const getSortedProducts = (
    productsToSort: Array<Maybe<ProductEdge>>,
    identifiers: {
        ids?: Array<number>;
        skus?: Array<string>;
    },
    sortDirection: string = 'asc'
): Array<Maybe<ProductEdge>> => {
    let sortedProducts = productsToSort;

    if (identifiers.ids) {
        sortedProducts = productsToSort.sort(sortByIdentifier(identifiers.ids, 'entityId'));
    }

    if (identifiers.skus) {
        sortedProducts = productsToSort.sort(sortByIdentifier(identifiers.skus, 'sku'));
    }

    return sortDirection === 'desc' ? sortedProducts.reverse() : sortedProducts;
};
