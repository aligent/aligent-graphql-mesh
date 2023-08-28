import { FilterTypeEnum } from '@aligent/bigcommerce-resolvers';

export const mockProductFiltersAc = [
    {
        attribute_code: 'price',
        count: 3,
        label: 'Price',
        filterType: 'FilterRangeTypeInput' as FilterTypeEnum,
        options: [
            {
                count: 1,
                label: '20-30',
                swatch_data: null,
                value: '20_30',
            },
            {
                count: 1,
                label: '30-40',
                swatch_data: null,
                value: '30_40',
            },
            {
                count: 1,
                label: '50-60',
                swatch_data: null,
                value: '50_60',
            },
        ],
    },
    {
        attribute_code: 'category_uid',
        count: 4,
        label: 'Category',
        filterType: 'FilterEqualTypeInput' as FilterTypeEnum,
        options: [
            {
                count: 3,
                label: 'Men',
                swatch_data: null,
                value: 'MTI=',
            },
            {
                count: 3,
                label: 'Women',
                swatch_data: null,
                value: 'MjE=',
            },
            {
                count: 2,
                label: 'Tops',
                swatch_data: null,
                value: 'MTM=',
            },
            {
                count: 2,
                label: 'Tops',
                swatch_data: null,
                value: 'MjI=',
            },
        ],
    },
    {
        attribute_code: 'color',
        count: 3,
        label: 'Color',
        filterType: 'FilterEqualTypeInput' as FilterTypeEnum,
        options: [
            {
                count: 2,
                label: 'Lavender',
                swatch_data: {
                    type: 'ColorSwatchData',
                    value: '#ce64d4',
                },
                value: '63',
            },
            {
                count: 3,
                label: 'White',
                swatch_data: {
                    type: 'ColorSwatchData',
                    value: '#ffffff',
                },
                value: '68',
            },
            {
                count: 2,
                label: 'Yellow',
                swatch_data: {
                    type: 'ColorSwatchData',
                    value: '#ffd500',
                },
                value: '69',
            },
        ],
    },
    {
        attribute_code: 'sale',
        count: 1,
        label: 'Sale',
        filterType: 'FilterEqualTypeInput' as FilterTypeEnum,
        options: [
            {
                count: 3,
                label: '0',
                swatch_data: null,
                value: '0',
            },
        ],
    },
    {
        attribute_code: 'size',
        count: 6,
        label: 'Size',
        filterType: 'FilterEqualTypeInput' as FilterTypeEnum,
        options: [
            {
                count: 2,
                label: 'S',
                swatch_data: {
                    type: 'TextSwatchData',
                    value: 'S',
                },
                value: '180',
            },
            {
                count: 2,
                label: 'M',
                swatch_data: {
                    type: 'TextSwatchData',
                    value: 'M',
                },
                value: '181',
            },
        ],
    },
];
