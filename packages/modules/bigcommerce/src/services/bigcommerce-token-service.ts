import { ExecutionContext, forwardRef, Inject, Injectable } from 'graphql-modules';

import { CACHE_ITEMS_TTL, CACHE_KEY__CUSTOMER_IMPERSONATION_TOKEN } from '../constants';
import { ModuleConfig } from '../providers';
import {
    BigCommerceModuleConfig,
    createCustomerImpersonationToken,
    getDataFromMeshCache,
} from '..';
import { getUnixTimeStampInSecondsForMidnightTonight } from '@aligent/utils';
import { sign } from 'jsonwebtoken';

// The default "customer_impersonation_token" query TTL if one isn't provided by Module Config
const QUERY_DEFAULT_TTL = CACHE_ITEMS_TTL[CACHE_KEY__CUSTOMER_IMPERSONATION_TOKEN];

// We time we extend the tokens' Time To Live (TTL) beyond the duration it's stored in the cache
const QUERY_TTL_BUFFER_IN_MILLISECONDS = 10 * 60 * 1000; // minutes x seconds/min x ms/second

// Private key used to sign Mesh tokens
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;

@Injectable({ global: true })
export class BigCommerceTokenService {
    @ExecutionContext() private context: ExecutionContext;

    private tokenTtlInMilliseconds: number;

    constructor(@Inject(forwardRef(() => ModuleConfig)) private config: BigCommerceModuleConfig) {
        /* Gets the ttl from client specific projects context otherwise fallback to the default TLL */
        const cacheTtlInMilliseconds =
            this.config.cacheItemsTtl?.[CACHE_KEY__CUSTOMER_IMPERSONATION_TOKEN] ||
            QUERY_DEFAULT_TTL;

        /* Not to be confused with the "customer_impersonation_token" cache TTL.
         * This TTL ensures the token itself lasts longer than the time we store it in the cache.
         * We do this to prevent getting caught with an expired "customer_impersonation_token"
         * mid-way through resolver requests. An example is the cart resolver is called and makes the first
         * request then the "customer_impersonation_token" expires making the second request fail. */
        this.tokenTtlInMilliseconds = cacheTtlInMilliseconds + QUERY_TTL_BUFFER_IN_MILLISECONDS;
    }

    private requestNewCustomerImpersonationToken = () => {
        const currentTime = new Date().getTime();
        const currentDatePlusTokenTtl = new Date(
            currentTime + this.tokenTtlInMilliseconds
        ).getTime();
        const expiresAt = Number((currentDatePlusTokenTtl / 1000).toFixed(0));
        return createCustomerImpersonationToken(expiresAt);
    };

    /**
     * A BigCommerce token allowing server-to-server requests as any customer
     *
     * - anonymous customer if used by itself
     * - a specific customer account if paired with the `x-bc-customer-id` header
     *
     *
     * The value will be retrieved from the cache if possible, otherwise a new
     * token will be generated and cached
     *
     * @example
     * ```
     * const customerImpersonationToken =
            await context.injector.get(BigCommerceTokenService).customerImpersonationToken;
            const cartHeader = {
            Authorization: `Bearer ${customerImpersonationToken}`,
            ...(bcCustomerId && { 'x-bc-customer-id': bcCustomerId }),
        };
        const response = await bcGraphQlRequest(createCartQuery, cartHeader);
        ```
     *
     * @external https://developer.bigcommerce.com/docs/start/authentication/graphql-storefront#customer-impersonation-tokens
     */
    get customerImpersonationToken() {
        return getDataFromMeshCache(
            this.context,
            CACHE_KEY__CUSTOMER_IMPERSONATION_TOKEN,
            this.requestNewCustomerImpersonationToken
        );
    }

    /**
     * Creates a signed JWT containing a customer's bc_customer_id in the payload
     * which can then be provided to the mesh to allow requests as that user
     *
     * @param {number} customerId - Bc User Id returned from logging in
     */
    generateMeshToken(customerId: number) {
        const payload = {
            bc_customer_id: customerId,
            exp: getUnixTimeStampInSecondsForMidnightTonight(),
        };

        return sign(payload, JWT_PRIVATE_KEY);
    }
}
