import { Maybe, ProductEdge } from '@aligent/bigcommerce-operations';
import { getSortedProducts, transformGQLSortArgsToRestSortArgs } from '../sort';
import { SortEnum } from '@aligent/bigcommerce-resolvers';

describe('transformGQLSortArgsToRestSortArgs', () => {
    it('Can transform graphql sort args into args rest is expecting', () => {
        const sort = { name: 'ASC' as SortEnum };

        const transformSort = transformGQLSortArgsToRestSortArgs(sort);

        expect(transformSort).toEqual({
            direction: 'asc',
            sort: 'name',
        });
    });

    it('Returns default sort args if no sort sort arg is passed to the function', () => {
        const transformSort = transformGQLSortArgsToRestSortArgs(null);

        expect(transformSort).toEqual({
            direction: '',
            sort: '',
        });
    });
});

const bcProducts = [
    { node: { name: 'product1', entityId: 30, sku: 'SLLPJ' } },
    { node: { name: 'product3', entityId: 35, sku: 'abcs' } },
    { node: { name: 'product4', entityId: 25, sku: 'WH01' } },
    { node: { name: 'product2', entityId: 40, sku: 'dsag' } },
] as Array<Maybe<ProductEdge>>;

let idOrder = [25, 35, 40, 30];
let skuOrder = ['WH01', 'dsag', 'SLLPJ', 'abcs'];

describe('getSortedProducts', () => {
    it('Can sort products in an ascending order from ids listed in an array', () => {
        const sortArrayObject = getSortedProducts(bcProducts, { ids: idOrder });

        expect(sortArrayObject).toEqual([
            { node: { entityId: 25, name: 'product4', sku: 'WH01' } },
            { node: { entityId: 35, name: 'product3', sku: 'abcs' } },
            { node: { entityId: 40, name: 'product2', sku: 'dsag' } },
            { node: { entityId: 30, name: 'product1', sku: 'SLLPJ' } },
        ]);
    });

    it('Can sort products in an descending order from ids listed in an array', () => {
        const sortArrayObject = getSortedProducts(bcProducts, { ids: idOrder }, 'desc');

        expect(sortArrayObject).toEqual([
            { node: { entityId: 30, name: 'product1', sku: 'SLLPJ' } },
            { node: { entityId: 40, name: 'product2', sku: 'dsag' } },
            { node: { entityId: 35, name: 'product3', sku: 'abcs' } },
            { node: { entityId: 25, name: 'product4', sku: 'WH01' } },
        ]);
    });

    it('Can sort products in the same order as the items in the skus array', () => {
        /* We want the products to minic the same position as each sku in the skus array*/
        const sortArrayObject = getSortedProducts(bcProducts, { skus: skuOrder });

        expect(sortArrayObject).toEqual([
            { node: { entityId: 25, name: 'product4', sku: 'WH01' } },
            { node: { entityId: 40, name: 'product2', sku: 'dsag' } },
            { node: { entityId: 30, name: 'product1', sku: 'SLLPJ' } },
            { node: { entityId: 35, name: 'product3', sku: 'abcs' } },
        ]);
    });

    it('Can sort products in an descending order from skus listed in an array', () => {
        const sortArrayObject = getSortedProducts(bcProducts, { skus: skuOrder }, 'desc');

        expect(sortArrayObject).toEqual([
            { node: { entityId: 35, name: 'product3', sku: 'abcs' } },
            { node: { entityId: 30, name: 'product1', sku: 'SLLPJ' } },
            { node: { entityId: 40, name: 'product2', sku: 'dsag' } },
            { node: { entityId: 25, name: 'product4', sku: 'WH01' } },
        ]);
    });
});
