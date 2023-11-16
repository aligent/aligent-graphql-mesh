import { Attributes } from '../../types';
import { Aggregation, FilterTypeEnum } from '@aligent/orocommerce-resolvers';

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
    return productAttributes
        .map((attribute) => {
            const [attributeName, attributeType] = attribute.split('_');

            if (attributeType === 'count') {
                const oroAttributeOptions = <Array<object>>oroAttributes[attribute];
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
        })
        .filter(Boolean);
};
