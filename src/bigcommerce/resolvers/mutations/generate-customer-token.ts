import { getBcGraphqlToken } from '../requests/bc-rest-calls';
import { bcLogin } from '../requests/bc-graphql-calls';
import { sign } from 'jsonwebtoken';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;

const generateJwt = (bcToken: string, entityId: number): string => {
    const payload = {
        bc_token: bcToken,
        bc_customer_id: entityId,
    };

    return sign(payload, JWT_PRIVATE_KEY, { expiresIn: '1d' });
};

export const generateCustomerTokenResolver = {
    resolve: async (_root, args, _context, _info) => {
        let corsUrl: string | string[] = process.env.GRAPHQL_TOKEN_CORS_URL!
        const dateCreated = Math.round(new Date().getTime() / 1000);
        const dateEndAt = dateCreated + 86400; // Adding 1 day

        if(corsUrl === 'no-cors'){
            corsUrl = []
        } else {
            corsUrl = corsUrl.split(',') 
        }

        const data = {
            allowed_cors_origins: corsUrl,
            channel_id: 1,
            expires_at: dateEndAt,
        };

        const bcGraphqlToken = await getBcGraphqlToken(data);

        const entityId = await bcLogin(bcGraphqlToken, args.email, args.password);

        return {
            token: generateJwt(bcGraphqlToken, entityId),
        };
    },
};
