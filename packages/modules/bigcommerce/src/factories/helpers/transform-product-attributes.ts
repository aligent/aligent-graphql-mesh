import { ConfigurableAttributeOption, Maybe } from '@aligent/bigcommerce-resolvers';
import { OptionEdge } from '@aligent/bigcommerce-operations';
import { btoa, isTruthy } from '@aligent/utils';

export const getTransformedProductsAttributes = (options: {
    edges?: Maybe<Array<Maybe<OptionEdge>>>;
}): Array<ConfigurableAttributeOption> => {
    if (!options?.edges) return [];

    const optionsResult = options.edges
        .map((option) => {
            if (!option?.node) return null;
            const { displayName, values } = option.node;

            if (!values?.edges?.[0]?.node) return null;
            const { entityId: valueEntityId, label } = values.edges[0].node;
            return {
                code: displayName.toLowerCase().replace(/ /g, '_'),
                label,
                value_index: valueEntityId,
                uid: btoa(String(valueEntityId)),
            };
        })
        .filter(isTruthy);

    return optionsResult;
};
