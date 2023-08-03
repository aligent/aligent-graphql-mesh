import { BC_OptionConnection, ConfigurableAttributeOption, Maybe } from '../../../meshrc/.mesh';
import { btoa } from '../../../utils';

export const getTransformedOptions = (
    options: BC_OptionConnection
): Array<Maybe<ConfigurableAttributeOption>> => {
    if (!options?.edges) return [];

    const optionsResult = options.edges.map(option => {
        if (!option?.node) return null;
        const { entityId: optionEntityId, displayName, values } = option.node;

        if (!values?.edges?.[0]?.node) return null;
        const { entityId: valueEntityId, label } = values.edges[0].node;
        return {
            code: displayName.toLowerCase().replace(/ /g, '_'),
            label,
            value_index: valueEntityId,
            uid: btoa(String(valueEntityId)),
        };
    });

    return optionsResult;
};
