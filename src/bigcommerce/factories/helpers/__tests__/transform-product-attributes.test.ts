import { mockBcProducts } from '../../../resolvers/mocks/products.bc';
import { BC_OptionEdge } from '@mesh/external/BigCommerceGraphqlApi';
import { Maybe } from '../../../../meshrc/.mesh';
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
                    edges: Array<Maybe<BC_OptionEdge>>;
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
                edges: Array<Maybe<BC_OptionEdge>>;
            })
        ).toEqual([]);
    });
});
