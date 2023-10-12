import { ByLocation, Maybe } from '@aligent/bigcommerce-resolvers';
import { VariantInventory } from '@aligent/bigcommerce-operations';
import { isNotNull } from '@aligent/utils';

export const getTransformProductLocations = (
    inventory: Maybe<VariantInventory> | undefined
): Maybe<Array<Maybe<ByLocation>>> => {
    return (
        inventory?.byLocation?.edges
            ?.map((location) => {
                if (!location?.node) {
                    return null;
                }
                return {
                    ...location.node,
                    __typename: 'ByLocation' as const,
                };
            })
            .filter(isNotNull) || []
    );
};
