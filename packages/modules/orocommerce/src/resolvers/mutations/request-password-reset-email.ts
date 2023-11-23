import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { CustomerClient } from '../../apis/rest';

export const requestPasswordResetEmailMutation: MutationResolvers['requestPasswordResetEmail'] = {
    resolve: async (_root, args, context, _info) => {
        const { email } = args;

        const customerClient: CustomerClient = context.injector.get(CustomerClient);

        const response = await customerClient.passwordReset({
            meta: {
                action: 'init',
                email: email,
            },
        });

        console.log('Request password reset email response: ', response.meta);

        return response.meta.result === 'success';
    },
};
