import 'reflect-metadata';
import { AddProductsToRequisitionListArgsTransformer } from '../add-products-to-requisition-list-args-transformer';

describe('Add to Requisition list mutation args tests', () => {
    test('Transform input from add to requisition list resolver MutationAddProductsToRequisitionListArgs', () => {
        const addProductsToRequisitionListArgsTransformer =
            new AddProductsToRequisitionListArgsTransformer();

        const transformed = addProductsToRequisitionListArgsTransformer.transform({
            data: requisitionListArgs,
        });

        expect(transformed).toEqual(expectedTransformedArgs);
    });
});

const requisitionListArgs = [{ quantity: 1, sku: '', uid: 'UHJvZHVjdDoyMw==' }];

const expectedTransformedArgs = [
    {
        type: 'shoppinglistitems',
        attributes: { quantity: 1 },
        relationships: {
            product: { data: { type: 'products', id: '23' } },
            unit: { data: { type: 'productunits', id: 'each' } },
        },
    },
];
