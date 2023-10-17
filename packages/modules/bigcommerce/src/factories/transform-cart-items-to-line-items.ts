import { CartLineItemInput } from '@aligent/bigcommerce-operations';
import {
    BundleCartItem,
    ConfigurableCartItem,
    SimpleCartItem,
} from '@aligent/bigcommerce-resolvers';

export const transformCartItemsToLineItems = (
    cartItems: Array<ConfigurableCartItem | BundleCartItem | SimpleCartItem>
): CartLineItemInput[] => {
    return cartItems.map((item) => ({
        quantity: item.quantity,
        productEntityId: parseInt(atob(item.uid).split('/')[1]),
        ...(item.__typename === 'ConfigurableCartItem' && {
            selectedOptions: {
                multipleChoices: item.configurable_options.map((option) => ({
                    optionEntityId: option?.id as number,
                    optionValueEntityId: option?.value_id as number,
                })),
            },
        }),
    }));
};
