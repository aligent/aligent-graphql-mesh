import { getSocialLinks } from '../../apis/graphql/channel';
import { getTransformedSocialLinks } from '../../factories/transform-social-links';
import { QueryResolvers } from '@mesh';

export const getSocialLinksResolver: QueryResolvers['getSocialLinks'] = {
    resolve: async (_root, _args, _context, _info) => {
        const response = await getSocialLinks();
        return getTransformedSocialLinks(response);
    },
};
