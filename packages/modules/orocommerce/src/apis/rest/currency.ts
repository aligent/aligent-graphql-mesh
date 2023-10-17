import {forwardRef, Inject, Injectable} from 'graphql-modules';
import { ApiClient } from './client';
import { OroCurrency } from '../../types';

@Injectable()
export class CurrencyClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getCurrency(id: string): Promise<OroCurrency> {
        const response = await this.apiClient.get<OroCurrency>(`/currencies/${id}`);
        return response.data;
    }
}
