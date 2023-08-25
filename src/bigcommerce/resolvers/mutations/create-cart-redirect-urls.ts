import { MutationResolvers } from '@mesh';
import { getBcCustomerId } from '../../../utils';

export const createCartRedirectUrlsResolver: MutationResolvers['createCartRedirectUrls'] = {
    resolve: async (root, args, context, info) => {
        console.log(args);

        const cartRedirectUrls =
            await context.BigCommerceManagementRestApi.Mutation.createCartRedirectUrls({
                root,
                args,
                context,
                info,
            });

        if (!cartRedirectUrls) return null;

        // Guest User dont need to update jwt for redirect
        const bcCustomerId = getBcCustomerId(context);
        if(!bcCustomerId){
            return cartRedirectUrls;
        }

        console.log(bcCustomerId);

        
        return cartRedirectUrls;
    },
};
