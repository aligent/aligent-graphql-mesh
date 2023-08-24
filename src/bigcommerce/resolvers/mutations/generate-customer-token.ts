import { sign } from 'jsonwebtoken';
import { MutationResolvers } from '@mesh';
import { bcLogin } from '../../apis/graphql/login';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;

const generateMeshToken = (entityId: number): string => {
    const payload = {
        bc_customer_id: entityId,
    };

    return sign(payload, JWT_PRIVATE_KEY, { expiresIn: '1d' });
};

export const generateCustomerTokenResolver: MutationResolvers['generateCustomerToken'] = {
    resolve: async (_root, args, context, _info) => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const entityId = await bcLogin(args.email, args.password, customerImpersonationToken);

        return {
            token: generateMeshToken(entityId),
        };
    },
};
