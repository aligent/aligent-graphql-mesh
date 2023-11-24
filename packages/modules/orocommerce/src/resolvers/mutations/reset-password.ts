import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { CustomerClient } from '../../apis/rest';

export const resetPasswordMutation: MutationResolvers['resetPassword'] = {
    resolve: async (_root, args, context, _info) => {
        const { newPassword, resetPasswordToken } = args;

        const customerClient: CustomerClient = context.injector.get(CustomerClient);

        const response = await customerClient.passwordReset({
            meta: {
                action: 'confirm',
                password: newPassword,
                token: resetPasswordToken,
            },
        });

        console.log('Password reset response: ', response.meta);

        return response.meta.result === 'success';
    },
};
