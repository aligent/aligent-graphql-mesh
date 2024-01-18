import { Attributes, ConfigurableProductAttribute } from '../../../../types';
import { Aggregation } from '@aligent/orocommerce-resolvers';

export const oroProductAttributes: Attributes = {
    'color+count': [
        {
            value: 'purple',
            count: 2,
        },
        {
            value: 'yellow',
            count: 2,
        },
        {
            value: 'white',
            count: 1,
        },
    ],
    'size+count': [
        {
            value: 'm',
            count: 2,
        },
        {
            value: 's',
            count: 2,
        },
        {
            value: 'l',
            count: 1,
        },
    ],
    price_min: 10,
};

export const outputProductFilers: Array<Aggregation> = [
    {
        attribute_code: 'color',
        count: 3,
        label: 'color',
        options: [
            {
                count: 2,
                label: 'purple',
                value: 'purple',
                __typename: 'AggregationOption',
            },
            {
                count: 2,
                label: 'yellow',
                value: 'yellow',
                __typename: 'AggregationOption',
            },
            {
                count: 1,
                label: 'white',
                value: 'white',
                __typename: 'AggregationOption',
            },
        ],
        filterType: 'FilterEqualTypeInput',
        __typename: 'Aggregation',
    },
    {
        attribute_code: 'size',
        count: 3,
        label: 'size',
        options: [
            {
                count: 2,
                label: 'm',
                value: 'm',
                __typename: 'AggregationOption',
            },
            {
                count: 2,
                label: 's',
                value: 's',
                __typename: 'AggregationOption',
            },
            {
                count: 1,
                label: 'l',
                value: 'l',
                __typename: 'AggregationOption',
            },
        ],
        filterType: 'FilterEqualTypeInput',
        __typename: 'Aggregation',
    },
];

export const outputProductFilters: Aggregation[] = [
    {
        attribute_code: 'size_63313224a7189',
        count: 1,
        label: 'size',
        options: [],
    },
    {
        attribute_code: 'size_633132c50db9e',
        count: 1,
        label: 'Colour',
        options: [],
    },
];

export const oroProductAttributesFromAPI: ConfigurableProductAttribute[] = [
    {
        type: 'tf_product_attributes',
        id: 'size_63313224a7189',
        attributes: {
            attrType: 'enum',
            label: 'size',
        },
    },
    {
        type: 'tf_product_attributes',
        id: 'size_633132c50db9e',
        attributes: {
            attrType: 'enum',
            label: 'Colour',
        },
    },
];
