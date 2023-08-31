import { transformRestCartLineItems } from '../transform-rest-cart-line-items';
import { cartLineItem, restCartLineItemData } from './__data__/rest-cart-line-item-data';

describe('transform cart items to line items', () => {
    it('Cart contains multiple options   ', () => {
        expect(transformRestCartLineItems(restCartLineItemData)).toEqual(cartLineItem);
    });
});
