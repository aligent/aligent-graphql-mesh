import { QueryResolvers } from '@aligent/orocommerce-resolvers';

export const isEmailAvailableResolver: QueryResolvers['isEmailAvailable'] = {
    resolve: async (_root, _args, _context, _info) => {
        return {
            is_email_available: false,
        };
    },
};
