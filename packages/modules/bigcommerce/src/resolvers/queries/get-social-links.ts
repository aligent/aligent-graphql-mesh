import { getSocialLinks } from '../../apis/graphql/channel';
import { getTransformedSocialLinks } from '../../factories/transform-social-links';
import { QueryResolvers } from '@aligent/bigcommerce-resolvers';

export const getSocialLinksResolver: QueryResolvers['getSocialLinks'] = {
    resolve: async (_root, _args, context, _info) => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const response = await getSocialLinks(customerImpersonationToken);
        return getTransformedSocialLinks(response);
    },
};
