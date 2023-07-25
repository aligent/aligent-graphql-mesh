import { getBcGraphqlToken } from '../lib/bc-calls';

export const generateCustomerTokenResolver = {
    resolve: async () => {
        const dateCreated = Math.round(new Date().getTime() / 1000);
        const dateEndAt = dateCreated + 86400; // Adding 1 day

        const data = {
            allowed_cors_origins: [],
            channel_id: 1,
            expires_at: dateEndAt,
        };

        const bcGraphqlToken = await getBcGraphqlToken(data);

        return {
            token: bcGraphqlToken,
        };
    },
};
