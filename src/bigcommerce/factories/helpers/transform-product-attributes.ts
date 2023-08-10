import { ConfigurableAttributeOption, Maybe } from '@mesh';
import { BC_OptionEdge } from '@mesh/external/BigCommerceGraphqlApi';
import { btoa } from '../../../utils';

export const getTransformedProductsAttributes = (options: {
    edges?: Maybe<Array<Maybe<BC_OptionEdge>>>;
}): Array<Maybe<ConfigurableAttributeOption>> => {
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
        .filter(Boolean);

    return optionsResult;
};
