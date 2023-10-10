import { Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { Currency } from '../../types';

@Injectable()
export class CurrencyClient {
    protected apiClient: ApiClient;
    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    async getCurrency(id: string): Promise<Currency> {
        const response = await this.apiClient.get<Currency>(`/currencies/${id}`);
        return response.data;
    }
}
