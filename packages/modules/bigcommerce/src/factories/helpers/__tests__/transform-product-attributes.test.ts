import { mockBcProducts } from '../../../resolvers/mocks/products.bc';
import { OptionEdge } from '@aligent/bigcommerce-operations';
import { Maybe } from '@aligent/bigcommerce-resolvers';
import { getTransformedProductsAttributes } from '../transform-product-attributes';

const expectResult = [
    { code: 'color', label: 'Green', value_index: 182, uid: 'MTgy' },
    { code: 'size', label: 'S', value_index: 184, uid: 'MTg0' },
];

describe('transform-product-options', () => {
    it('Gets AC product "attributes" structured data from BC product "options"', () => {
        expect(
            getTransformedProductsAttributes(
                mockBcProducts[0].variants.edges[0].node.options as {
                    edges: Array<Maybe<OptionEdge>>;
                }
            )
        ).toEqual(expectResult);
    });

    it(`Returns an empty array if there's no options.edges`, () => {
        expect(getTransformedProductsAttributes({ edges: null })).toEqual([]);
    });

    it(`Returns and empty array when there's no options in the edges array`, () => {
        expect(getTransformedProductsAttributes({ edges: [null] })).toEqual([]);
    });

    it(`Returns and empty array when there's no values for an option`, () => {
        expect(
            getTransformedProductsAttributes({ edges: [{ node: { values: { edges: null } } }] } as {
                edges: Array<Maybe<OptionEdge>>;
            })
        ).toEqual([]);
    });
});
