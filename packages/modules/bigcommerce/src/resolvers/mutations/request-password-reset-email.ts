import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { requestPasswordResetEmail } from '../../apis/rest/resetPassword';

export const requestPasswordResetEmailResolver: MutationResolvers['requestPasswordResetEmail'] = {
    resolve: async (_root, args, _context, _info) => {
        const { email } = args;

        const response = await requestPasswordResetEmail(email);
        return response;
    },
};
