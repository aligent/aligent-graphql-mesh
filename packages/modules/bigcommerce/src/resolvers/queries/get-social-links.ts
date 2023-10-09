import { retrieveStoreConfigsFromCache } from '../../apis/graphql';
import { getTransformedSocialLinks } from '../../factories/transform-social-links';
import { QueryResolvers } from '@aligent/bigcommerce-resolvers';

export const getSocialLinksResolver: QueryResolvers['getSocialLinks'] = {
    resolve: async (_root, _args, context, _info) => {
        const { socialMediaLinks } = await retrieveStoreConfigsFromCache(context);

        return getTransformedSocialLinks(socialMediaLinks);
    },
};
