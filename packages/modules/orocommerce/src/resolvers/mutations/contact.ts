import { ContactUsInput, MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ContactClient } from '../../apis/rest/contact';

export const postContactFormMutation: MutationResolvers['postContactForm'] = {
    resolve: async (_root, { input }, context: GraphQLModules.Context, _info) => {
        const contactClient: ContactClient = context.injector.get(ContactClient);
        const contactUsInput = input as ContactUsInput;
        const contactUsOutput = await contactClient.postContact(contactUsInput);
        try {
            return contactUsOutput.status;
        } catch (error) {
            throw new Error('Can not send your comment Now. Please try again later!');
        }
    },
};
