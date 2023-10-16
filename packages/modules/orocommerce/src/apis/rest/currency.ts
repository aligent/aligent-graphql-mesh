import { Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { OroCurrency } from '../../types';

@Injectable()
export class CurrencyClient {
    protected apiClient: ApiClient;
    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    async getCurrency(id: string): Promise<OroCurrency> {
        const response = await this.apiClient.get<OroCurrency>(`/currencies/${id}`);
        return response.data;
    }
}
