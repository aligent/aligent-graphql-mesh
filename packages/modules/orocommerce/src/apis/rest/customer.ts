import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { Customer, CustomerUser, OroCustomerAddress } from '../../types';

@Injectable()
export class CustomerClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getCustomer(id: string): Promise<Customer> {
        const response = await this.apiClient.get<Customer>(`/customers/${id}`);
        return response.data;
    }

    async createCustomerUser(customerUser: CustomerUser): Promise<CustomerUser> {
        const response = await this.apiClient.post<CustomerUser, { data: CustomerUser }>(
            `/customerusers`,
            { data: customerUser }
        );
        return response;
    }

    async createCustomerAddress(customerAddress: OroCustomerAddress): Promise<OroCustomerAddress> {
        const response = await this.apiClient.post<
            { data: OroCustomerAddress },
            { data: OroCustomerAddress }
        >(`/customeruseraddresses`, { data: customerAddress });
        return response.data;
    }
}
