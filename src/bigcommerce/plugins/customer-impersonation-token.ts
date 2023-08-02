import { useExtendContext } from '@envelop/core';
import { createCustomerImpersonationToken } from '../resolvers/requests/bc-rest-calls';
import { getDecodedCustomerImpersonationToken, getDecodedMeshToken } from '../../utils/tokens';
import { getUnixTimeStampInSeconds } from '../../utils/time-and-date';

export const useExtendContextPlugin = useExtendContext(async (context) => {
    if (!context.cache.customerImpersonationToken) {
        const unixTimeStampNowAdd24Hours = getUnixTimeStampInSeconds(24);

        context.cache.customerImpersonationToken = await createCustomerImpersonationToken(
            unixTimeStampNowAdd24Hours
        );
    } else {
        const unixTimeStampNowAdd24Hours = getUnixTimeStampInSeconds(24);
        const unixTimeStampNowInSeconds = Math.round(Date.now() / 1000);

        const decodedCustomerImpersonationToken = getDecodedCustomerImpersonationToken(
            context.cache.customerImpersonationToken
        );

        // Checking if token is expired and if so refreshing
        if (decodedCustomerImpersonationToken.eat < unixTimeStampNowInSeconds) {
            context.cache.customerImpersonationToken = await createCustomerImpersonationToken(
                unixTimeStampNowAdd24Hours
            );
        }
    }

    context.headers.customerImpersonationToken = `bearer ${context.cache.customerImpersonationToken}`;

    if (context.headers['mesh-token']) {
        const { bc_customer_id } = getDecodedMeshToken(context.headers['mesh-token']);
        context.headers['x-bc-customer-id'] = bc_customer_id;
    }
});
