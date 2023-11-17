import { Attributes } from '../../types';
import { Aggregation, FilterTypeEnum } from '@aligent/orocommerce-resolvers';

interface OroAttribute {
    count: number;
    value: string;
}

const getFilterType = (typename?: string): FilterTypeEnum => {
    if (typename === 'count') {
        return 'FilterEqualTypeInput';
    }

    return 'FilterRangeTypeInput';
};

export const getTransformedProductAggregations = (
    oroAttributes: Attributes
): Array<Aggregation> => {
    if (!oroAttributes) return [];
    const productAttributes = Object.keys(oroAttributes);
    return <Array<Aggregation>>productAttributes
        .map((attribute) => {
            const [attributeName, attributeType] = attribute.split('+');

            if (attributeType === 'count') {
                const oroAttributeOptions = <Array<OroAttribute>>oroAttributes[attribute];
                const options = oroAttributeOptions.map((option) => {
                    return {
                        count: option.count,
                        label: option.value,
                        value: String(option.value),
                        __typename: 'AggregationOption',
                    };
                });

                return {
                    attribute_code: attributeName.toLowerCase(),
                    count: options.length,
                    label: attributeName,
                    options,
                    filterType: getFilterType(attributeType),
                    __typename: 'Aggregation',
                };
            }

            // TODO: Price range filter
            return null;
        })
        .filter(Boolean);
};
