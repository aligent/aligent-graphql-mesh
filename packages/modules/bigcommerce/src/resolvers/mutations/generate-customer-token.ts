import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { bcLogin } from '../../apis/graphql/login';
import { BigCommerceTokenService } from '../../services/bigcommerce-token-service';

export const generateCustomerTokenResolver: MutationResolvers['generateCustomerToken'] = {
    resolve: async (_root, args, context, _info) => {
        const tokenService = context.injector.get(BigCommerceTokenService);

        const customerImpersonationToken = await tokenService.customerImpersonationToken;
        const entityId = await bcLogin(args.email, args.password, customerImpersonationToken);
        const token = tokenService.generateMeshToken(entityId);

        return {
            token,
        };
    },
};
