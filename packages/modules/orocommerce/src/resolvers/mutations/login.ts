import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { Auth } from '../../services/auth';
import { GraphqlError } from '@aligent/utils';

export const loginMutation: MutationResolvers['login'] = {
    resolve: async (
        _root,
        { input: { username, password } },
        context: GraphQLModules.Context,
        _info
    ) => {
        try {
            const auth: Auth = context.injector.get(Auth);
            const authData = await auth.login(username, password);

            return authData;
        } catch (error) {
            throw new GraphqlError('authentication', 'Failed to generate an auth token.');
        }
    },
};
