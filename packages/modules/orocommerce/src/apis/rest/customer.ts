import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { Customer, CustomerUser, OroCustomerAddress, OroCustomerAddressInput } from '../../types';

@Injectable()
export class CustomerClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getCustomer(id: string): Promise<Customer> {
        const response = await this.apiClient.get<Customer>(`/customers/${id}`);
        return response.data;
    }

    async createCustomerUser(customerUser: CustomerUser): Promise<CustomerUser> {
        const response = await this.apiClient.post<{ data: CustomerUser }, { data: CustomerUser }>(
            `/customerusers`,
            { data: customerUser }
        );
        return response.data;
    }

    async deleteCustomerAddress(id: number): Promise<boolean> {
        const response = await this.apiClient.delete(`/customeruseraddresses/${id}`);
        return response;
    }

    async createCustomerAddress(customerAddress: OroCustomerAddress): Promise<OroCustomerAddress> {
        const response = await this.apiClient.post<
            { data: OroCustomerAddress },
            { data: OroCustomerAddressInput }
        >(`/customeruseraddresses`, { data: customerAddress });
        return response.data;
    }

    async updateCustomerAddresses(
        customerAddress: OroCustomerAddress
    ): Promise<OroCustomerAddress> {
        const response = await this.apiClient.patch<
            { data: OroCustomerAddress },
            { data: OroCustomerAddress }
        >(`/customeruseraddresses/${customerAddress.id}`, { data: customerAddress });
        return response.data;
    }
}
