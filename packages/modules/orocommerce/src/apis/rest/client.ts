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

    async get<T>(url: string, config?: AxiosRequestConfig) {
        const response = await this.client.get<{ data: T }>(url, config);
        return response.data;
    }
    async post<T, D = void>(url: string, data?: D, config?: AxiosRequestConfig) {
        const response = await this.client.post<{ data: T }, AxiosResponse<{ data: T }>, D>(
            url,
            data,
            config
        );
        return response.data.data;
    }

    async patch<T, D = void>(url: string, data?: D, config?: AxiosRequestConfig) {
        const response = await this.client.patch<{ data: T }, AxiosResponse<{ data: T }>, D>(
            url,
            data,
            config
        );
        return response.data.data;
    }

    async put<T, D = void>(url: string, data?: D, config?: AxiosRequestConfig) {
        const response = await this.client.put<{ data: T }, AxiosResponse<{ data: T }>, D>(
            url,
            data,
            config
        );
        return response.data.data;
    }

    async delete(url: string, config?: AxiosRequestConfig) {
        const response = await this.client.delete(url, config);
        // No body is returned for a delete, if the status code is 204 then it succeeded
        return response.status == 204;
    }
}
