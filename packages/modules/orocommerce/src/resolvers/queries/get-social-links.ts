import { QueryResolvers } from '@aligent/bigcommerce-resolvers';

export const getSocialLinksResolver: QueryResolvers['getSocialLinks'] = {
    resolve: async (_root, _args, context, _info) => {
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
