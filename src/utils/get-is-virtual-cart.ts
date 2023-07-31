import { BC_Cart, Maybe, Scalars } from '../meshrc/.mesh';

/**
 * Indicates if the cart only has virtual items
 * @param cart
 */
export const getIsVirtualCart = (cart: Maybe<BC_Cart> | undefined): Scalars['Boolean'] => {
    if (!cart) return false;

    const { customItems, digitalItems, giftCertificates, physicalItems } = cart.lineItems || {
        digitalItems: [],
        customItems: [],
        giftCertificates: [],
        physicalItems: [],
    };

    const hasDigitalItems = digitalItems.length > 0;
    const hasNoPhysicalItems = [customItems, giftCertificates, physicalItems].every(
        items => items.length === 0
    );

    return hasDigitalItems && hasNoPhysicalItems;
};
