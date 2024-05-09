import {
    CartLineItems,
    CheckoutShippingConsignmentInput,
    AddCheckoutShippingConsignmentsInput,
    UpdateCheckoutShippingConsignmentInput,
} from '@aligent/bigcommerce-operations';
import { ShippingAddressInput } from '@aligent/bigcommerce-resolvers';

const getTransformedShippingConsignmentInput = (
    acShippingAddress: ShippingAddressInput,
    bcCartLineItems: CartLineItems
): CheckoutShippingConsignmentInput => {
    //TODO: Need to handle authorityToLeave, deliveryInstructions, customer_notes with custom fields later
    const { address } = acShippingAddress;

    const lineItems = bcCartLineItems.physicalItems.map((item) => {
        return {
            lineItemEntityId: item.entityId,
            quantity: item.quantity,
        };
    });

    return {
        address: {
            address1: address?.street[0],
            address2: address?.street[1],
            city: address?.city,
            company: address?.company,
            countryCode: address?.country_code || '',
            firstName: address?.firstname,
            lastName: address?.lastname,
            phone: address?.telephone,
            postalCode: address?.postcode,
            shouldSaveAddress: !!address?.save_in_address_book,
            stateOrProvince: address?.region,
            stateOrProvinceCode: address?.region,
        },
        lineItems,
    };
};

export const getTransformedAddShippingConsignmentArgs = (
    cartId: string,
    acShippingAddress: ShippingAddressInput,
    bcCartLineItems: CartLineItems
): AddCheckoutShippingConsignmentsInput => {
    return {
        checkoutEntityId: cartId,
        data: {
            consignments: [
                getTransformedShippingConsignmentInput(acShippingAddress, bcCartLineItems),
            ],
        },
    };
};

export const getTransformedUpdateShippingConsignmentArgs = (
    cartId: string,
    consignmentEntityId: string,
    acShippingAddress: ShippingAddressInput,
    bcCartLineItems: CartLineItems
): UpdateCheckoutShippingConsignmentInput => {
    return {
        checkoutEntityId: cartId,
        consignmentEntityId,
        data: {
            consignment: getTransformedShippingConsignmentInput(acShippingAddress, bcCartLineItems),
        },
    };
};
