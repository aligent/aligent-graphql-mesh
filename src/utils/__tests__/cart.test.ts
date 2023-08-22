import { createCartItemUid, getDeconstructedCartItemUid } from '../cart';

const cartItemUidParts = {
    lineItemEntityId: 'f84c1f76-8cf0-4543-b4d6-562a9cd56ca6',
    productEntityId: 492,
    variantEntityId: 513,
};

describe('cart', () => {
    test(`Returns a uid based on a cart items properties`, () => {
        expect(
            createCartItemUid(
                cartItemUidParts.lineItemEntityId,
                cartItemUidParts.productEntityId,
                cartItemUidParts.variantEntityId
            )
        ).toEqual('Zjg0YzFmNzYtOGNmMC00NTQzLWI0ZDYtNTYyYTljZDU2Y2E2LzQ5Mi81MTM=');
    });

    test(`Can decode a generated cartItemUid`, () => {
        expect(
            getDeconstructedCartItemUid(
                'Zjg0YzFmNzYtOGNmMC00NTQzLWI0ZDYtNTYyYTljZDU2Y2E2LzQ5Mi81MTM='
            )
        ).toEqual(cartItemUidParts);
    });

    test(`Can decode a generated cartItemUid without the variantId`, () => {
        expect(
            getDeconstructedCartItemUid('Zjg0YzFmNzYtOGNmMC00NTQzLWI0ZDYtNTYyYTljZDU2Y2E2LzQ5Mg==')
        ).toEqual({
            lineItemEntityId: 'f84c1f76-8cf0-4543-b4d6-562a9cd56ca6',
            productEntityId: 492,
            variantEntityId: null,
        });
    });
});
