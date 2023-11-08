import {
    CheckoutAddressNumberCustomField,
    CheckoutBillingAddress,
    CheckoutConsignmentAddress,
} from '@aligent/bigcommerce-operations';
import { BcStorefrontFormFields } from '../../types';
import { getFieldEntityId } from '@aligent/utils';

export const getTransformedRegionId = (
    address: CheckoutConsignmentAddress | CheckoutBillingAddress,
    formFields?: BcStorefrontFormFields
) => {
    let region_id = null;

    if (formFields && address) {
        const { shippingAddress: shippingCustomFields } = formFields;

        shippingCustomFields.forEach((shippingCustomField) => {
            address.customFields.some((addressCustomField) => {
                if (addressCustomField.entityId === getFieldEntityId(shippingCustomField.id)) {
                    if (shippingCustomField.label === 'region_id') {
                        region_id = (addressCustomField as CheckoutAddressNumberCustomField).number;
                    }
                }
            });
        });
    }

    return region_id;
};
