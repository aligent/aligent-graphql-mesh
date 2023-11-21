import { Attributes } from '../../../../types';
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
