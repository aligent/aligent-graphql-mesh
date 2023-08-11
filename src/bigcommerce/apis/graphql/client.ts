/* istanbul ignore file */

import axios, { AxiosResponse } from 'axios';
import { logAndThrowUnknownError, throwAndLogAxiosError } from '../../../utils/error-handling';
import { GraphQlQuery } from '../../types';

const BC_GRAPHQL_API = process.env.BC_GRAPHQL_API as string;

// TODO: generic return type
export const bcGraphQlRequest = async (
    data: GraphQlQuery,
    headers: { Authorization: string }
): Promise<AxiosResponse['data']> => {
    try {
        const response = await axios.post(BC_GRAPHQL_API, data, { headers });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throwAndLogAxiosError(error, bcGraphQlRequest.name);
        } else {
            logAndThrowUnknownError(bcGraphQlRequest.name);
        }
    }
};
