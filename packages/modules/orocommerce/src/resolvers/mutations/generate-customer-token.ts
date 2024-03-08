import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { Auth } from '../../services/auth';
import { GraphqlError } from '@aligent/utils';

export const generateCustomerTokenMutation: MutationResolvers['generateCustomerToken'] = {
    resolve: async (_root, { email, password }, context: GraphQLModules.Context, _info) => {
        try {
            const auth: Auth = context.injector.get(Auth);
            const token = await auth.login(email, password);

            return {
                token: (await token).access_token,
            };
        } catch (error) {
            throw new GraphqlError('Login failed.', 'authorization');
        }
    },
};
