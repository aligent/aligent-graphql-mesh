import {
    CheckoutAvailableShippingOption,
    CheckoutSelectedShippingOption,
} from '@aligent/bigcommerce-operations';
import {
    AvailableShippingMethod,
    Maybe,
    SelectedShippingMethod,
} from '@aligent/bigcommerce-resolvers';
import { getTransformedPrice } from './transform-price';

export const getTransformedAvailableShippingMethod = (
    shippingOption: CheckoutAvailableShippingOption | CheckoutSelectedShippingOption
): AvailableShippingMethod => {
    const { type, entityId, description, cost } = shippingOption;
    return {
        amount: getTransformedPrice(cost),
        // If the option is returned in the data it's available?
        available: true,
        base_amount: null,
        carrier_code: type,
        carrier_title: description,
        error_message: '',
        method_code: entityId,
        method_title: description,
        // @todo work if "cost" is ex or inc gst
        price_excl_tax: getTransformedPrice(cost),
        price_incl_tax: getTransformedPrice(cost),
    };
};

export const getTransformedAvailableShippingMethods = (
    availableShippingOptions?: Maybe<Array<CheckoutAvailableShippingOption>>
): Maybe<Array<Maybe<AvailableShippingMethod>>> => {
    if (!availableShippingOptions) return null;

    return availableShippingOptions.map((availableShippingOption) => {
        return getTransformedAvailableShippingMethod(availableShippingOption);
    });
};

export const getTransformedSelectedShippingOption = (
    selectedShippingOption?: Maybe<CheckoutSelectedShippingOption>
): Maybe<SelectedShippingMethod> => {
    if (!selectedShippingOption) return null;

    const transformedShippingMethod = getTransformedAvailableShippingMethod(
        selectedShippingOption
    ) as SelectedShippingMethod;

    return {
        ...transformedShippingMethod,
        method_code: selectedShippingOption.entityId,
        method_title: selectedShippingOption.description,
    };
};
