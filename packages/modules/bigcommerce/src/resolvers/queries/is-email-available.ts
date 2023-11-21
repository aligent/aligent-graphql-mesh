import { QueryResolvers } from '@aligent/bigcommerce-resolvers';

export const isEmailAvailableResolver: QueryResolvers['isEmailAvailable'] = {
    resolve: async (_root, _args, _context, _info) => {
        // This has been changed to always return false -> MICRO-261
        return {
            is_email_available: false,
        };
    },
};
