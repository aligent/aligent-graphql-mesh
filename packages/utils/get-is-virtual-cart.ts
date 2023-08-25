import { BC_CartLineItems } from '@mesh/external/BigCommerceGraphqlApi';
import { Scalars } from '../mesh/.mesh';

/**
 * Indicates if the cart only has virtual items
 * @param lineItems
 */
export const getIsVirtualCart = (lineItems: BC_CartLineItems | undefined): Scalars['Boolean'] => {
    if (!lineItems) return false;

    const { customItems, digitalItems, giftCertificates, physicalItems } = lineItems;
    const hasDigitalItems = digitalItems.length > 0;
    const hasNoPhysicalItems = [customItems, giftCertificates, physicalItems].every(
        (items) => !items || (items && items.length === 0)
    );

    return hasDigitalItems && hasNoPhysicalItems;
};
