import { getActiveCheckoutSourcesFromShoppingListId } from '../checkout-sources';
import { checkoutSources } from '../../../__data__/checkout-sources';

describe('checkout-sources', () => {
    it('Returns checkout sources matching to shopping list id', () => {
        const matchingSource = getActiveCheckoutSourcesFromShoppingListId(checkoutSources, 67);
        expect(matchingSource).toEqual([checkoutSources[1]]);
    });

    it('Returns an empty array if "checkoutSources" is an empty array', () => {
        const matchingSource = getActiveCheckoutSourcesFromShoppingListId([], 67);
        expect(matchingSource).toEqual([]);
    });

    it(`Returns an empty array if "checkoutSources" can't be found matching the shopping list id`, () => {
        const matchingSource = getActiveCheckoutSourcesFromShoppingListId(checkoutSources, 167);
        expect(matchingSource).toEqual([]);
    });
});
