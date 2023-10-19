import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { Entity, Order } from '../../types';

@Injectable()
export class OrdersClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getOrders() {
        return this.apiClient.get<Order[], Entity[]>('/orders', {
            params: {
                include:
                    'billingAddress,shippingAddress,billingAddress.country,billingAddress.region,shippingAddress.country,shippingAddress.region,',
            },
        });
    }
}
