import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { MutationReorderItemsArgs } from '@aligent/orocommerce-resolvers';
import { OroOrderLineItem } from '../../types/order-line-item';

@Injectable()
export class ReorderItemsClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    /**
     * Move this method to OrdersClient
     * @param orderNumber
     * @returns
     */
    async getOrderLineItems(orderNumber: number): Promise<OroOrderLineItem[]> {
        const url = `/orders/${orderNumber}/lineItems`;
        const params = {
            page: {
                number: 1,
                size: 1000,
            },
            sort: 'id',
        };
        const res = await this.apiClient.get<OroOrderLineItem[]>(url, { params });
        return res.data;
    }
}

export class ReorderItemsClientArgsBuilder {
    static buildParams(args: MutationReorderItemsArgs): number {
        return Number(args.orderNumber);
    }
}
