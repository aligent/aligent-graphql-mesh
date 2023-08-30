import { getDecodedCustomerImpersonationToken } from '@aligent/utils';
import { getUnixTimeStampInSeconds } from '@aligent/utils';
import { createCustomerImpersonationToken } from '../apis/rest/client';
import { Middleware, MiddlewareContext } from 'graphql-modules';

export const setCustomerImpersonationToken: Middleware = async (
    { context }: MiddlewareContext,
    next
) => {
    if (!(await context.cache.get('customerImpersonationToken'))) {
        const unixTimeStampNowAdd24Hours = getUnixTimeStampInSeconds({ additionalHours: 24 });

        context.cache.set(
            'customerImpersonationToken',
            await createCustomerImpersonationToken(unixTimeStampNowAdd24Hours)
        );
    } else {
        const unixTimeStampNowAdd24Hours = getUnixTimeStampInSeconds({ additionalHours: 24 });
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

    return next();
};
