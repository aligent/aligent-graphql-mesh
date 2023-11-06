import { CheckoutShippingConsignment } from '@aligent/bigcommerce-operations';
import { Cart, Maybe, Scalars, ShippingCartAddress } from '@aligent/bigcommerce-resolvers';
import { btoa } from '@aligent/utils';
import {
    getTransformedAvailableShippingMethods,
    getTransformedSelectedShippingOption,
} from './transform-available-shipping-methods';
import { getTransformedAddress } from './transform-address';
import { BcStorefrontFormFields } from '../../types';
import { getTransformedDeliveryInstructions } from './transform-delivery-instructions';

export const getTransformedShippingAddresses = (
    shippingConsignments?: Maybe<Array<CheckoutShippingConsignment>>,
    customerMessage?: Maybe<Scalars['String']>,
    formFields?: BcStorefrontFormFields
): Cart['shipping_addresses'] => {
    if (!shippingConsignments) return [];

    return shippingConsignments.map(
        (shippingConsignment: CheckoutShippingConsignment): Maybe<ShippingCartAddress> => {
            const { selectedShippingOption, entityId, availableShippingOptions, address } =
                shippingConsignment;

            const transformedAddress = getTransformedAddress(address);

            const deliveryInstructions = getTransformedDeliveryInstructions(address, formFields);

            return {
                ...transformedAddress,
                uid: btoa(entityId),
                available_shipping_methods:
                    getTransformedAvailableShippingMethods(availableShippingOptions),
                selected_shipping_method:
                    getTransformedSelectedShippingOption(selectedShippingOption),
                customer_notes: customerMessage,
                deliveryInstructions,
            };
        }
    );
};
