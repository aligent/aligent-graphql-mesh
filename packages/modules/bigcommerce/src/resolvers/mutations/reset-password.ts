import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { resetPassword, verifyReCaptcha } from '../../apis/rest';

export const resetPasswordResolver: MutationResolvers['resetPassword'] = {
    resolve: async (_root, args, context, _info) => {
        const { code, resetPasswordToken, newPassword } = args;

        /* If recaptcha is enabled and fails an error will be thrown */
        await verifyReCaptcha(context, 'captcha_type_customer_forgot_password');

        const response = await resetPassword(code, resetPasswordToken, newPassword);
        return response;
    },
};
