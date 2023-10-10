import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { Customer } from '../../types';

@Injectable()
export class CustomerClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getCustomer(id: string): Promise<Customer> {
        const response = await this.apiClient.get<Customer>(`/customers/${id}`);
        return response.data;
    }
}
