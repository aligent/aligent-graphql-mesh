import { bcPost } from './client';

export const createEmptyCart = async (): Promise<string> => {
    const path = `/v3/carts`;
    const data = {
        line_items: [],
    };

    const response = await bcPost(path, data);
    return response.data.id;
};
