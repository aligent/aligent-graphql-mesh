import { ProductAttributeSortInput, SortEnum } from '@aligent/bigcommerce-resolvers';

const sortOptions = {
    name: 'ASC' as SortEnum,
    position: 'ASC' as SortEnum,
    price: 'ASC' as SortEnum,
    relevance: 'ASC' as SortEnum,
};

export const transformGQLSortArgsToRestSortArgs = (
    sort?: ProductAttributeSortInput | null,
    sortKeyMapping: { [key: string]: string } = {}
): { sort: string; direction: string } => {
    if (!sort || Object.keys(sort || {}).length === 0) {
        return { sort: '', direction: '' };
    }

    /* We can only sort by one option so grab the first key/value pair option from the sort object */
    const [key, value] = Object.entries(sort || {})[0] || null;

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

const sortKeyMapping: { [index: string]: string } = {
    position: 'sku',
    relevance: '',
};

// console.dir(getProductsBySkuSort(sortOptions));
console.dir(transformGQLSortArgsToRestSortArgs({}));
