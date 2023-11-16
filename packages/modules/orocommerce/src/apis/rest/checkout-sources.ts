import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import {
    CheckoutSources,
    CreateCheckoutSourceArgs,
    CreateCheckoutSourceResponse,
    GetCheckoutSourcesArgs,
} from '../../types';
import { getSearchParamStringFromSearchParams } from '@aligent/utils';

@Injectable()
export class CheckoutSourcesClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getCheckoutSources(args: GetCheckoutSourcesArgs) {
        const searchParamsToString = getSearchParamStringFromSearchParams(args);

        const response = await this.apiClient.get<CheckoutSources>(
            `/checkoutsources${searchParamsToString}`
        );

        return response.data;
    }

    async createCheckoutSource(args: CreateCheckoutSourceArgs) {
        /* The usual "Content-Type" header for axios is "application/vnd.api+json".
         * For the "checkoutsources" post method to work we need to update this to "application/json" */
        const headers = { 'Content-Type': 'application/json' };

        const response = await this.apiClient.post<
            CreateCheckoutSourceResponse,
            CreateCheckoutSourceArgs
        >(`/checkoutsources`, args, { headers });

        return response;
    }
}
