import { BCOrder, BCOrderLineItem } from '../../types';
import { bcGet, bcPaginate } from './client';

const ORDERS_API = `/v2/orders`;

//TODO JP: add customer id as filter for security, otherwise any order can be fetched by any customer
export const getOrder = async (id: string): Promise<BCOrder> => {
    return bcGet(`${ORDERS_API}/${id}`);
};

export const getAllOrders = async (bcCustomerId: number): Promise<BCOrder[]> => {
    const bcOrders: BCOrder[] = [];
    for await (const bcOrder of getOrdersPaginationGenerator(bcCustomerId)) {
        bcOrders.push(bcOrder);
    }

    return bcOrders;
};

const getOrdersPaginationGenerator = async function* (
    bcCustomerId: number
): AsyncGenerator<BCOrder> {
    yield* await bcPaginate(`${ORDERS_API}?customer_id=${bcCustomerId}&sort=date_created:desc`);
};

/**
 * Creates a generator to loop over all the line items of an order
 */
export const getLineItems = async function* (id: string): AsyncGenerator<BCOrderLineItem> {
    yield* await bcPaginate(`${ORDERS_API}/${id}/products`);
};
