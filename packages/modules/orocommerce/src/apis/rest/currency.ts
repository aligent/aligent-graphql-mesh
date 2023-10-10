import { Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { Currency } from '../../types';

@Injectable()
export class CurrencyClient {
    protected apiClient: ApiClient;
    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    async getCurrency(id: string): Promise<{ data: Currency; included?: null }> {
        return this.apiClient.get<Currency>(`/currencies/${id}`);
    }
}
