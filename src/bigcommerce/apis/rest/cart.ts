export const EMPTY_CART_ID = 'empty-cart-id';

/**
 * We will just return fake empty cart ID as BC GraphQL doesn't support empty cart yet
 */
export const createEmptyCart = async (): Promise<string> => {
    return EMPTY_CART_ID;
};
