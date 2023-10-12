import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { resetPassword } from '../../apis/rest/resetPassword';

export const resetPasswordResolver: MutationResolvers['resetPassword'] = {
    resolve: async (_root, args, _context, _info) => {
        const { code, resetPasswordToken, newPassword } = args;

        const response = await resetPassword(code, resetPasswordToken, newPassword);
        return response;
    },
};
