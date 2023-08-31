import { transformCartItemsToLineItems } from '../transform-cart-items-to-line-items';
import { bcCartLineItemsData, cartPhysicalItemsData } from './__data__/cart-physical-items-data';

describe('transform cart items to line items', () => {
    it('Cart contains multiple options   ', () => {
        expect(transformCartItemsToLineItems(cartPhysicalItemsData)).toEqual(bcCartLineItemsData);
    });
});
