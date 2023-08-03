import { bcLogin } from '../requests/bc-graphql-calls';
import { sign } from 'jsonwebtoken';
import { MutationResolvers } from '../../../meshrc/.mesh';
import { CustomContext } from '../../types';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;

const generateMeshToken = (entityId: number): string => {
    const payload = {
        bc_customer_id: entityId,
    };

    return sign(payload, JWT_PRIVATE_KEY, { expiresIn: '1d' });
};

export const generateCustomerTokenResolver: MutationResolvers<CustomContext>['generateCustomerToken'] = {
    resolve: async (_root, args, context, _info) => {
        const customerImpersonationToken = await context.cache.get('customerImpersonationToken');

        const entityId = await bcLogin(customerImpersonationToken, args.email, args.password);

        return {
            token: generateMeshToken(entityId),
        };
    },
};
