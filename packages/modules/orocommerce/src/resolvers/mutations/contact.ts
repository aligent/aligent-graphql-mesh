import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ContactClient } from '../../apis/rest/contact';

export const postContactFormMutation: MutationResolvers['postContactForm'] = {
    resolve: async (_root, { input }, context: GraphQLModules.Context, _info) => {
        if (!input) return false;

        try {
            const contactClient: ContactClient = context.injector.get(ContactClient);

            const response = await contactClient.postContact({
                type: 'contact_request',
                id: '0', // dummy id that Oro will ignore
                attributes: {
                    name: input.name,
                    email: input.email,
                    comment: input.comment,
                    telephone: input.telephone || null,
                },
            });

            return response;
        } catch (error) {
            throw new Error('Can not send your comment Now. Please try again later!');
        }
    },
};
