import {BCOrder, BCOrderLineItem} from '../../types';
import {bcGet, bcPaginate} from './client';

export const getOrder = async (id: string): Promise<BCOrder> => {
    return bcGet(`/v2/orders/${id}`);
}

/**
 * Creates a generator to loop over all the line items of an order
 */
export const getLineItems = async function* (id: string): AsyncGenerator<BCOrderLineItem> {
    yield* await bcPaginate(`/v2/orders/${id}/products`);
}
