import { QueryResolvers } from '@aligent/orocommerce-resolvers';

export const customerResolver = {
    resolve: async (_root, _args, _context, _info) => {
        return {};
    },
} satisfies QueryResolvers['customer'];
