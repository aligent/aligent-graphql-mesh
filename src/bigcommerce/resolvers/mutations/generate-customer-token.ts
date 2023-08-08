import { sign } from 'jsonwebtoken';
import { MutationResolvers } from '../../../meshrc/.mesh';
import { bcLogin } from '../../apis/graphql/login';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;

const generateMeshToken = (entityId: number): string => {
    const payload = {
        bc_customer_id: entityId,
    };

    return sign(payload, JWT_PRIVATE_KEY, { expiresIn: '1d' });
};

export const generateCustomerTokenResolver: MutationResolvers['generateCustomerToken'] = {
    resolve: async (_root, args, _context, _info) => {
       // const customerImpersonationToken = await context.cache.get('customerImpersonationToken');

        const entityId = await bcLogin(args.email, args.password);

        return {
            token: generateMeshToken(entityId),
        };
    },
};
