import {
    CheckoutAddressCheckboxesCustomField,
    CheckoutAddressTextFieldCustomField,
    CheckoutConsignmentAddress,
} from '@aligent/bigcommerce-operations';
import { BcStorefrontFormFields } from '../../types';

// CheckoutConsignmentAddress -> customFields -> label is the only identifier Mesh can use to verify field
// Therefore, Admin settings -> address form -> custom field -> field names have to match this map
const DELIVERY_INSTRUCTIONS_MAP = {
    authorityToLeave: 'Authority To Leave',
    instructions: 'Delivery Instructions',
};

export const getTransformedDeliveryInstructions = (
    address: CheckoutConsignmentAddress,
    formFields?: BcStorefrontFormFields
) => {
    const deliveryInstructions = {
        authorityToLeave: false,
        instructions: '',
    };

    if (formFields) {
        const { shippingAddress: shippingCustomFields } = formFields;

        shippingCustomFields.forEach((shippingCustomField) => {
            address.customFields.some((addressCustomField) => {
                if (addressCustomField.entityId === getFieldEntityId(shippingCustomField.id)) {
                    if (shippingCustomField.label === DELIVERY_INSTRUCTIONS_MAP.authorityToLeave) {
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

    return deliveryInstructions;
};

// BC REST FormField API returns field id in the format of 'field_26',
// BC Graphql Checkout returns customField with entityId: 26
const getFieldEntityId = (fieldId: string): number => {
    return Number(fieldId.replace('field_', ''));
};
