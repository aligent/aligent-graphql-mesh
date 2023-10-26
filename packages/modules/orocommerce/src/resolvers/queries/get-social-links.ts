import { QueryResolvers } from '@aligent/bigcommerce-resolvers';

export const getSocialLinksResolver: QueryResolvers['getSocialLinks'] = {
    resolve: async (_root, _args, context, _info) => {
        // @todo get and return real data
        return [];
    },
};
