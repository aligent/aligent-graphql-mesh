import { Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { Customer } from '../../types';

@Injectable()
export class CustomerClient {
    protected apiClient: ApiClient;
    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    async getCustomer(id: string): Promise<Customer> {
        return this.apiClient.get<Customer>(`/customers/${id}`);
    }
}
