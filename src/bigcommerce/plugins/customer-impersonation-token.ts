import { useExtendContext } from '@envelop/core';
import { createCustomerImpersonationToken } from '../resolvers/requests/bc-rest-calls';
import { getDecodedCustomerImpersonationToken } from '../../utils/tokens';
import { getUnixTimeStampInSeconds } from '../../utils/time-and-date';

export const useExtendContextPlugin = useExtendContext(async (context) => {
    if (!await context.cache.get('customerImpersonationToken')) {
        const unixTimeStampNowAdd24Hours = getUnixTimeStampInSeconds(24);

        context.cache.set(
            'customerImpersonationToken',
            await createCustomerImpersonationToken(unixTimeStampNowAdd24Hours)
        );
    } else {
        const unixTimeStampNowAdd24Hours = getUnixTimeStampInSeconds(24);
        const unixTimeStampNowInSeconds = Math.round(Date.now() / 1000);

        const decodedCustomerImpersonationToken = getDecodedCustomerImpersonationToken(
            await context.cache.get('customerImpersonationToken')
        );

        // Checking if token is expired and if so refreshing
        if (decodedCustomerImpersonationToken.eat < unixTimeStampNowInSeconds) {
            context.cache.set(
                'customerImpersonationToken',
                await createCustomerImpersonationToken(unixTimeStampNowAdd24Hours)
            );
        }
    }

});
