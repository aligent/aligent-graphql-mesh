import { useExtendContext } from '@envelop/core';
import { createCustomerImpersonationToken } from '../resolvers/requests/bc-rest-calls';
import { getDecodedCustomerImpersonationToken, getDecodedMeshToken } from '../../utils/tokens';
import { getUnixTimeStampInSeconds } from '../../utils/time-and-date';
import { OurContext } from '../types';

export const useExtendContextPlugin = useExtendContext(async (context: OurContext) => {
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

    context.headers.customerImpersonationToken = `bearer ${await context.cache.get(
        'customerImpersonationToken'
    )}`;
    if (context.headers['mesh-token']) {
        const { bc_customer_id } = getDecodedMeshToken(context.headers['mesh-token']);
        context.headers['x-bc-customer-id'] = bc_customer_id
    }
});
