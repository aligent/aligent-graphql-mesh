import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { Entity, Order } from '../../types';
import { OroOrderLineItem } from '../../types/order-line-item';

@Injectable()
export class OrdersClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getOrders() {
        return this.apiClient.get<Order[], Entity[]>('/orders', {
            params: {
                include:
                    'billingAddress,shippingAddress,billingAddress.country,billingAddress.region,shippingAddress.country,shippingAddress.region,lineItems',
            },
        });
    }

    getOrderLineItems(orderNumber: number): AsyncGenerator<{ data: OroOrderLineItem[] }> {
        const url = `/orders/${orderNumber}/lineItems`;
        const params = {
            page: {
                number: 1,
                size: 250,
            },
            sort: 'id',
        };
        return this.apiClient.paginate<OroOrderLineItem>(url, { params });
    }
}
