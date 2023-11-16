import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { CheckoutSources } from '../../types';
import { getSearchParamStringFromSearchParams } from '@aligent/utils';

type CreateCheckoutSource = { deleted?: boolean; shoppingList: number };
type CreateCheckoutSourceResponse = { id?: number; deleted?: boolean; shoppingList?: number };

@Injectable()
export class CheckoutSourcesClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getCheckoutSources(args: { 'filter[shoppingList]': number; sort?: string }) {
        const searchParamsToString = getSearchParamStringFromSearchParams(args);

        const response = await this.apiClient.get<CheckoutSources>(
            `/checkoutsources${searchParamsToString}`
        );

        return response.data;
    }

    async createCheckoutSource(args: CreateCheckoutSource) {
        /* The usual "Content-Type" header for axios is "application/vnd.api+json".
         * For the "checkoutsources" post method to work we need to update this to "application/json" */
        const headers = { 'Content-Type': 'application/json' };

        const response = await this.apiClient.post<
            CreateCheckoutSourceResponse,
            CreateCheckoutSource
        >(`/checkoutsources`, args, { headers });

        return response;
    }
}
