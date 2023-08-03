import { QueryResolvers } from '../../../meshrc/.mesh';
import { mockGetSocialLinks } from '../mocks/get-social-links';

export const getSocialLinksResolver: QueryResolvers['getSocialLinks'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockGetSocialLinks;
    },
};
