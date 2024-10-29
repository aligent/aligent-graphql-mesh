import { Injectable, ExecutionContext, Inject, forwardRef } from 'graphql-modules';
import { BigCommerceModuleConfig } from '..';
import { ModuleConfig } from '../providers';
import { verify } from 'jsonwebtoken';
import { MeshToken } from '../types';
import { GraphqlError } from '@aligent/utils';

// Private key used to sign Mesh tokens
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;

@Injectable({ global: true })
export class BigCommerceCustomerService {
    @ExecutionContext() private context: ExecutionContext;

    constructor(@Inject(forwardRef(() => ModuleConfig)) private config: BigCommerceModuleConfig) {}

    private constructCustomerIdResponse(
        data: { value: number } | { value: undefined; message: string }
    ) {
        const { value } = data;
        return {
            get valueOrUndefined() {
                return value;
            },
            get valueOrError() {
                if (value === undefined) {
                    throw new GraphqlError(data.message, 'authentication');
                }

                return value;
            },
        };
    }

    /**
     * Extracts the customer id for the current request. It returns an object
     * presenting two ways to get the value of the id. Each will return the
     * customer id if successfully extracted, but behave differently extraction
     * failed:
     *
     * * valueOrUndefined - Returns undefined. Use when a customer id is not strictly required.
     * * valueOrError - Throws an error.
     * @returns {Object}
     */
    get customerId(): ReturnType<typeof this.constructCustomerIdResponse> {
        try {
            const token = this.context.headers.authorization;

            if (!token || !token.toLowerCase().startsWith('bearer ')) {
                return this.constructCustomerIdResponse({
                    value: undefined,
                    message: 'Need to send Bearer token',
                });
            }

            const splitMeshToken = token.split(' ')[1];

            const decodedMeshToken = verify(splitMeshToken, JWT_PRIVATE_KEY) as MeshToken;
            return this.constructCustomerIdResponse({
                value: decodedMeshToken.bc_customer_id,
            });
        } catch (error) {
            /* For whatever reason decrypting the meshToken fails, send an error which
             * will trigger the PWA to end the browsers user session
             *
             * possible error.messages 'jwt expired', 'jwt malformed', 'invalid signature'
             *
             * @external https://www.npmjs.com/package/jsonwebtoken#errors--codes
             * */

            return this.constructCustomerIdResponse({
                value: undefined,
                message: 'User session has expired',
            });
        }
    }

    /**
     * Returns preformatted x-bc-customer-id headers for GraphQL requests
     * If no customer id is available, returns an empty object
     */
    get customerHeaders() {
        const id = this.customerId.valueOrUndefined;
        return {
            ...(id && { 'x-bc-customer-id': id }),
        };
    }
}
