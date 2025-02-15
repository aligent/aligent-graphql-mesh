import { mockBcProducts } from '../../../resolvers/mocks/products.bc';
import { getTransformedConfigurableOptions } from '../transform-configurable-options';
import { MultipleChoiceOption, ProductOptionEdge } from '@aligent/bigcommerce-operations';
import { Maybe } from '@aligent/bigcommerce-resolvers';

const expectResult = [
    {
        attribute_code: 'color',
        attribute_id: '148',
        displayStyle: 'Swatch',
        id: 148,
        label: 'Color',
        values: [
            {
                default_label: 'Green',
                label: 'Green',
                store_label: 'Green',
                use_default_value: false,
                value_index: 182,
                swatch_data: { value: '#334B28', __typename: 'ColorSwatchData' },
                uid: 'Y29uZmlndXJhYmxlLzE0OC8xODI=',
                __typename: 'ConfigurableProductOptionsValues',
            },
            {
                default_label: 'Purple',
                label: 'Purple',
                store_label: 'Purple',
                use_default_value: false,
                value_index: 183,
                swatch_data: { value: '#EF3DFF', __typename: 'ColorSwatchData' },
                uid: 'Y29uZmlndXJhYmxlLzE0OC8xODM=',
                __typename: 'ConfigurableProductOptionsValues',
            },
        ],
        attribute_uid: 'MTQ4',
        uid: 'MTQ4',
    },
    {
        attribute_code: 'size',
        attribute_id: '149',
        displayStyle: 'RadioButtons',
        id: 149,
        label: 'Size',
        values: [
            {
                default_label: 'S',
                label: 'S',
                store_label: 'S',
                uid: 'Y29uZmlndXJhYmxlLzE0OS8xODQ=',
                use_default_value: false,
                value_index: 184,
                __typename: 'ConfigurableProductOptionsValues',
            },
            {
                default_label: 'M',
                label: 'M',
                store_label: 'M',
                uid: 'Y29uZmlndXJhYmxlLzE0OS8xODU=',
                use_default_value: false,
                value_index: 185,
                __typename: 'ConfigurableProductOptionsValues',
            },
        ],
        attribute_uid: 'MTQ5',
        uid: 'MTQ5',
    },
];

describe('transform-configurable-options', () => {
    it('Gets AC configurable_options structured data from BC productOptions', () => {
        expect(
            getTransformedConfigurableOptions(
                mockBcProducts[0].productOptions,
                'ConfigurableProduct'
            )
        ).toEqual(expectResult);
    });

    it(`Returns an empty array if there's no productOptions.edges`, () => {
        expect(
            getTransformedConfigurableOptions(
                {
                    ...mockBcProducts[0].productOptions,
                    edges: undefined,
                },
                'ConfigurableProduct'
            )
        ).toEqual([]);
    });

    it(`Returns an empty array if there's no productOption values`, () => {
        expect(
            getTransformedConfigurableOptions(
                {
                    ...mockBcProducts[0].productOptions,
                    edges: [{} as Maybe<ProductOptionEdge>],
                },
                'ConfigurableProduct'
            )
        ).toEqual([]);
    });

    it(`Returns null if there's no values in the productOption array`, () => {
        expect(
            getTransformedConfigurableOptions(
                {
                    ...mockBcProducts[0].productOptions,
                    edges: [null],
                },
                'ConfigurableProduct'
            )
        ).toEqual([]);
    });

    it(`Returns and empty array if there's no value in a productOptions.values`, () => {
        expect(
            getTransformedConfigurableOptions(
                {
                    ...mockBcProducts[0].productOptions,
                    edges: [
                        {
                            cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                            node: {
                                ...mockBcProducts[0].productOptions.edges[0].node,
                                values: {
                                    edges: [null],
                                },
                            } as MultipleChoiceOption,
                        },
                    ],
                },
                'ConfigurableProduct'
            )
        ).toEqual([
            {
                ...expectResult[0],
                values: [],
            },
        ]);
    });
});
