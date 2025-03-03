import { BCConsignment, BCDiscount, BCOrder, BCOrderLineItem } from '../../types';
import { bcGet, bcPaginate } from './client';

const ORDERS_API = `/v2/orders`;

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

/**
 * https://developer.bigcommerce.com/docs/rest-management/orders/order-consignments#get-consignments
 */
export const getConsignments = async (id: string): Promise<BCConsignment> => {
    return bcGet(`${ORDERS_API}/${id}/consignments`);
};

/**
 * https://api.bigcommerce.com/stores/{{store_hash}}/v2/orders/133/coupons
 */
export const getDiscounts = async (id: string): Promise<BCDiscount[]> => {
    return bcGet(`${ORDERS_API}/${id}/coupons`);
};
