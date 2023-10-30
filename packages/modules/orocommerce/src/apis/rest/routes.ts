import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { ApiClient } from './client';
import { Routes } from '../../types/routes';
import axios from 'axios';
import { logAndThrowError } from '@aligent/utils';

const ROUTE_URL = '/routes';

@Injectable()
export class RoutesClient {
    constructor(@Inject(forwardRef(() => ApiClient)) protected apiClient: ApiClient) {}

    async getRoutes(id: string): Promise<Routes | null> {
        try {
            const response = await this.apiClient.get<Routes>(`${ROUTE_URL}/${id}`);

            return response.data;
        } catch (error) {
            const is404 =
                axios.isAxiosError(error) &&
                error?.response?.data?.errors &&
                error.response.data.errors.some(
                    (error: { status: string; title: string }) => error.status === '404'
                );

            /* The PWA is expecting "null" to be returned when there's a 404 error.
             * This will prompt it to query the "no-route" page*/
            return is404 ? null : logAndThrowError(error);
        }
    }
}
