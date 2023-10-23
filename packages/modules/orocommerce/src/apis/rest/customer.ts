import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { Customer, CustomerUser, CustomerAddresses } from '../../types';

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

    async createCustomerAddresses(customerAddress: CustomerAddresses): Promise<CustomerAddresses> {
        const response = await this.apiClient.post<CustomerAddresses, { data: CustomerAddresses }>(
            `/customeruseraddresses`,
            { data: customerAddress }
        );
        return response;
    }
}
