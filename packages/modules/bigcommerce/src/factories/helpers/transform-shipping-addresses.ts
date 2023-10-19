import { CheckoutShippingConsignment } from '@aligent/bigcommerce-operations';
import { Cart, Maybe, Scalars, ShippingCartAddress } from '@aligent/bigcommerce-resolvers';
import { btoa } from '@aligent/utils';
import {
    getTransformedAvailableShippingMethods,
    getTransformedSelectedShippingOption,
} from './transform-available-shipping-methods';
import { getTransformedAddress } from './transform-address';

export const getTransformedShippingAddresses = (
    shippingConsignments?: Maybe<Array<CheckoutShippingConsignment>>,
    customerMessage?: Maybe<Scalars['String']['output']>
): Cart['shipping_addresses'] => {
    if (!shippingConsignments) return [];

    return shippingConsignments.map(
        (shippingConsignment: CheckoutShippingConsignment): Maybe<ShippingCartAddress> => {
            const { selectedShippingOption, entityId, availableShippingOptions, address } =
                shippingConsignment;

            const transformedAddress = getTransformedAddress(address);

            return {
                ...transformedAddress,
                uid: btoa(entityId),
                available_shipping_methods:
                    getTransformedAvailableShippingMethods(availableShippingOptions),
                selected_shipping_method:
                    getTransformedSelectedShippingOption(selectedShippingOption),
                customer_notes: customerMessage,
                deliveryInstructions: {
                    authorityToLeave: false,
                    instructions: '',
                },
                /* @todo This is from "customFields" on the "shippingAddress" object. To get this
                 *  we need to know what customField.fieldId corresponds to. The BC Aligent instance currently
                 * shows this as
                 *[
                 *   {
                 *        fieldId: "field_26", // "instructions"
                 *        fieldValue: "this are instructions"
                 *   },
                 *   {
                 *       "fieldId": "field_29", "authorityToLeave"
                 *       "fieldValue": ["0"]
                 *   }
                 * ]
                 */
            };
        }
    );
};
