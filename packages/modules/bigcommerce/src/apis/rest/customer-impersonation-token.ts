import { ModuleConfig } from '../../providers';
import { getDataFromMeshCache } from '../../utils';
import { CACHE_ITEMS_TTL, CACHE_KEY__CUSTOMER_IMPERSONATION_TOKEN } from '../../constants';
import { createCustomerImpersonationToken } from './client';

// The default "customer_impersonation_token" query TTL should one not be stored in "CACHE_ITEMS_TTL"
const QUERY_DEFAULT_TTL = CACHE_ITEMS_TTL?.[CACHE_KEY__CUSTOMER_IMPERSONATION_TOKEN] || 86400000;

// We time we extend the tokens' Time To Live (TTL) beyond the duration it's stored in the cache
const QUERY_TTL_BUFFER_IN_MILLISECONDS = 600000; // 10 minutes

/**
 * @deprecated since version 1.1.0, will be removed in version 2.0.0
 *
 * Use {@link BigCommerceTokenService} via dependency injection instead
 */
export const getCustomerImpersonationToken = async (context: GraphQLModules.ModuleContext) => {
    /* Gets the ttl from client specific projects context otherwise fallback to the default TLL */
    const tokenTtlInMilliseconds =
        context.injector.get(ModuleConfig)?.cacheItemsTtl?.[
            CACHE_KEY__CUSTOMER_IMPERSONATION_TOKEN
        ] || QUERY_DEFAULT_TTL;

    /* Not to be confused with the "customer_impersonation_token" cache TTL. This TTL
     * is formed to make the actually token last 10 minutes longer than the time we store it
     * in the cache. We do this to prevent getting caught with an expired "customer_impersonation_token"
     * mid-way through resolver requests. An example is the cart resolver is called and makes the first
     * request then the "customer_impersonation_token" expires making the second request fail. */
    const tokenTtlWithBuffer = tokenTtlInMilliseconds + QUERY_TTL_BUFFER_IN_MILLISECONDS;

    const currentTime = new Date().getTime();
    const currentDatePlusTokenTtl = new Date(currentTime + tokenTtlWithBuffer).getTime();
    const expiresAt = Number((currentDatePlusTokenTtl / 1000).toFixed(0));

    return createCustomerImpersonationToken(expiresAt);
};

/**
 * @deprecated since version 1.1.0, will be removed in version 2.0.0
 *
 * Use {@link BigCommerceTokenService} via dependency injection instead
 */
export const retrieveCustomerImpersonationTokenFromCache = async (
    context: GraphQLModules.ModuleContext
): Promise<string> => {
    const query = () => getCustomerImpersonationToken(context);

    return getDataFromMeshCache(context, CACHE_KEY__CUSTOMER_IMPERSONATION_TOKEN, query);
};
