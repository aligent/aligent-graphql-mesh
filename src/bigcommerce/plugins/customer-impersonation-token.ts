import { useExtendContext } from '@envelop/core';
import { createCustomerImpersonationToken } from '../resolvers/requests/bc-rest-calls';
import { DecodedCustomerImpersonationToken} from '../types';
import { JwtPayload, decode } from 'jsonwebtoken';
import { logAndThrowError } from '../resolvers/error-handling';

export const getUnixTimeStampInSeconds = (hours: number) => {
    const hoursInSeconds = 60 * 60 * hours; // sec * mins * hours
    const unixTimeStampNow = Math.round(Date.now() / 1000); // Need in secs not ms
    return unixTimeStampNow + hoursInSeconds;
};

const getDecodedCustomerImpersonationToken = (
    customerImpersonationToken: string
): DecodedCustomerImpersonationToken => {
    try {
        return decode(
            customerImpersonationToken
        ) as JwtPayload as DecodedCustomerImpersonationToken;
    } catch (error) {
        return logAndThrowError(`customerImpersonationToken could not be decoded ${error}`);
    }
};

let customerImpersonationToken = '';

export const useExtendContextPlugin = useExtendContext(async (context) => {
    if (customerImpersonationToken === '') {
        const unixTimeStampNowAdd24Hours = getUnixTimeStampInSeconds(24);

        customerImpersonationToken = await createCustomerImpersonationToken(
            unixTimeStampNowAdd24Hours
        );
    } else {
        const unixTimeStampNowAdd24Hours = getUnixTimeStampInSeconds(24);
        const unixTimeStampNowInSeconds = Math.round(Date.now() / 1000);

        const decodedCustomerImpersonationToken = getDecodedCustomerImpersonationToken(
            customerImpersonationToken
        );

        // Checking if token is expired and if so refreshing
        if (decodedCustomerImpersonationToken.eat < unixTimeStampNowInSeconds) {
            customerImpersonationToken = await createCustomerImpersonationToken(
                unixTimeStampNowAdd24Hours
            );
        }
    }

    context.headers.customerImpersonationToken = `bearer ${customerImpersonationToken}`;
});

