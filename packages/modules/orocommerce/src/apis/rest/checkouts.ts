import { forwardRef, Inject, Injectable } from 'graphql-modules';
import { ApiClient } from './client';
import { CreatedCheckout, CreateCheckoutsArgs, GetCheckouts } from '../../types';
import { getSearchParamStringFromSearchParams } from '@aligent/utils';
import { GetCheckoutsArgs } from '../../types';

const CHECKOUTS_API = '/checkouts';

@Injectable({
    global: true,
})
export class CheckoutsClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}
    async getCheckouts(args: GetCheckoutsArgs) {
        const searchParamsToString = getSearchParamStringFromSearchParams(args);

        const response = await this.apiClient.get<GetCheckouts>(
            `${CHECKOUTS_API}${searchParamsToString}`
        );

        return response.data;
    }

    async createCheckouts(args: CreateCheckoutsArgs) {
        /* The usual "Content-Type" header for axios is "application/vnd.api+json".
         * For the "checkoutsources" post method to work we need to update this to "application/json" */
        const headers = { 'Content-Type': 'application/json' };

        const response = await this.apiClient.post<CreatedCheckout, CreateCheckoutsArgs>(
            CHECKOUTS_API,
            args,
            { headers }
        );

        return response;
    }
}
