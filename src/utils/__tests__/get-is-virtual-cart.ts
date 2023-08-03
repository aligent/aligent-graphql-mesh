import { getIsVirtualCart } from '../get-is-virtual-cart';
import { BC_CartDigitalItem, BC_CartPhysicalItem } from '../../meshrc/.mesh';

const lineItems = {
    digitalItems: [],
    customItems: [],
    giftCertificates: [],
    physicalItems: [],
    totalQuantity: 1,
};

describe('get-is-virtual-cart', () => {
    test(`returns false if line items is undefined`, () => {
        expect(getIsVirtualCart(undefined)).toEqual(false);
    });

    test(`returns false if the lineItems items are all empty`, () => {
        expect(getIsVirtualCart(lineItems)).toEqual(false);
    });

    test(`returns true when there's only digital items`, () => {
        expect(
            getIsVirtualCart({ ...lineItems, digitalItems: [{} as BC_CartDigitalItem] })
        ).toEqual(true);
    });

    test(`returns false when there's digital items and another type of time`, () => {
        expect(
            getIsVirtualCart({
                ...lineItems,
                digitalItems: [{} as BC_CartDigitalItem],
                physicalItems: [{} as BC_CartPhysicalItem],
            })
        ).toEqual(false);
    });
});
