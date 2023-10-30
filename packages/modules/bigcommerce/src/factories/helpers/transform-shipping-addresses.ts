import {
    CheckoutAddressCheckboxesCustomField,
    CheckoutAddressTextFieldCustomField,
    CheckoutShippingConsignment,
} from '@aligent/bigcommerce-operations';
import { Cart, Maybe, Scalars, ShippingCartAddress } from '@aligent/bigcommerce-resolvers';
import { btoa } from '@aligent/utils';
import {
    getTransformedAvailableShippingMethods,
    getTransformedSelectedShippingOption,
} from './transform-available-shipping-methods';
import { getTransformedAddress } from './transform-address';
import { BcStorefrontFormFields } from '../../types';

const DELIVERY_INSTRUCTIONS_MAP = {
    authorityToLeave: 'Authority To Leave',
    instructions: 'Delivery Instructions',
};

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

            const deliveryInstructions = {
                authorityToLeave: false,
                instructions: '',
            };

            if (formFields) {
                const { shippingAddress: shippingCustomFields } = formFields;

                shippingCustomFields.forEach((shippingCustomField) => {
                    address.customFields.some((addressCustomField) => {
                        if (
                            addressCustomField.entityId === getFieldEntityId(shippingCustomField.id)
                        ) {
                            if (
                                shippingCustomField.label ===
                                DELIVERY_INSTRUCTIONS_MAP.authorityToLeave
                            ) {
                                deliveryInstructions.authorityToLeave = !!(
                                    addressCustomField as CheckoutAddressCheckboxesCustomField
                                ).valueEntityIds.length;
                            } else if (
                                shippingCustomField.label === DELIVERY_INSTRUCTIONS_MAP.instructions
                            ) {
                                deliveryInstructions.instructions = (
                                    addressCustomField as CheckoutAddressTextFieldCustomField
                                ).text;
                            }
                        }
                    });
                });
            }
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

// BC REST FormField API returns field id in the format of 'field_26',
// BC Graphql Checkout returns customField with entityId: 26
const getFieldEntityId = (fieldId: string): number => {
    return Number(fieldId.replace('field_', ''));
};
