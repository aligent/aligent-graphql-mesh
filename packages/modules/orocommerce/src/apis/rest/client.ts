import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HttpStatusCode } from 'axios';
import { Inject, Injectable, forwardRef } from 'graphql-modules';
import { StoreUrl } from '../../providers';
import { Auth } from '../../services/auth';
import { MetaAllowedTypes, ProductSearchMeta } from '../../types';
import { GraphqlError } from '@aligent/utils';
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

                    const response = error.response;
                    if (response) {
                        console.error(error.toJSON());
                    }

                    const graphqlErrorMessage = JSON.stringify({
                        statusCode: response?.status,
                        statusText: response?.statusText,
                        // Oro might return a response body even though it isn't a 200
                        // https://jsonapi.org/format/#errors-processing
                        data: response?.data,
                    });

                    const httpStatus = response?.status;
                    switch (httpStatus) {
                        // 400 errors - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses
                        case HttpStatusCode.BadRequest:
                            throw new GraphqlError('input', graphqlErrorMessage);
                        case HttpStatusCode.Unauthorized:
                        case HttpStatusCode.Forbidden:
                            throw new GraphqlError('authorization', graphqlErrorMessage);
                        case HttpStatusCode.NotFound:
                            throw new GraphqlError('no-such-entity', graphqlErrorMessage);
                        case HttpStatusCode.Conflict:
                            throw new GraphqlError('already-exists', graphqlErrorMessage);
                        case HttpStatusCode.InternalServerError:
                            throw new GraphqlError('server-internal-error', graphqlErrorMessage);
                        default:
                            throw new Error(graphqlErrorMessage);
                    }
                } else {
                    console.error(error);
                }
                return Promise.reject(error);
            }
        );
    }

    async get<T, D = undefined>(url: string, config?: AxiosRequestConfig) {
        const response = await this.client.get<{ data: T; included?: D; meta?: MetaAllowedTypes }>(
            url,
            config
        );
        // In Oro, by providing additional requests header parameters,
        // it is possible to retrieve additional information, such as the total number of records .
        // The X-Include request header can be used for such purposes.
        // https://doc.oroinc.com/api/http-header-specifics/#web-services-api-http-header-specifics
        // Move total count from response header to meta section of the response object for convenience
        if (!isNaN(response.headers['x-include-total-count'])) {
            if (response.data.meta === undefined) response.data.meta = {} as ProductSearchMeta;
            response.data.meta.totalRecordsCount = Number(
                response.headers['x-include-total-count']
            );
        }

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
    async *paginate<D, I = undefined>(
        url: string,
        config?: AxiosRequestConfig
    ): AsyncGenerator<{ data: D[]; included?: I[] }> {
        const pageConfig = {
            number: 1,
            size: 50,
        };

        // merge the parameters that are coming in with the default "page" setting
        const reqConfig = config || {};
        reqConfig.params =
            reqConfig.params?.page !== undefined
                ? reqConfig.params
                : { ...reqConfig.params, page: pageConfig };

        let hasNextPage = true;

        do {
            const response = await this.client.get<{
                data: D[];
                included?: I[];
                links: { next?: string };
            }>(url, reqConfig);
            yield response.data;
            reqConfig.params.page.number++;
            hasNextPage = response.data.links.next !== undefined;
        } while (hasNextPage);
    }
}
