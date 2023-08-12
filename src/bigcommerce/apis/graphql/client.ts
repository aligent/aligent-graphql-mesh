/* istanbul ignore file */

import axios, { AxiosResponse } from 'axios';
import { logAndThrowError } from '../../../utils/error-handling';
import { GraphQlQuery } from '../../types';

const BC_GRAPHQL_API = process.env.BC_GRAPHQL_API as string;

// TODO: generic return type
export const bcGraphQlRequest = async (
    data: GraphQlQuery,
    headers: { Authorization: string }
): Promise<AxiosResponse['data']> => {
    return axios
        .post(BC_GRAPHQL_API, data, { headers })
        .then((resp) => resp.data)
        .catch('err');
};
