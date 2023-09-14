import { BCConsignment, BCOrder, BCOrderLineItem } from '../../types';
import { bcGet, bcPaginate } from './client';

const ORDERS_API = `/v2/orders`;

//TODO: MICRO-183: add customer id as filter for security, otherwise any order can be fetched by any customer
/**
 * https://developer.bigcommerce.com/docs/rest-management/orders#get-an-order
 */
export const getOrder = async (id: string): Promise<BCOrder> => {
    return bcGet(`${ORDERS_API}/${id}`);
};

/**
 * https://developer.bigcommerce.com/docs/rest-management/orders#get-all-orders
 */
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
 * https://developer.bigcommerce.com/docs/rest-management/orders/order-products#list-order-products
 */
export const getLineItems = async function* (id: string): AsyncGenerator<BCOrderLineItem> {
    yield* await bcPaginate(`${ORDERS_API}/${id}/products`);
};

export const getConsignments = async (id: string): Promise<BCConsignment> => {
    return bcGet(`${ORDERS_API}/${id}/consignments`);
};
