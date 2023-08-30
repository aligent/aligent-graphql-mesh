import { CartRedirectUrls } from '../../types';
import { bcPost } from './client';

/**
 * @Deprecated We will just return empty string as empty cart ID since BC GraphQL doesn't support empty cart yet
 */
export const createEmptyCart = async (): Promise<string> => {
    return '';
};

export const createCartRedirectUrls = async (cartId: string): Promise<CartRedirectUrls> => {
    const response = await bcPost(`/v3/carts/${cartId}/redirect_urls`);

    return response.data;
};
