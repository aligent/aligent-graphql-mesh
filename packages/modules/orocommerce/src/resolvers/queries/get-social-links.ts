import { QueryResolvers } from '@aligent/orocommerce-resolvers';

export const getSocialLinksResolver: QueryResolvers['getSocialLinks'] = {
    resolve: async (_root, _args, _context, _info) => {
        // @todo get and return real data
        return [
            {
                name: 'twitter',
                destination: 'https://twitter.com/aligent',
                __typename: 'SocialLink',
            },
            {
                name: 'linkedIn',
                destination: 'https://www.linkedin.com/company/aligent-consulting',
                __typename: 'SocialLink',
            },
        ];
    },
};
