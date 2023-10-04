import { Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { Currency } from '../../types';
import {oroCurrency} from "../../factories/__tests__/__data__/currency-input-data";

@Injectable()
export class CurrencyClient {
    protected apiClient: ApiClient;
    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    async getCurrency(): Promise<Currency[]> {

        // return this.apiClient.get<Currency[]>(`/currency/`);

        return new Promise((resolve, _) => {
            resolve(oroCurrency);
        });
    }

}
