import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { StoreUrl } from '../../providers';
import { Auth } from '../../services/auth';

// @TOOO: Set version based on NPM package version
export const USER_AGENT = 'AligentMesh / 0.0.1';
const API_PATH = '/api';

@Injectable()
export class ApiClient {
    protected client: AxiosInstance;

    constructor(
        @Inject(forwardRef(() => StoreUrl)) protected storeUrl: string,
        @Inject(forwardRef(() => Auth)) protected auth: Auth
    ) {
        this.client = axios.create({
            baseURL: storeUrl + API_PATH,
            headers: {
                'User-Agent': USER_AGENT,
                'Content-Type': 'application/vnd.api+json',
                ...(auth.isLoggedIn() && { authorization: auth.getAuthHeader() }),
            },
        });

        // Log all errors and their response payloads
        this.client.interceptors.response.use(
            (response) => response,
            (error) => {
                if (axios.isAxiosError(error)) {
                    console.log(error.message);
                    if (error.response) {
                        console.error(error.toJSON());
                    }
                } else {
                    console.error(error);
                }

                return Promise.reject(error);
            }
        );
    }

    async get<T, D = undefined>(url: string, config?: AxiosRequestConfig) {
        const response = await this.client.get<{ data: T; included?: D }>(url, config);
        return response.data;
    }

    async post<T, D = void>(url: string, data?: D, config?: AxiosRequestConfig) {
        const response = await this.client.post<T, AxiosResponse<T>, D>(url, data, config);
        return response.data;
    }

    async patch<T, D = void>(url: string, data?: D, config?: AxiosRequestConfig) {
        const response = await this.client.patch<T, AxiosResponse<T>, D>(url, data, config);
        return response.data;
    }

    async put<T, D = void>(url: string, data?: D, config?: AxiosRequestConfig) {
        const response = await this.client.put<T, AxiosResponse<T>, D>(url, data, config);
        return response.data;
    }

    async delete(url: string, config?: AxiosRequestConfig) {
        const response = await this.client.delete(url, config);
        // No body is returned for a delete, if the status code is 204 then it succeeded
        return response.status == 204;
    }

    /**
     * Generator function to iterate over a paginated API result
     * @param url
     * @param config
     */
    async *paginate(
        url: string,
        config?: AxiosRequestConfig
    ): AsyncGenerator<AxiosResponse['data']> {
        let configPaginated = config;
        if (!configPaginated) {
            configPaginated = {
                params: {
                    page: {
                        number: 1,
                        size: 50,
                    },
                },
            };
        }

        while (configPaginated.params.page.number >= 1) {
            const response = await this.client.get(url, configPaginated);
            const items = response.data.data;
            if (items.length === 0) {
                break;
            }
            for (const item of items) {
                yield item;
            }
            configPaginated.params.page.number++;
        }
    }
}
