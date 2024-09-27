import { ByLocation, Maybe } from '@aligent/bigcommerce-resolvers';
import { VariantInventory } from '@aligent/bigcommerce-operations';
import { isTruthy } from '@aligent/utils';

export const getTransformProductLocations = (
    inventory: Maybe<VariantInventory> | undefined
): Maybe<Array<ByLocation>> => {
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
            .filter(isTruthy) || []
    );
};
